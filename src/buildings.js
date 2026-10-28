// 軽量化した PLATEAU 建物データを読み込み、距離に応じて描画・当たり判定を行う
import {
	BufferGeometry, BufferAttribute, Mesh, MeshLambertMaterial, Group,
} from 'three';
import { createAtlas } from './atlas.js';
import { parseChunk } from './buildingMesh.js';

const FAR = 4200; // これより遠いチャンクは表示しない
const RELEASE = 5200;
const GRID = 50; // 当たり判定用の格子 (m)

function createMaterial() {
	const material = new MeshLambertMaterial({ vertexColors: true, map: createAtlas() });
	material.onBeforeCompile = (shader) => {
		shader.vertexShader = shader.vertexShader
			.replace('#include <common>', '#include <common>\nattribute float cell;\nvarying float vCell;\nvarying vec2 vTile;')
			.replace('#include <uv_vertex>', '#include <uv_vertex>\nvCell = cell;\nvTile = uv;');
		shader.fragmentShader = shader.fragmentShader
			.replace('#include <common>', '#include <common>\nvarying float vCell;\nvarying vec2 vTile;')
			.replace('#include <map_fragment>', `
				{
					// アトラスの中の1セルを繰り返し貼る (ミップマップの継ぎ目が出ないよう微分は元の座標から)
					float col = mod(vCell, 4.0);
					float row = floor(vCell / 4.0 + 0.001);
					vec2 f = vec2(fract(vTile.x), 1.0 - fract(vTile.y));
					vec2 auv = (vec2(col, row) + 0.03 + f * 0.94) / 4.0;
					vec2 dx = dFdx(vTile) * (0.94 / 4.0);
					vec2 dy = dFdy(vTile) * (0.94 / 4.0);
					vec4 texel = textureGrad(map, auv, dx, dy);
					diffuseColor *= texel;
				}
			`);
	};
	return material;
}

export class Buildings {
	constructor(scene, baseUrl, { near = 1400 } = {}) {
		this.near = near; // これより近いチャンクは詳細表示 (m)
		this.group = new Group();
		this.group.name = 'buildings';
		scene.add(this.group);
		this.baseUrl = baseUrl;
		this.material = createMaterial();
		this.chunks = new Map();
		this.chunkSize = 1000;
		this.worker = new Worker(new URL('./buildingWorker.js', import.meta.url), { type: 'module' });
		this.jobs = new Map();
		this.jobId = 0;
		this.worker.onmessage = (e) => {
			const job = this.jobs.get(e.data.id);
			this.jobs.delete(e.data.id);
			job?.(e.data.arrays);
		};
		this.busy = 0;
	}

	async init() {
		const res = await fetch(`${this.baseUrl}index.json`);
		const index = await res.json();
		this.chunkSize = index.chunk;
		for (const [cx, cz, count] of index.chunks) {
			this.chunks.set(`${cx}_${cz}`, {
				cx, cz, count,
				x: (cx + 0.5) * index.chunk, z: (cz + 0.5) * index.chunk,
				buffer: null, list: null, grid: null, loading: false,
				mesh: null, lod: -1, building: false,
			});
		}
	}

	build(chunk, detail) {
		chunk.building = true;
		this.busy++;
		const id = ++this.jobId;
		// バッファはワーカーに渡すとコピーされる (元はコリジョン用に残す)
		this.worker.postMessage({ id, buffer: chunk.buffer.slice(0), ox: chunk.cx * this.chunkSize, oz: chunk.cz * this.chunkSize, detail });
		this.jobs.set(id, (arrays) => {
			this.busy--;
			chunk.building = false;
			if (!chunk.buffer) return; // その間に解放された
			const geom = new BufferGeometry();
			geom.setAttribute('position', new BufferAttribute(arrays.position, 3));
			geom.setAttribute('normal', new BufferAttribute(arrays.normal, 3));
			geom.setAttribute('uv', new BufferAttribute(arrays.uv, 2));
			geom.setAttribute('color', new BufferAttribute(arrays.color, 3));
			geom.setAttribute('cell', new BufferAttribute(arrays.cell, 1));
			geom.computeBoundingSphere();
			const mesh = new Mesh(geom, this.material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			mesh.matrixAutoUpdate = false;
			if (chunk.mesh) {
				this.group.remove(chunk.mesh);
				chunk.mesh.geometry.dispose();
			}
			chunk.mesh = mesh;
			chunk.lod = detail;
			this.group.add(mesh);
		});
	}

	async load(chunk) {
		chunk.loading = true;
		try {
			const res = await fetch(`${this.baseUrl}${chunk.cx}_${chunk.cz}.bin`);
			chunk.buffer = await res.arrayBuffer();
			chunk.list = parseChunk(chunk.buffer, chunk.cx * this.chunkSize, chunk.cz * this.chunkSize);
			chunk.grid = new Map();
			chunk.list.forEach((b, i) => {
				for (let gx = Math.floor(b.minX / GRID); gx <= Math.floor(b.maxX / GRID); gx++) {
					for (let gz = Math.floor(b.minZ / GRID); gz <= Math.floor(b.maxZ / GRID); gz++) {
						const k = `${gx}_${gz}`;
						if (!chunk.grid.has(k)) chunk.grid.set(k, []);
						chunk.grid.get(k).push(i);
					}
				}
			});
		} catch (e) {
			console.warn('building chunk', chunk.cx, chunk.cz, e);
		}
		chunk.loading = false;
	}

	release(chunk) {
		if (chunk.mesh) {
			this.group.remove(chunk.mesh);
			chunk.mesh.geometry.dispose();
		}
		chunk.mesh = null;
		chunk.lod = -1;
		chunk.buffer = null;
		chunk.list = null;
		chunk.grid = null;
	}

	// 毎フレーム: 近いチャンクから順に読み込み・詳細度を切り替える
	update(pos) {
		const order = [...this.chunks.values()]
			.map((c) => ({ c, d: Math.max(0, Math.hypot(c.x - pos.x, c.z - pos.z) - this.chunkSize * 0.5) }))
			.sort((a, b) => a.d - b.d);
		for (const { c, d } of order) {
			if (d > RELEASE) {
				if (c.buffer || c.mesh) this.release(c);
				continue;
			}
			if (d > FAR) {
				if (c.mesh) {
					this.group.remove(c.mesh);
					c.mesh.geometry.dispose();
					c.mesh = null;
					c.lod = -1;
				}
				continue;
			}
			if (!c.buffer) {
				if (!c.loading) this.load(c);
				continue;
			}
			const want = d < this.near ? 1 : 0;
			if (c.lod !== want && !c.building && this.busy < 2) this.build(c, want);
		}
	}

	// 読み込み済みのチャンクの数 (起動時の進捗表示用)
	readyAround(pos, radius) {
		let total = 0, ready = 0;
		for (const c of this.chunks.values()) {
			if (Math.hypot(c.x - pos.x, c.z - pos.z) < radius) {
				total++;
				if (c.mesh) ready++;
			}
		}
		return total ? ready / total : 1;
	}

	inside(x, z, y) {
		return this.hit({ x, y, z }, 0);
	}

	// 位置 (ワールド座標) が建物の中か
	hit(p, margin = 0.6) {
		const c = this.chunks.get(`${Math.floor(p.x / this.chunkSize)}_${Math.floor(p.z / this.chunkSize)}`);
		if (!c?.grid) return false;
		const ids = c.grid.get(`${Math.floor(p.x / GRID)}_${Math.floor(p.z / GRID)}`);
		if (!ids) return false;
		for (const i of ids) {
			const b = c.list[i];
			if (p.y > b.base + b.height + margin || p.y < b.base - 3) continue;
			if (p.x < b.minX - margin || p.x > b.maxX + margin || p.z < b.minZ - margin || p.z > b.maxZ + margin) continue;
			if (pointInRing(p.x, p.z, b.ring)) return true;
		}
		return false;
	}
}

function pointInRing(x, z, ring) {
	let inside = false;
	const n = ring.length / 2;
	for (let i = 0, j = n - 1; i < n; j = i++) {
		const xi = ring[i * 2], zi = ring[i * 2 + 1], xj = ring[j * 2], zj = ring[j * 2 + 1];
		if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
	}
	return inside;
}
