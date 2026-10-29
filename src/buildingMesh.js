// 建物の外形データから、壁・屋根のジオメトリ(頂点配列)を生成する
// Web Worker から呼ばれる (DOM に依存しない)
import { ShapeUtils, Vector2 } from 'three';

// テクスチャアトラスのセル番号 (atlas.js と対応)
export const CELL = {
	HOUSE_GROUND: 0, HOUSE_UPPER: 1, SHOP_GROUND: 2, OFFICE_UPPER: 3,
	APARTMENT_UPPER: 4, TEMPLE_WALL: 5, FACTORY_WALL: 6, KAWARA: 7,
	CONCRETE_ROOF: 8, METAL_ROOF: 9, TEMPLE_ROOF: 10, PLAIN_WALL: 11,
	TOWER: 12, GOLD: 13, SHRINE_WALL: 14, HIWADA: 15,
};

export const TYPE = { HOUSE: 0, BUILDING: 1, SACRED: 2, FACTORY: 3, SHED: 4, TOWER: 5 };

// バイナリをパース
export function parseChunk(buffer, ox, oz) {
	const dv = new DataView(buffer);
	const count = dv.getUint32(4, true);
	const list = [];
	let o = 8;
	for (let i = 0; i < count; i++) {
		const n = dv.getUint8(o), type = dv.getUint8(o + 1), storeys = dv.getUint8(o + 2);
		const base = dv.getInt16(o + 4, true) / 10;
		const height = dv.getUint16(o + 6, true) / 10;
		o += 8;
		const ring = new Float32Array(n * 2);
		let minX = Infinity, minZ = Infinity, maxX = -Infinity, maxZ = -Infinity;
		for (let k = 0; k < n; k++) {
			const x = ox + dv.getInt16(o, true) / 10, z = oz + dv.getInt16(o + 2, true) / 10;
			o += 4;
			ring[k * 2] = x;
			ring[k * 2 + 1] = z;
			minX = Math.min(minX, x); maxX = Math.max(maxX, x);
			minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
		}
		list.push({ ring, type, storeys, base, height, minX, minZ, maxX, maxZ });
	}
	return list;
}

// 建物ごとに安定した疑似乱数
function hash(x, z) {
	const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
	return s - Math.floor(s);
}

function ringArea(r) {
	let a = 0;
	const n = r.length / 2;
	for (let i = 0; i < n; i++) {
		const j = (i + 1) % n;
		a += r[i * 2] * r[j * 2 + 1] - r[j * 2] * r[i * 2 + 1];
	}
	return a / 2;
}

// 最小外接長方形 (凸包 + 回転キャリパー)
function minRect(ring) {
	const pts = [];
	for (let i = 0; i < ring.length; i += 2) pts.push([ring[i], ring[i + 1]]);
	pts.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
	const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
	const lower = [], upper = [];
	for (const p of pts) {
		while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
		lower.push(p);
	}
	for (let i = pts.length - 1; i >= 0; i--) {
		const p = pts[i];
		while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
		upper.push(p);
	}
	const hull = lower.slice(0, -1).concat(upper.slice(0, -1));
	let best = null;
	for (let i = 0; i < hull.length; i++) {
		const a = hull[i], b = hull[(i + 1) % hull.length];
		let ux = b[0] - a[0], uz = b[1] - a[1];
		const len = Math.hypot(ux, uz);
		if (len < 1e-6) continue;
		ux /= len; uz /= len;
		let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
		for (const p of hull) {
			const u = p[0] * ux + p[1] * uz, v = -p[0] * uz + p[1] * ux;
			minU = Math.min(minU, u); maxU = Math.max(maxU, u);
			minV = Math.min(minV, v); maxV = Math.max(maxV, v);
		}
		const area = (maxU - minU) * (maxV - minV);
		if (!best || area < best.area) {
			const cu = (minU + maxU) / 2, cv = (minV + maxV) / 2;
			best = {
				area,
				cx: cu * ux - cv * uz, cz: cu * uz + cv * ux,
				ux, uz, hu: (maxU - minU) / 2, hv: (maxV - minV) / 2,
			};
		}
	}
	if (!best) return null;
	// u 軸を長辺に
	if (best.hv > best.hu) {
		best = { ...best, ux: -best.uz, uz: best.ux, hu: best.hv, hv: best.hu };
	}
	return best;
}

function faceNormal(a, b, c) {
	const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
	const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
	return [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx];
}

class Builder {
	constructor() {
		this.pos = [];
		this.nrm = [];
		this.uv = [];
		this.col = [];
		this.cell = [];
	}

	// 三角形 (a, b, c は [x, y, z])
	// ref を渡すと、法線が ref から離れる向きになるよう頂点順を揃える
	tri(a, b, c, ua, ub, uc, cell, color, ref = null) {
		if (ref) {
			const n = faceNormal(a, b, c);
			const mx = (a[0] + b[0] + c[0]) / 3 - ref[0], my = (a[1] + b[1] + c[1]) / 3 - ref[1], mz = (a[2] + b[2] + c[2]) / 3 - ref[2];
			if (n[0] * mx + n[1] * my + n[2] * mz < 0) {
				[b, c] = [c, b];
				[ub, uc] = [uc, ub];
			}
		}
		const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
		const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
		let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
		const l = Math.hypot(nx, ny, nz) || 1;
		nx /= l; ny /= l; nz /= l;
		for (const [p, t] of [[a, ua], [b, ub], [c, uc]]) {
			this.pos.push(p[0], p[1], p[2]);
			this.nrm.push(nx, ny, nz);
			this.uv.push(t[0], t[1]);
			this.col.push(color[0], color[1], color[2]);
			this.cell.push(cell);
		}
	}

	quad(a, b, c, d, ua, ub, uc, ud, cell, color, ref = null) {
		this.tri(a, b, c, ua, ub, uc, cell, color, ref);
		this.tri(a, c, d, ua, uc, ud, cell, color, ref);
	}

	// 外形に沿った壁 (y0〜y1)。floorH ごとに v が1進む
	// vBase: 模様の基準になる高さ (地面)。壁は地面より下 (y0) から立ち上げて浮いて見えないようにする
	walls(ring, y0, y1, bay, floorH, cell, color, groundCell = null, groundH = 0, vBase = y0) {
		const n = ring.length / 2;
		let u = 0;
		for (let i = 0; i < n; i++) {
			const j = (i + 1) % n;
			const x0 = ring[i * 2], z0 = ring[i * 2 + 1], x1 = ring[j * 2], z1 = ring[j * 2 + 1];
			const len = Math.hypot(x1 - x0, z1 - z0);
			// 1スパンの幅が整数個になるよう調整
			const bays = Math.max(1, Math.round(len / bay));
			const u1 = u + bays;
			const band = (ya, yb, c, vOffset) => {
				const va = (ya - vBase) / floorH - vOffset, vb = (yb - vBase) / floorH - vOffset;
				this.quad([x0, ya, z0], [x1, ya, z1], [x1, yb, z1], [x0, yb, z0],
					[u, va], [u1, va], [u1, vb], [u, vb], c, color);
			};
			if (groundCell !== null && y1 - vBase > groundH + 0.5) {
				band(y0, vBase + groundH, groundCell, 0);
				band(vBase + groundH, y1, cell, groundH / floorH);
			} else {
				band(y0, y1, groundCell ?? cell, 0);
			}
			u = u1 % 64;
		}
	}

	// 平らな屋根
	flatRoof(ring, y, cell, color, scale = 8) {
		const n = ring.length / 2;
		const contour = [];
		for (let i = 0; i < n; i++) contour.push(new Vector2(ring[i * 2], ring[i * 2 + 1]));
		let tris;
		try {
			tris = ShapeUtils.triangulateShape(contour, []);
		} catch {
			return;
		}
		for (const [a, b, c] of tris) {
			const pa = contour[a], pb = contour[b], pc = contour[c];
			// 上向きになるよう並べる
			const A = [pa.x, y, pa.y], B = [pb.x, y, pb.y], C = [pc.x, y, pc.y];
			const up = (B[2] - A[2]) * (C[0] - A[0]) - (B[0] - A[0]) * (C[2] - A[2]);
			const t = (p) => [p[0] / scale, p[2] / scale];
			if (up > 0) this.tri(A, B, C, t(A), t(B), t(C), cell, color);
			else this.tri(A, C, B, t(A), t(C), t(B), cell, color);
		}
	}

	// 寄棟(hip) または 切妻(gable) 屋根。rect は minRect の結果
	pitchedRoof(rect, y0, rise, eave, style, cell, color, gableCell, gableColor) {
		const { cx, cz, ux, uz } = rect;
		const hu = rect.hu + eave, hv = rect.hv + eave;
		const vx = -uz, vz = ux; // 短辺方向
		const P = (u, v, y) => [cx + ux * u + vx * v, y, cz + uz * u + vz * v];
		const y1 = y0 + rise;
		const ridge = style === 'gable' ? hu : Math.max(0, hu - hv);
		const slope = Math.hypot(hv, rise); // 斜面の長さ
		const tileU = 1.2; // 瓦の列の幅
		const below = [cx, y0 - 100, cz];
		// 長辺側 (2面)
		for (const s of [1, -1]) {
			const e0 = P(-hu * s, s * hv, y0), e1 = P(hu * s, s * hv, y0);
			const r1 = P(ridge * s, 0, y1), r0 = P(-ridge * s, 0, y1);
			this.quad(e0, e1, r1, r0,
				[0, 0], [2 * hu / tileU, 0], [(hu + ridge) / tileU, slope / 1.5], [(hu - ridge) / tileU, slope / 1.5],
				cell, color, below);
		}
		if (style === 'gable') {
			// 妻側の壁 (三角形)
			for (const s of [1, -1]) {
				const a = P(s * rect.hu, -s * rect.hv, y0), b = P(s * rect.hu, s * rect.hv, y0), c = P(s * rect.hu, 0, y1);
				this.tri(a, b, c, [0, 0], [2 * rect.hv / 3.6, 0], [rect.hv / 3.6, rise / 3], gableCell, gableColor, [cx, y0, cz]);
			}
		} else {
			// 寄棟の妻側 (三角形 2面)
			const slopeU = Math.hypot(hu - ridge, rise);
			for (const s of [1, -1]) {
				const a = P(s * hu, -s * hv, y0), b = P(s * hu, s * hv, y0), c = P(s * ridge, 0, y1);
				this.tri(a, b, c, [0, 0], [2 * hv / tileU, 0], [hv / tileU, slopeU / 1.5], cell, color, below);
			}
		}
		// 軒下 (下から見えるとき用の裏面)
		const d = [0.3, 0.27, 0.24];
		const a = P(-hu, -hv, y0), b = P(hu, -hv, y0), c = P(hu, hv, y0), e = P(-hu, hv, y0);
		this.quad(a, b, c, e, [0, 0], [0, 0], [0, 0], [0, 0], CELL.PLAIN_WALL, d, [cx, y0 + 100, cz]);
	}

	toArrays() {
		return {
			position: new Float32Array(this.pos),
			normal: new Float32Array(this.nrm),
			uv: new Float32Array(this.uv),
			color: new Float32Array(this.col),
			cell: new Float32Array(this.cell),
		};
	}
}

const DEG = Math.PI / 180;
const SINK = 13; // 壁を地面の下へ延ばす深さ (m)。地形との差は最大 12m ほど

// 色 (sRGB→リニア近似は省略。atlas の色に掛け合わせる係数)
const tint = (h, a, b) => [a[0] + (b[0] - a[0]) * h, a[1] + (b[1] - a[1]) * h, a[2] + (b[2] - a[2]) * h];

// ポップな色 (テクスチャに掛け合わせる。1 を超えると明るくなる)
const WALL_POP = [
	[1, 0.78, 0.82], [0.75, 0.93, 0.86], [0.78, 0.88, 1], [1, 0.96, 0.7], [0.88, 0.8, 1],
	[1, 0.86, 0.7], [1, 1, 1], [0.82, 1, 0.75], [1, 0.9, 0.95],
];
const ROOF_POP = [
	[0.55, 0.72, 1.3], [1.45, 0.72, 0.55], [0.7, 1.2, 0.78], [0.6, 1.15, 1.15], [1.05, 0.75, 1.3],
	[1.5, 0.62, 0.62], [1.5, 1.05, 0.5], [0.9, 0.95, 1.05],
];
const FLAT_POP = [
	[1.1, 0.6, 0.65], [0.6, 0.88, 1.15], [0.65, 1.05, 0.75], [1.15, 1, 0.5], [0.9, 0.75, 1.15],
	[1.15, 0.8, 0.55], [1.05, 1.05, 1.05], [0.6, 1.05, 1.05],
];
const pick = (list, r) => list[Math.floor(r * list.length) % list.length];

// 昭和初期の落ち着いた色
const WALL_OLD = [[0.95, 0.92, 0.86], [0.78, 0.66, 0.55], [0.9, 0.86, 0.78], [0.7, 0.58, 0.48]];
const ROOF_OLD = [[0.75, 0.77, 0.8], [0.65, 0.67, 0.7], [0.82, 0.83, 0.85]];

// detail: 1=近景 (細かく), 0=遠景 (簡略)
// landmarks: このチャンクにある名所 (ワールド座標 x, z と LANDMARK_SPECS の内容)
// era: 'now' | 'showa' (昭和初期は高い建物を除き、木造の町並みにする)
export function buildChunkGeometry(list, detail, landmarks = [], bounds = null, era = 'now') {
	const B = new Builder();
	const showa = era === 'showa';
	const custom = assignLandmarks(list, landmarks, bounds);
	for (const lm of custom.free) buildLandmark(B, lm, null);
	for (const b of list) {
		if (b.skip) continue;
		if (b.landmark) {
			buildLandmark(B, b.landmark, b);
			continue;
		}
		const area = Math.abs(ringArea(b.ring));
		if (!detail && area < 50 && b.type !== TYPE.SACRED) continue;
		const h = hash(b.ring[0], b.ring[1]);
		const top = b.base + b.height;
		// 地形は粗い格子なので斜面では建物の足元より低くなることがある。壁を地中深くまで延ばして浮いて見えないようにする
		const base = b.base - SINK;
		const g = b.base;
		const ring = b.ring;
		let type = b.type;
		if (showa) {
			// 戦後の高い建物は建っていない
			if (type === TYPE.TOWER || (type !== TYPE.SACRED && b.height > 14)) continue;
			if (type === TYPE.BUILDING || type === TYPE.FACTORY) type = TYPE.HOUSE;
		}

		switch (type) {
			case TYPE.HOUSE: {
				const rect = minRect(ring);
				const fill = rect ? area / (4 * rect.hu * rect.hv) : 0;
				const wallColor = pick(showa ? WALL_OLD : WALL_POP, h);
				const roofColor = pick(showa ? ROOF_OLD : ROOF_POP, hash(h, 3.1));
				// 外形が長方形に近いときだけ勾配屋根 (L字などに掛けると屋根が宙に張り出して見える)
				if (rect && fill > 0.82 && rect.hv > 1.5) {
					const pitch = (detail ? 24 : 22) * DEG;
					const rise = Math.min(rect.hv * Math.tan(pitch), Math.max(1.2, b.height * 0.45));
					const y0 = Math.max(b.base + 2.4, top - rise);
					B.walls(ring, base, y0, 3.6, 3, CELL.HOUSE_UPPER, wallColor, detail ? CELL.HOUSE_GROUND : null, 3, g);
					const style = (rect.hu / rect.hv > 1.5 || h > 0.55) ? 'gable' : 'hip';
					B.pitchedRoof(rect, y0, top - y0, detail ? 0.45 : 0.3, style, CELL.KAWARA, roofColor, CELL.HOUSE_UPPER, wallColor);
				} else {
					B.walls(ring, base, top, 3.6, 3, CELL.HOUSE_UPPER, wallColor, detail ? CELL.HOUSE_GROUND : null, 3, g);
					B.flatRoof(ring, top, CELL.KAWARA, roofColor, 1.2);
				}
				break;
			}
			case TYPE.SACRED: {
				const rect = minRect(ring);
				const width = rect ? rect.hv * 2 : 10;
				// 五重塔: 細長く高い正方形
				if (rect && b.height > width * 2.2 && rect.hu / rect.hv < 1.3) {
					pagoda(B, rect, b.base, b.height, { tiers: 5, wall: 'wood' });
					break;
				}
				const roofColor = tint(h, [0.7, 0.72, 0.78], [0.55, 0.57, 0.62]);
				if (rect && area / (4 * rect.hu * rect.hv) > 0.8) {
					const pitch = 33 * DEG;
					const rise = Math.min(rect.hv * Math.tan(pitch), b.height * 0.6);
					const y0 = Math.max(b.base + 2.5, top - rise);
					B.walls(ring, base, y0, 3, 3.5, CELL.TEMPLE_WALL, [1, 1, 1], null, 0, g);
					const eave = Math.min(3, 0.8 + rect.hv * 0.15);
					B.pitchedRoof(rect, y0, top - y0, eave, 'hip', CELL.TEMPLE_ROOF, roofColor);
				} else {
					B.walls(ring, base, top, 3, 3.5, CELL.TEMPLE_WALL, [1, 1, 1], null, 0, g);
					B.flatRoof(ring, top, CELL.TEMPLE_ROOF, roofColor, 1.2);
				}
				break;
			}
			case TYPE.FACTORY: {
				const c = pick(WALL_POP, h);
				B.walls(ring, base, top, 4, 4, CELL.FACTORY_WALL, c, null, 0, g);
				B.flatRoof(ring, top, CELL.METAL_ROOF, pick(FLAT_POP, hash(h, 1.7)), 6);
				break;
			}
			case TYPE.SHED: {
				const c = pick(WALL_POP, h);
				B.walls(ring, base, top, 3, 2.5, CELL.PLAIN_WALL, c, null, 0, g);
				B.flatRoof(ring, top, CELL.METAL_ROOF, [0.6, 0.6, 0.62], 6);
				break;
			}
			case TYPE.TOWER: {
				tower(B, ring, b.base, b.height);
				break;
			}
			default: {
				// ビル: 階高 3.3m、1階は店舗
				const apartment = h > 0.6 && b.height < 45;
				const wallColor = pick(WALL_POP, hash(h, apartment ? 2.2 : 5.3));
				B.walls(ring, base, top, 3.2, 3.3, apartment ? CELL.APARTMENT_UPPER : CELL.OFFICE_UPPER, wallColor,
					detail ? CELL.SHOP_GROUND : null, 3.6, g);
				B.flatRoof(ring, top, CELL.CONCRETE_ROOF, pick(FLAT_POP, hash(h, 9.1)), 8);
			}
		}
	}
	return B.toArrays();
}

// ---------- 名所 ----------
function pointInRing(x, z, ring) {
	let inside = false;
	const n = ring.length / 2;
	for (let i = 0, j = n - 1; i < n; j = i++) {
		const xi = ring[i * 2], zi = ring[i * 2 + 1], xj = ring[j * 2], zj = ring[j * 2 + 1];
		if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
	}
	return inside;
}

// 名所の位置にある建物を探して印をつける。見つからない (または形が合わない) ものは free に
function assignLandmarks(list, landmarks, bounds) {
	const free = [];
	for (const lm of landmarks) {
		const inChunk = !bounds || (lm.x >= bounds.x0 && lm.x < bounds.x1 && lm.z >= bounds.z0 && lm.z < bounds.z1);
		let best = null, bestScore = Infinity;
		// 塔は「近くで一番高い、細長い寺社の建物」を探す (座標が少しずれていても合わせられる)
		if (lm.kind === 'pagoda') {
			for (const b of list) {
				if (b.landmark || b.type !== TYPE.SACRED || b.height < 12) continue;
				const cx = (b.minX + b.maxX) / 2, cz = (b.minZ + b.maxZ) / 2;
				if (Math.hypot(cx - lm.x, cz - lm.z) > 40) continue;
				const r = minRect(b.ring);
				if (!r || r.hu / r.hv > 1.4 || b.height < r.hv * 2 * 1.05) continue;
				if (-b.height < bestScore) { bestScore = -b.height; best = b; }
			}
			if (best) {
				best.landmark = lm;
				continue;
			}
		}
		for (const b of list) {
			if (b.landmark || b.type === TYPE.SHED) continue;
			if (lm.x < b.minX - 40 || lm.x > b.maxX + 40 || lm.z < b.minZ - 40 || lm.z > b.maxZ + 40) continue;
			const area = Math.abs(ringArea(b.ring));
			if (area < 25) continue;
			let score;
			if (pointInRing(lm.x, lm.z, b.ring)) score = -area;
			else {
				const cx = (b.minX + b.maxX) / 2, cz = (b.minZ + b.maxZ) / 2;
				const d = Math.hypot(cx - lm.x, cz - lm.z);
				if (d > 30) continue;
				score = d * 100 - area;
			}
			if (score < bestScore) { bestScore = score; best = b; }
		}
		// 塔は細長い正方形でないと合わない
		if (best && (lm.kind === 'pagoda' || lm.kind === 'kinkaku' || lm.kind === 'ginkaku' || lm.kind === 'gate') && lm.free) {
			const r = minRect(best.ring);
			const ok = r && r.hu / r.hv < (lm.kind === 'gate' ? 4 : 1.6)
				&& Math.abs(r.hv * 2 - (lm.free.d ?? lm.free.w)) < (lm.free.d ?? lm.free.w) * 0.8;
			if (!ok) {
				if (pointInRing(lm.x, lm.z, best.ring) && Math.abs(ringArea(best.ring)) < 1500) best.skip = true;
				best = null;
			}
		}
		if (best) best.landmark = lm;
		else if (lm.free && inChunk) free.push(lm);
	}
	return { free };
}

const ROOF = {
	gray: [CELL.TEMPLE_ROOF, [0.75, 0.77, 0.82]],
	hiwada: [CELL.HIWADA, [1, 1, 1]],
	green: [CELL.TEMPLE_ROOF, [0.55, 1.35, 1.05]],
};
const WALL = {
	wood: [CELL.TEMPLE_WALL, [0.85, 0.72, 0.6]],
	vermilion: [CELL.SHRINE_WALL, [1, 1, 1]],
	white: [CELL.TEMPLE_WALL, [1.05, 1.05, 1.05]],
};

function buildLandmark(B, lm, b) {
	let rect, base, height;
	if (b) {
		rect = minRect(b.ring);
		base = b.base;
		height = b.height;
		if (!rect) return;
	} else {
		const a = (lm.free.deg ?? 0) * DEG;
		rect = { cx: lm.x, cz: lm.z, ux: Math.cos(a), uz: Math.sin(a), hu: (lm.free.w ?? 10) / 2, hv: (lm.free.d ?? lm.free.w ?? 10) / 2 };
		if (rect.hv > rect.hu) rect = { ...rect, ux: -rect.uz, uz: rect.ux, hu: rect.hv, hv: rect.hu };
		base = lm.y;
		height = lm.free.h;
	}
	if (lm.free?.h && lm.kind !== 'hall' && lm.kind !== 'shrine') height = Math.max(height, lm.free.h * 0.8);
	switch (lm.kind) {
		case 'pagoda': return pagoda(B, rect, base, height, lm);
		case 'gate': return gate(B, rect, base, Math.max(height, 10), lm);
		case 'kinkaku': return kinkaku(B, rect, base, Math.max(height, 11));
		case 'ginkaku': return ginkaku(B, rect, base, Math.max(height, 8));
		case 'tower': return tower(B, b.ring, base, height);
		case 'shrine': return shrine(B, rect, base, Math.max(height, 8), lm);
		default: return hall(B, rect, base, Math.max(height, 8), lm);
	}
}

function scaled(rect, k, kv = k) {
	return { ...rect, hu: rect.hu * k, hv: rect.hv * kv };
}

// 基壇 (石の台)
function podium(B, rect, base, h) {
	B.walls(squareRingRect(scaled(rect, 1)), base - SINK, base + h, 2, 2, CELL.PLAIN_WALL, [0.82, 0.8, 0.76]);
	B.flatRoof(squareRingRect(rect), base + h, CELL.PLAIN_WALL, [0.78, 0.76, 0.72], 4);
}

// 入母屋の大屋根: 下に寄棟、上に切妻を重ねる
function irimoya(B, rect, y0, rise, eave, roof) {
	const [cell, color] = ROOF[roof] ?? ROOF.gray;
	B.pitchedRoof(rect, y0, rise * 0.62, eave, 'hip', cell, color);
	const upper = scaled(rect, 0.82, 0.5);
	B.pitchedRoof(upper, y0 + rise * 0.5, rise * 0.5, 0.2, 'gable', cell, color, cell, color);
}

// 本堂・御影堂など
function hall(B, rect, base, height, lm) {
	const [wc, wcol] = WALL[lm.wall] ?? WALL.wood;
	const pod = Math.min(1.6, height * 0.08);
	podium(B, scaled(rect, 1.02), base, pod);
	const body = scaled(rect, 0.88);
	const wallTop = base + pod + Math.max(4, height * 0.4);
	B.walls(squareRingRect(body), base + pod, wallTop, 3.2, 3.6, wc, wcol);
	const rise = Math.max(3, base + height - wallTop);
	irimoya(B, body, wallTop, rise, Math.min(5, 1.5 + body.hv * 0.22), lm.roof);
}

// 社殿: 朱塗りの柱
function shrine(B, rect, base, height, lm) {
	hall(B, rect, base, height, { ...lm, wall: 'vermilion' });
}

// 楼門・三門 (2階建ての門)
function gate(B, rect, base, height, lm) {
	const [wc, wcol] = WALL[lm.wall] ?? WALL.vermilion;
	const [rc, rcol] = ROOF[lm.roof] ?? ROOF.gray;
	const H = height;
	const lower = scaled(rect, 0.8);
	B.walls(squareRingRect(lower), base - SINK, base + H * 0.34, 2.4, 3.5, wc, wcol);
	B.pitchedRoof(lower, base + H * 0.34, H * 0.08, Math.max(1, rect.hv * 0.35), 'hip', rc, rcol);
	const upper = scaled(rect, 0.72);
	B.walls(squareRingRect(upper), base + H * 0.4, base + H * 0.62, 2.4, 3.5, wc, wcol);
	irimoya(B, upper, base + H * 0.62, H * 0.38, Math.max(1.2, rect.hv * 0.45), lm.roof);
}

// 五重塔・三重塔
function pagoda(B, rect, baseY, height, lm) {
	const tiers = lm.tiers ?? 5;
	const [wc, wcol] = WALL[lm.wall] ?? WALL.wood;
	const w0 = Math.max(rect.hu, rect.hv); // 初層の半幅
	const r0 = { ...rect, hu: w0, hv: w0 };
	const spire = height * 0.24;
	const body = height - spire;
	const tierH = body / tiers;
	const roofColor = [0.55, 0.56, 0.6];
	podium(B, scaled(r0, 1.25), baseY, 1.2);
	for (let t = 0; t < tiers; t++) {
		const w = w0 * (1 - t * (0.4 / tiers));
		const y0 = baseY + 1.2 + t * tierH;
		const core = { ...rect, hu: w * 0.6, hv: w * 0.6 };
		B.walls(squareRingRect(core), y0 - (t ? 0.5 : SINK), y0 + tierH * 0.5, 1.8, 2.8, wc, wcol.map((v) => v * 0.75));
		// 大きく張り出した軒 (塔の幅いっぱいに広がる)
		B.pitchedRoof(core, y0 + tierH * 0.5, tierH * 0.4, w * 0.95, 'hip', CELL.TEMPLE_ROOF, roofColor);
	}
	// 相輪 (九輪)
	const top = baseY + 1.2 + body;
	const s = Math.max(0.25, w0 * 0.05);
	B.walls(squareRingRect({ ...rect, hu: s, hv: s }), top - 1.5, top + spire, 1, 2, CELL.METAL_ROOF, [0.45, 0.38, 0.28]);
	for (let i = 0; i < 9; i++) {
		const y = top + spire * (0.15 + i * 0.07);
		B.walls(squareRingRect({ ...rect, hu: s * 3, hv: s * 3 }), y, y + spire * 0.025, 1, 1, CELL.METAL_ROOF, [0.55, 0.45, 0.25]);
	}
}

// 金閣 (鹿苑寺 舎利殿)
function kinkaku(B, rect, base, H) {
	const r = scaled(rect, 0.9);
	const hiwada = [CELL.HIWADA, [0.75, 0.68, 0.62]];
	B.walls(squareRingRect(r), base - SINK, base + H * 0.3, 2.5, 3, CELL.TEMPLE_WALL, [0.95, 0.85, 0.7]);
	B.pitchedRoof(r, base + H * 0.3, H * 0.06, 1.2, 'hip', hiwada[0], hiwada[1]);
	B.walls(squareRingRect(scaled(r, 0.95)), base + H * 0.36, base + H * 0.58, 2.5, 3, CELL.GOLD, [1.25, 1.2, 1.1]);
	B.pitchedRoof(scaled(r, 0.95), base + H * 0.58, H * 0.06, 1.1, 'hip', hiwada[0], hiwada[1]);
	const top = scaled(r, 0.62);
	B.walls(squareRingRect(top), base + H * 0.64, base + H * 0.8, 2, 3, CELL.GOLD, [1.25, 1.2, 1.1]);
	B.pitchedRoof(top, base + H * 0.8, H * 0.2, 1.1, 'hip', hiwada[0], hiwada[1]);
	// 屋根の上の鳳凰
	B.walls(squareRingRect({ ...rect, hu: 0.5, hv: 0.3 }), base + H, base + H + 1.6, 1, 1, CELL.GOLD, [1.3, 1.25, 1.1]);
}

// 銀閣 (慈照寺 観音殿)
function ginkaku(B, rect, base, H) {
	const r = scaled(rect, 0.9);
	B.walls(squareRingRect(r), base - SINK, base + H * 0.38, 2.5, 3, CELL.TEMPLE_WALL, [0.7, 0.6, 0.5]);
	B.pitchedRoof(r, base + H * 0.38, H * 0.08, 1.1, 'hip', CELL.HIWADA, [0.7, 0.65, 0.6]);
	const top = scaled(r, 0.7);
	B.walls(squareRingRect(top), base + H * 0.46, base + H * 0.72, 2, 3, CELL.TEMPLE_WALL, [0.45, 0.4, 0.38]);
	B.pitchedRoof(top, base + H * 0.72, H * 0.28, 1.2, 'hip', CELL.HIWADA, [0.7, 0.65, 0.6]);
}

function squareRingRect(rect) {
	const { cx, cz, ux, uz, hu, hv } = rect;
	const vx = -uz, vz = ux;
	const out = new Float32Array(8);
	[[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([a, c], i) => {
		out[i * 2] = cx + ux * a * hu + vx * c * hv;
		out[i * 2 + 1] = cz + uz * a * hu + vz * c * hv;
	});
	if (ringArea(out) > 0) {
		const r = new Float32Array(8);
		for (let i = 0; i < 4; i++) { r[i * 2] = out[(3 - i) * 2]; r[i * 2 + 1] = out[(3 - i) * 2 + 1]; }
		return r;
	}
	return out;
}

// 京都タワーのような塔
function tower(B, ring, baseY, height) {
	let cx = 0, cz = 0;
	const n = ring.length / 2;
	for (let i = 0; i < n; i++) { cx += ring[i * 2]; cz += ring[i * 2 + 1]; }
	cx /= n; cz /= n;
	// 足元のビル部分
	const podium = Math.min(31, height * 0.25);
	B.walls(ring, baseY - SINK, baseY + podium, 3.2, 3.3, CELL.OFFICE_UPPER, [1, 1, 1], CELL.SHOP_GROUND, 4);
	B.flatRoof(ring, baseY + podium, CELL.CONCRETE_ROOF, [0.9, 0.9, 0.9]);
	// 円筒の塔身 (上に向かって細く、展望室で膨らむ)
	const seg = 16;
	const prof = [
		[0, 6.5], [0.55, 4.5], [0.72, 4.2], [0.74, 7.5], [0.84, 7.5], [0.86, 3.5], [0.97, 1.2], [1, 0.3],
	];
	const y0 = baseY + podium, y1 = baseY + height;
	for (let p = 0; p < prof.length - 1; p++) {
		const [ta, ra] = prof[p], [tb, rb] = prof[p + 1];
		const ya = y0 + (y1 - y0) * ta, yb = y0 + (y1 - y0) * tb;
		const cell = (p === 3) ? CELL.OFFICE_UPPER : CELL.TOWER;
		const color = p >= 5 ? (p % 2 ? [1, 0.3, 0.25] : [1, 1, 1]) : [1, 1, 1];
		for (let i = 0; i < seg; i++) {
			const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
			B.quad(
				[cx + Math.cos(a0) * ra, ya, cz + Math.sin(a0) * ra],
				[cx + Math.cos(a1) * ra, ya, cz + Math.sin(a1) * ra],
				[cx + Math.cos(a1) * rb, yb, cz + Math.sin(a1) * rb],
				[cx + Math.cos(a0) * rb, yb, cz + Math.sin(a0) * rb],
				[i / 2, 0], [(i + 1) / 2, 0], [(i + 1) / 2, (yb - ya) / 3.3], [i / 2, (yb - ya) / 3.3], cell, color,
				[cx, (ya + yb) / 2, cz],
			);
		}
	}
}
