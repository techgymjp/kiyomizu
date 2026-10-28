// PLATEAU 京都市 建築物モデル(LOD1 3D Tiles) から、ゲーム用の軽量な建物データを作る
//
//   node tools/build-buildings.mjs
//
// 各建物の「外形(フットプリント)・地盤高・高さ・種別・階数」だけを取り出し、
// 1km 四方のチャンクごとのバイナリ (public/buildings/{cx}_{cz}.bin) に書き出す。
// 描画はゲーム側で外形を押し出し、屋根や壁を生成して行う。
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import draco3d from 'draco3d';
import { ecefToWorld, geoToWorld } from '../src/geo.js';
import { SACRED_AREAS } from './sacred.mjs';
import { WARDS } from '../src/wards.js';

const CACHE = 'tools/.cache';
const OUT = 'public/buildings';
export const CHUNK = 1000; // m

const m = ecefToWorld.elements;

function download(url) {
	const file = join(CACHE, url.replace(/^https:\/\//, ''));
	if (!existsSync(file)) {
		mkdirSync(dirname(file), { recursive: true });
		execFileSync('curl', ['-sSf', '--retry', '4', '-o', file, url]);
	}
	return readFileSync(file);
}

const decoderModule = await draco3d.createDecoderModule({});

function decodeDraco(buf) {
	const d = decoderModule;
	const decoder = new d.Decoder();
	const buffer = new d.DecoderBuffer();
	buffer.Init(new Int8Array(buf.buffer, buf.byteOffset, buf.byteLength), buf.byteLength);
	const mesh = new d.Mesh();
	const status = decoder.DecodeBufferToMesh(buffer, mesh);
	if (!status.ok()) throw new Error(status.error_msg());
	const getAttr = (id) => {
		const attr = decoder.GetAttributeByUniqueId(mesh, id);
		const n = attr.num_components();
		const arr = new d.DracoFloat32Array();
		decoder.GetAttributeFloatForAllPoints(mesh, attr, arr);
		const out = new Float32Array(mesh.num_points() * n);
		for (let i = 0; i < out.length; i++) out[i] = arr.GetValue(i);
		d.destroy(arr);
		return out;
	};
	const faces = new Uint32Array(mesh.num_faces() * 3);
	const ia = new d.DracoInt32Array();
	for (let i = 0; i < mesh.num_faces(); i++) {
		decoder.GetFaceFromMesh(mesh, i, ia);
		faces[i * 3] = ia.GetValue(0);
		faces[i * 3 + 1] = ia.GetValue(1);
		faces[i * 3 + 2] = ia.GetValue(2);
	}
	d.destroy(ia);
	return { getAttr, faces, cleanup: () => { d.destroy(mesh); d.destroy(buffer); d.destroy(decoder); } };
}

function parseB3dm(buf) {
	const ftj = buf.readUInt32LE(12), ftb = buf.readUInt32LE(16);
	const btj = buf.readUInt32LE(20), btb = buf.readUInt32LE(24);
	let o = 28;
	const featureTable = JSON.parse(buf.subarray(o, o + ftj).toString()); o += ftj + ftb;
	const batchTable = btj ? JSON.parse(buf.subarray(o, o + btj).toString()) : {};
	const batchBin = buf.subarray(o + btj, o + btj + btb); o += btj + btb;
	const glb = buf.subarray(o);
	const jsonLen = glb.readUInt32LE(12);
	const gltf = JSON.parse(glb.subarray(20, 20 + jsonLen).toString());
	const binStart = 20 + jsonLen + 8;
	const bin = glb.subarray(binStart);
	return { featureTable, batchTable, batchBin, gltf, bin };
}

function batchValue(bt, bin, key, i) {
	const v = bt[key];
	if (v == null) return null;
	if (Array.isArray(v)) return v[i];
	if (v.byteOffset != null) {
		const size = { BYTE: 1, UNSIGNED_BYTE: 1, SHORT: 2, UNSIGNED_SHORT: 2, INT: 4, FLOAT: 4, DOUBLE: 8 }[v.componentType];
		const p = v.byteOffset + i * size;
		switch (v.componentType) {
			case 'BYTE': return bin.readInt8(p);
			case 'UNSIGNED_BYTE': return bin.readUInt8(p);
			case 'SHORT': return bin.readInt16LE(p);
			case 'INT': return bin.readInt32LE(p);
			case 'FLOAT': return bin.readFloatLE(p);
			case 'DOUBLE': return bin.readDoubleLE(p);
		}
	}
	return null;
}

// 種別: 0=住宅(瓦屋根), 1=ビル, 2=社寺, 3=工場・倉庫, 4=小屋, 5=塔
const sacred = SACRED_AREAS.map((a) => ({ ...a, p: geoToWorld(a.lat, a.lon, 0) }));
function inSacred(x, z) {
	return sacred.some((a) => Math.hypot(a.p.x - x, a.p.z - z) < a.r);
}
function classify(usage, cls, height, area, x, z) {
	if (height > 60 && area < 600) return 5;
	if (cls === '普通無壁舎' || height < 3.2) return 4;
	if (inSacred(x, z) && height < 40 && area > 40) return 2;
	if (usage === '工場' || usage === '運輸倉庫施設' || usage === '供給処理施設') return 3;
	if (height <= 11 && area < 300) return 0;
	if (/住宅/.test(usage ?? '') && height <= 11 && area < 600) return 0;
	return 1;
}

function ringArea(r) {
	let a = 0;
	for (let i = 0; i < r.length; i++) {
		const [x1, z1] = r[i], [x2, z2] = r[(i + 1) % r.length];
		a += x1 * z2 - x2 * z1;
	}
	return a / 2;
}

// 直線上の点を間引く (Douglas-Peucker 風に、許容誤差 tol 以内の頂点を除去)
function simplify(ring, tol = 0.25) {
	let pts = ring.slice();
	let changed = true;
	while (changed && pts.length > 3) {
		changed = false;
		for (let i = 0; i < pts.length && pts.length > 3; i++) {
			const a = pts[(i - 1 + pts.length) % pts.length], b = pts[i], c = pts[(i + 1) % pts.length];
			const dx = c[0] - a[0], dz = c[1] - a[1];
			const len = Math.hypot(dx, dz) || 1e-9;
			const dist = Math.abs((b[0] - a[0]) * dz - (b[1] - a[1]) * dx) / len;
			const tooClose = Math.hypot(b[0] - a[0], b[1] - a[1]) < 0.15;
			if (dist < tol || tooClose) {
				pts.splice(i, 1);
				changed = true;
				i--;
			}
		}
	}
	return pts;
}

// 上面の三角形から外周リングを取り出す
function footprint(tris) {
	const key = (p) => `${Math.round(p[0] * 50)},${Math.round(p[1] * 50)}`;
	const pts = new Map();
	const edges = new Map();
	for (const t of tris) {
		const ks = t.map((p) => { const k = key(p); pts.set(k, p); return k; });
		for (let i = 0; i < 3; i++) {
			const a = ks[i], b = ks[(i + 1) % 3];
			if (a === b) continue;
			const rev = `${b}|${a}`;
			if (edges.has(rev)) edges.delete(rev);
			else edges.set(`${a}|${b}`, [a, b]);
		}
	}
	const next = new Map();
	for (const [a, b] of edges.values()) next.set(a, b);
	const rings = [];
	const used = new Set();
	for (const start of next.keys()) {
		if (used.has(start)) continue;
		const ring = [];
		let k = start;
		while (k && !used.has(k)) {
			used.add(k);
			ring.push(pts.get(k));
			k = next.get(k);
		}
		if (ring.length >= 3) rings.push(ring);
	}
	if (!rings.length) return null;
	rings.sort((a, b) => Math.abs(ringArea(b)) - Math.abs(ringArea(a)));
	let ring = rings[0];
	// 反時計回り (x東, z南 の座標で上から見て) に揃える
	if (ringArea(ring) > 0) ring = ring.reverse();
	return ring;
}

const chunks = new Map();
let total = 0, skipped = 0;

const only = process.env.WARD;
for (const ward of WARDS.filter((w) => !only || w.name === only)) {
	const base = `https://assets.cms.plateau.reearth.io/assets/${ward.lod1}/`;
	const tileset = JSON.parse(download(`${base}tileset.json`).toString());
	const leaves = [];
	(function walk(t) {
		if (!t.children?.length && t.content?.uri) leaves.push(t.content.uri);
		t.children?.forEach(walk);
	})(tileset.root);
	console.log(`${ward.name}: ${leaves.length} tiles`);

	for (const uri of leaves) {
		const { featureTable, batchTable, batchBin, gltf, bin } = parseB3dm(download(base + uri));
		const rtc = gltf.extensions?.CESIUM_RTC?.center ?? featureTable.RTC_CENTER ?? [0, 0, 0];
		for (const meshDef of gltf.meshes) {
			for (const prim of meshDef.primitives) {
				const ext = prim.extensions?.KHR_draco_mesh_compression;
				if (!ext) continue;
				const bv = gltf.bufferViews[ext.bufferView];
				const dec = decodeDraco(bin.subarray(bv.byteOffset ?? 0, (bv.byteOffset ?? 0) + bv.byteLength));
				const pos = dec.getAttr(ext.attributes.POSITION);
				const bid = dec.getAttr(ext.attributes._BATCHID);
				const faces = dec.faces;
				dec.cleanup();

				// 頂点をワールド座標へ (glTF の Y-up → 3D Tiles の Z-up → ECEF → ワールド)
				const n = pos.length / 3;
				const wp = new Float64Array(n * 3);
				for (let i = 0; i < n; i++) {
					const x = pos[i * 3] + rtc[0], y = -pos[i * 3 + 2] + rtc[1], z = pos[i * 3 + 1] + rtc[2];
					wp[i * 3] = m[0] * x + m[4] * y + m[8] * z + m[12];
					wp[i * 3 + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
					wp[i * 3 + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
				}

				// 建物ごとに三角形をまとめる
				const byBatch = new Map();
				for (let f = 0; f < faces.length; f += 3) {
					const b = Math.round(bid[faces[f]]);
					if (!byBatch.has(b)) byBatch.set(b, []);
					byBatch.get(b).push(faces[f], faces[f + 1], faces[f + 2]);
				}

				for (const [b, idx] of byBatch) {
					total++;
					let minY = Infinity, maxY = -Infinity;
					for (const i of idx) {
						minY = Math.min(minY, wp[i * 3 + 1]);
						maxY = Math.max(maxY, wp[i * 3 + 1]);
					}
					const top = [];
					for (let k = 0; k < idx.length; k += 3) {
						const ys = [0, 1, 2].map((j) => wp[idx[k + j] * 3 + 1]);
						if (Math.min(...ys) > maxY - 0.05) {
							top.push([0, 1, 2].map((j) => [wp[idx[k + j] * 3], wp[idx[k + j] * 3 + 2]]));
						}
					}
					let ring = top.length ? footprint(top) : null;
					if (!ring) { skipped++; continue; }
					ring = simplify(ring);
					if (ring.length < 3) { skipped++; continue; }
					if (ring.length > 255) ring = simplify(ring, 1.0).slice(0, 255);
					const area = Math.abs(ringArea(ring));
					const height = maxY - minY;
					if (area < 4 || height < 1) { skipped++; continue; }

					const usage = batchValue(batchTable, batchBin, 'bldg:usage', b);
					const cls = batchValue(batchTable, batchBin, 'bldg:class', b);
					const storeys = batchValue(batchTable, batchBin, 'bldg:storeysAboveGround', b);
					let cx = 0, cz = 0;
					for (const p of ring) { cx += p[0]; cz += p[1]; }
					cx /= ring.length; cz /= ring.length;
					const type = classify(usage, cls, height, area, cx, cz);
					const key = `${Math.floor(cx / CHUNK)}_${Math.floor(cz / CHUNK)}`;
					if (!chunks.has(key)) chunks.set(key, []);
					chunks.get(key).push({ ring, base: minY, height, type, storeys: storeys > 0 ? storeys : 0 });
				}
			}
		}
	}
}

// 書き出し
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
let bytes = 0;
const index = [];
for (const [key, list] of chunks) {
	const [cx, cz] = key.split('_').map(Number);
	const ox = cx * CHUNK, oz = cz * CHUNK;
	let size = 8;
	for (const b of list) size += 8 + b.ring.length * 4;
	const buf = Buffer.alloc(size);
	buf.write('KYB1', 0);
	buf.writeUInt32LE(list.length, 4);
	let o = 8;
	for (const b of list) {
		buf.writeUInt8(b.ring.length, o);
		buf.writeUInt8(b.type, o + 1);
		buf.writeUInt8(Math.min(255, b.storeys), o + 2);
		buf.writeUInt8(0, o + 3);
		buf.writeInt16LE(Math.round(b.base * 10), o + 4);
		buf.writeUInt16LE(Math.min(65535, Math.round(b.height * 10)), o + 6);
		o += 8;
		for (const [x, z] of b.ring) {
			// チャンク原点からの相対座標 (0.1m 単位、はみ出しは許容範囲内に収める)
			buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round((x - ox) * 10))), o);
			buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round((z - oz) * 10))), o + 2);
			o += 4;
		}
	}
	writeFileSync(join(OUT, `${key}.bin`), buf);
	bytes += size;
	index.push([cx, cz, list.length]);
}
writeFileSync(join(OUT, 'index.json'), JSON.stringify({ chunk: CHUNK, chunks: index }));
console.log(`buildings: ${total - skipped} / ${total} (skipped ${skipped}), chunks: ${chunks.size}, ${(bytes / 1e6).toFixed(1)} MB`);
