// 国土地理院の標高タイル(dem_png)と空中写真(seamlessphoto)から京都の地形を生成する
import {
	BufferGeometry, Float32BufferAttribute, Mesh, MeshLambertMaterial, Group,
	CanvasTexture, SRGBColorSpace, Vector3,
} from 'three';
import { geoToWorld, worldToGeo, lonToTileX, latToTileY, tileXToLon, tileYToLat } from './geo.js';
import { loadImage } from './loader.js';

const DEM_URL = (z, x, y) => `https://cyberjapandata.gsi.go.jp/xyz/dem_png/${z}/${x}/${y}.png`;
const PHOTO_URL = (z, x, y) => `https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/${z}/${x}/${y}.jpg`;

// 京都市街を覆う z12 タイル範囲 (この内側を z14 の詳細地形で埋める)
const Z12_X = [3591, 3593];
const Z12_Y = [1621, 1623];
// 外周の遠景
const RING = 1;

const FINE_Z = 14;
const COARSE_Z = 12;
const SEGMENTS = 64;
// 近くのチャンクは高解像度の写真に差し替える [ズーム, この距離(m)より近いとき]
const HI_RES = [[17, 1300], [16, 3000]];
const HI_RES_HYSTERESIS = 1200;

function decodeDem(bitmap) {
	const canvas = new OffscreenCanvas(256, 256);
	const ctx = canvas.getContext('2d', { willReadFrequently: true });
	ctx.drawImage(bitmap, 0, 0);
	const data = ctx.getImageData(0, 0, 256, 256).data;
	const out = new Float32Array(256 * 256);
	for (let i = 0; i < out.length; i++) {
		const r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2];
		let v = r * 65536 + g * 256 + b;
		if (v === 8388608) v = 0; // 無効値
		else if (v > 8388608) v -= 16777216;
		out[i] = v * 0.01;
	}
	return out;
}

const _p = new Vector3();
const _g = {};

// 空中写真の緑(木々)を紅葉の色に塗り替える
function autumn(material) {
	material.onBeforeCompile = (shader) => {
		shader.vertexShader = shader.vertexShader
			.replace('#include <common>', '#include <common>\nvarying vec3 vWorld;')
			.replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;');
		shader.fragmentShader = shader.fragmentShader
			.replace('#include <common>', `#include <common>
				varying vec3 vWorld;
				float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
				float vnoise(vec2 p) {
					vec2 i = floor(p), f = fract(p);
					f = f * f * (3.0 - 2.0 * f);
					return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
				}`)
			.replace('#include <map_fragment>', `#include <map_fragment>
				{
					vec3 c = diffuseColor.rgb;
					float green = c.g - max(c.r, c.b);
					float m = smoothstep(0.005, 0.05, green);
					float n = vnoise(vWorld.xz / 18.0) * 0.6 + vnoise(vWorld.xz / 70.0) * 0.4;
					// 赤・朱・橙・黄、ところどころ常緑樹
					vec3 red = vec3(0.85, 0.06, 0.05);
					vec3 orange = vec3(0.95, 0.38, 0.05);
					vec3 yellow = vec3(0.98, 0.72, 0.12);
					vec3 everg = vec3(0.16, 0.32, 0.12);
					vec3 a = n < 0.4 ? mix(red, orange, n / 0.4) : n < 0.62 ? mix(orange, yellow, (n - 0.4) / 0.22) : mix(yellow, everg, smoothstep(0.66, 0.9, n));
					float lum = dot(c, vec3(0.3, 0.59, 0.11));
					diffuseColor.rgb = mix(c, a * (0.35 + lum * 1.9), m * 0.9);
				}`);
	};
	material.customProgramCacheKey = () => 'autumn';
	return material;
}

class Chunk {
	constructor(z, x, y) {
		this.z = z;
		this.x = x;
		this.y = y;
		this.heights = new Float32Array((SEGMENTS + 1) ** 2);
		this.mesh = null;
		this.baseTexture = null;
		this.hiTexture = null;
		this.hiLoading = false;
		this.hiLevel = 0;
		const lon = tileXToLon(x + 0.5, z);
		const lat = tileYToLat(y + 0.5, z);
		this.center = geoToWorld(lat, lon, 0);
	}

	// グリッド上(0..SEGMENTS)の高さを双線形補間
	sample(u, v) {
		const s = SEGMENTS;
		u = Math.min(Math.max(u, 0), s);
		v = Math.min(Math.max(v, 0), s);
		const i = Math.min(Math.floor(u), s - 1);
		const j = Math.min(Math.floor(v), s - 1);
		const fu = u - i, fv = v - j;
		const h = this.heights;
		const a = h[j * (s + 1) + i], b = h[j * (s + 1) + i + 1];
		const c = h[(j + 1) * (s + 1) + i], d = h[(j + 1) * (s + 1) + i + 1];
		// メッシュの三角形分割 (a-c-b, b-c-d) と一致させる
		if (fu + fv <= 1) return a + (b - a) * fu + (c - a) * fv;
		return d + (c - d) * (1 - fu) + (b - d) * (1 - fv);
	}
}

export class Terrain {
	constructor(scene) {
		this.group = new Group();
		this.group.name = 'terrain';
		scene.add(this.group);
		this.fine = new Map();
		this.coarse = new Map();
		this.dem = new Map(); // `${z}/${x}/${y}` → Float32Array
		this.player = new Vector3();
	}

	key(z, x, y) {
		return `${z}/${x}/${y}`;
	}

	async init(onProgress = () => {}) {
		const jobs = [];
		const f = 2 ** (FINE_Z - COARSE_Z);
		for (let x = Z12_X[0] * f; x < (Z12_X[1] + 1) * f; x++) {
			for (let y = Z12_Y[0] * f; y < (Z12_Y[1] + 1) * f; y++) {
				const c = new Chunk(FINE_Z, x, y);
				this.fine.set(this.key(FINE_Z, x, y), c);
				jobs.push(c);
			}
		}
		for (let x = Z12_X[0] - RING; x <= Z12_X[1] + RING; x++) {
			for (let y = Z12_Y[0] - RING; y <= Z12_Y[1] + RING; y++) {
				const inner = x >= Z12_X[0] && x <= Z12_X[1] && y >= Z12_Y[0] && y <= Z12_Y[1];
				if (inner) continue;
				const c = new Chunk(COARSE_Z, x, y);
				this.coarse.set(this.key(COARSE_Z, x, y), c);
				jobs.push(c);
			}
		}

		// 標高タイルの読み込み
		const demKeys = new Set();
		for (const c of jobs) {
			for (let dx = -1; dx <= 1; dx++) {
				for (let dy = -1; dy <= 1; dy++) demKeys.add(this.key(c.z, c.x + dx, c.y + dy));
			}
		}
		let done = 0;
		const total = demKeys.size + jobs.length;
		await Promise.all([...demKeys].map(async (k) => {
			const [z, x, y] = k.split('/').map(Number);
			try {
				const bmp = await loadImage(DEM_URL(z, x, y), () => this.priority(z, x, y));
				this.dem.set(k, decodeDem(bmp));
			} catch (e) {
				// 範囲外などで取得できないタイルは 0m 扱い
			}
			onProgress(++done / total);
		}));

		for (const c of jobs) this.buildMesh(c);

		// 基本解像度の空中写真
		await Promise.all(jobs.map(async (c) => {
			const tz = c.z === FINE_Z ? FINE_Z : COARSE_Z + 1;
			await this.loadPhoto(c, tz).then((tex) => {
				c.baseTexture = tex;
				if (!c.hiTexture) c.mesh.material.map = tex;
				c.mesh.material.color.set(0xffffff);
				c.mesh.material.needsUpdate = true;
			}).catch(() => {});
			onProgress(++done / total);
		}));
		this.dem.clear();
		this.ready = true;
	}

	priority(z, x, y) {
		const lon = tileXToLon(x + 0.5, z);
		const lat = tileYToLat(y + 0.5, z);
		const p = geoToWorld(lat, lon, 0);
		return p.distanceTo(this.player) * (z === COARSE_Z ? 3 : 1);
	}

	// z のグローバルピクセル座標で標高を取得
	demPixel(z, gx, gy) {
		const tx = Math.floor(gx / 256), ty = Math.floor(gy / 256);
		const d = this.dem.get(this.key(z, tx, ty));
		if (!d) return 0;
		const px = Math.min(255, Math.max(0, Math.floor(gx - tx * 256)));
		const py = Math.min(255, Math.max(0, Math.floor(gy - ty * 256)));
		return d[py * 256 + px];
	}

	demSample(z, gx, gy) {
		// ピクセル中心基準で双線形補間
		gx -= 0.5; gy -= 0.5;
		const x0 = Math.floor(gx), y0 = Math.floor(gy);
		const fx = gx - x0, fy = gy - y0;
		const a = this.demPixel(z, x0, y0), b = this.demPixel(z, x0 + 1, y0);
		const c = this.demPixel(z, x0, y0 + 1), d = this.demPixel(z, x0 + 1, y0 + 1);
		return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy;
	}

	buildMesh(chunk) {
		const s = SEGMENTS;
		const positions = new Float32Array((s + 1) ** 2 * 3);
		const uvs = new Float32Array((s + 1) ** 2 * 2);
		const p = new Vector3();
		// 遠景は詳細地形の下に潜るよう少し下げる
		const drop = chunk.z === COARSE_Z ? 4 : 0;
		for (let j = 0; j <= s; j++) {
			for (let i = 0; i <= s; i++) {
				const gx = (chunk.x + i / s) * 256;
				const gy = (chunk.y + j / s) * 256;
				const h = this.demSample(chunk.z, gx, gy);
				const idx = j * (s + 1) + i;
				chunk.heights[idx] = h;
				geoToWorld(tileYToLat(gy / 256, chunk.z), tileXToLon(gx / 256, chunk.z), h - drop, p);
				positions[idx * 3] = p.x;
				positions[idx * 3 + 1] = p.y;
				positions[idx * 3 + 2] = p.z;
				uvs[idx * 2] = i / s;
				uvs[idx * 2 + 1] = 1 - j / s;
			}
		}
		const index = [];
		for (let j = 0; j < s; j++) {
			for (let i = 0; i < s; i++) {
				const a = j * (s + 1) + i, b = a + 1, c = a + s + 1, d = c + 1;
				index.push(a, c, b, b, c, d);
			}
		}
		const geom = new BufferGeometry();
		geom.setAttribute('position', new Float32BufferAttribute(positions, 3));
		geom.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
		geom.setIndex(index);
		geom.computeVertexNormals();
		geom.computeBoundingSphere();
		const mat = autumn(new MeshLambertMaterial({ color: 0x6b7a5a }));
		chunk.mesh = new Mesh(geom, mat);
		chunk.mesh.matrixAutoUpdate = false;
		chunk.mesh.updateMatrix();
		chunk.mesh.receiveShadow = true;
		this.group.add(chunk.mesh);
	}

	// chunk を覆う z=tz の写真タイルを合成してテクスチャにする
	async loadPhoto(chunk, tz) {
		const n = 2 ** (tz - chunk.z);
		const prio = () => chunk.center.distanceTo(this.player) * (chunk.z === COARSE_Z ? 3 : 1);
		const canvas = document.createElement('canvas');
		canvas.width = canvas.height = 256 * n;
		const ctx = canvas.getContext('2d');
		const jobs = [];
		for (let dx = 0; dx < n; dx++) {
			for (let dy = 0; dy < n; dy++) {
				jobs.push(loadImage(PHOTO_URL(tz, chunk.x * n + dx, chunk.y * n + dy), prio)
					.then((bmp) => {
						ctx.drawImage(bmp, dx * 256, dy * 256);
						bmp.close();
					})
					.catch(() => {}));
			}
		}
		await Promise.all(jobs);
		const tex = new CanvasTexture(canvas);
		tex.colorSpace = SRGBColorSpace;
		tex.anisotropy = 8;
		return tex;
	}

	// 毎フレーム呼ぶ: 近くのチャンクほど高解像度の写真に差し替える
	desiredLevel(d) {
		for (const [z, dist] of HI_RES) if (d < dist) return z;
		return 0;
	}

	update(playerPos) {
		this.player.copy(playerPos);
		if (!this.ready) return;
		let loading = 0;
		for (const c of this.fine.values()) if (c.hiLoading) loading++;
		const list = [...this.fine.values()]
			.map((c) => ({ c, d: Math.hypot(c.center.x - playerPos.x, c.center.z - playerPos.z) }))
			.sort((a, b) => a.d - b.d);
		for (const { c, d } of list) {
			const want = this.desiredLevel(d);
			// 離れたら解放 (少し余裕を持たせる)
			if (c.hiLevel && want < c.hiLevel && this.desiredLevel(d - HI_RES_HYSTERESIS) < c.hiLevel) {
				c.hiTexture.dispose();
				c.hiTexture = null;
				c.hiLevel = 0;
				c.mesh.material.map = c.baseTexture;
				c.mesh.material.needsUpdate = true;
			}
			if (want > (c.hiLevel || 0) && !c.hiLoading && loading < 3) {
				c.hiLoading = true;
				loading++;
				this.loadPhoto(c, want).then((tex) => {
					c.hiLoading = false;
					const now = this.desiredLevel(Math.hypot(c.center.x - this.player.x, c.center.z - this.player.z) - HI_RES_HYSTERESIS);
					if (now < want) {
						tex.dispose();
						return;
					}
					c.hiTexture?.dispose();
					c.hiTexture = tex;
					c.hiLevel = want;
					c.mesh.material.map = tex;
					c.mesh.material.color.set(0xffffff);
					c.mesh.material.needsUpdate = true;
				});
			}
		}
	}

	// ワールド座標 (x, z) の地表の高さ (ワールドの y)
	heightAtWorld(x, z) {
		_p.set(x, 0, z);
		worldToGeo(_p, _g);
		const h = this.heightAt(_g.lat, _g.lon);
		// 標高 h の点のワールド y (地球の丸みの分だけ補正)
		return geoToWorld(_g.lat, _g.lon, h, _p).y;
	}

	// 緯度経度における地表の標高(m)
	heightAt(lat, lon) {
		for (const [z, map] of [[FINE_Z, this.fine], [COARSE_Z, this.coarse]]) {
			const gx = lonToTileX(lon, z), gy = latToTileY(lat, z);
			const tx = Math.floor(gx), ty = Math.floor(gy);
			const c = map.get(this.key(z, tx, ty));
			if (c) {
				const h = c.sample((gx - tx) * SEGMENTS, (gy - ty) * SEGMENTS);
				return z === COARSE_Z ? h - 4 : h;
			}
		}
		return 0;
	}

	// 地形データの範囲 (緯度経度)
	bounds() {
		return {
			west: tileXToLon(Z12_X[0] - RING, COARSE_Z),
			east: tileXToLon(Z12_X[1] + 1 + RING, COARSE_Z),
			north: tileYToLat(Z12_Y[0] - RING, COARSE_Z),
			south: tileYToLat(Z12_Y[1] + 1 + RING, COARSE_Z),
		};
	}
}
