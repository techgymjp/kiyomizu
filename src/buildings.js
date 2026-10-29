// 軽量化した PLATEAU 建物データを読み込み、距離に応じて描画・当たり判定を行う
import {
	BufferGeometry, BufferAttribute, Mesh, MeshLambertMaterial, Group, InstancedMesh, Object3D, Color,
	IcosahedronGeometry, CylinderGeometry,
} from 'three';
import { createAtlas } from './atlas.js';
import { parseChunk, buildChunkGeometry } from './buildingMesh.js';

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

// 街路樹 (イチョウ・モミジ・ケヤキの紅葉)
const TREE_COLORS = [['#f5c61e', '#ffd84a', '#e8b10c'], ['#d8301c', '#ee5a24', '#c21f2c'], ['#d07a26', '#b85c1c', '#e0962e']];
const crownGeom = new IcosahedronGeometry(2.4, 1).scale(1, 1.25, 1).translate(0, 5.2, 0);
const trunkGeom = new CylinderGeometry(0.22, 0.3, 3.6, 6).translate(0, 1.8, 0);
const crownMat = new MeshLambertMaterial({ color: 0xffffff, flatShading: true });
const trunkMat = new MeshLambertMaterial({ color: 0x5a3e2b });

// GPU に転送した後は CPU 側の頂点配列が不要なので捨てて、メモリを節約する
function releaseAfterUpload(geom) {
	for (const attr of Object.values(geom.attributes)) {
		attr.onUpload(function () {
			this.array = null;
		});
	}
}

export class Buildings {
	// near: これより近いチャンクは詳細表示、far: これより遠いチャンクは表示しない (m)
	constructor(scene, baseUrl, { near = 1400, far = 3800, era = 'now' } = {}) {
		this.far = far;
		this.release = far + 1000;
		this.era = era;
		this.landmarks = null; // setLandmarks されるまで建物を作らない
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
		this.treeUrl = this.baseUrl.replace(/buildings\/$/, 'trees/');
		try {
			this.treeIndex = new Set(await (await fetch(`${this.treeUrl}index.json`)).json());
		} catch {
			this.treeIndex = new Set();
		}
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
		const ox = chunk.cx * this.chunkSize, oz = chunk.cz * this.chunkSize, size = this.chunkSize;
		// チャンクの近くの名所だけ渡す (隣のチャンクにはみ出した建物も見つけられるよう少し広めに)
		const landmarks = this.landmarks.filter((l) => l.x > ox - 60 && l.x < ox + size + 60 && l.z > oz - 60 && l.z < oz + size + 60);
		this.worker.postMessage({ id, buffer: chunk.buffer.slice(0), ox, oz, size, detail, landmarks, era: this.era });
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
			releaseAfterUpload(geom);
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
			if (this.treeIndex.has(`${chunk.cx}_${chunk.cz}`)) {
				const tr = await fetch(`${this.treeUrl}${chunk.cx}_${chunk.cz}.bin`);
				chunk.trees = await tr.arrayBuffer();
			}
		} catch (e) {
			console.warn('building chunk', chunk.cx, chunk.cz, e);
		}
		chunk.loading = false;
	}

	release(chunk) {
		this.removeTrees(chunk);
		chunk.trees = null;
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

	// 建物データの無い場所の名所を単独で建てる
	addStandalone(specs) {
		const arrays = buildChunkGeometry([], 1, specs, null, this.era);
		const geom = new BufferGeometry();
		for (const [k, n] of [['position', 3], ['normal', 3], ['uv', 2], ['color', 3], ['cell', 1]]) geom.setAttribute(k, new BufferAttribute(arrays[k], n));
		geom.computeBoundingSphere();
		const mesh = new Mesh(geom, this.material);
		mesh.castShadow = mesh.receiveShadow = true;
		this.group.add(mesh);
	}

	// 名所の定義 (ワールド座標と、外形が無いとき用の地面の高さ y を含む)と、地面の高さを返す関数
	setLandmarks(list, heightAtWorld) {
		this.landmarks = list;
		this.heightAtWorld = heightAtWorld;
	}

	buildTrees(chunk) {
		const dv = new DataView(chunk.trees);
		const n = dv.getUint32(4, true);
		const crowns = new InstancedMesh(crownGeom, crownMat, n);
		const trunks = new InstancedMesh(trunkGeom, trunkMat, n);
		const o = new Object3D(), c = new Color();
		for (let i = 0; i < n; i++) {
			const x = chunk.cx * this.chunkSize + dv.getInt16(8 + i * 6, true) / 10;
			const z = chunk.cz * this.chunkSize + dv.getInt16(10 + i * 6, true) / 10;
			const kind = dv.getUint8(12 + i * 6) % 3;
			const r = Math.abs(Math.sin(x * 12.9898 + z * 78.233) * 43758.5453) % 1;
			o.position.set(x, this.heightAtWorld(x, z) - 0.2, z);
			o.rotation.y = r * 6.28;
			o.scale.setScalar(0.8 + r * 0.5);
			o.updateMatrix();
			crowns.setMatrixAt(i, o.matrix);
			trunks.setMatrixAt(i, o.matrix);
			crowns.setColorAt(i, c.set(TREE_COLORS[kind][Math.floor(r * 3)]));
		}
		for (const m of [crowns, trunks]) {
			m.castShadow = true;
			m.receiveShadow = true;
			m.computeBoundingSphere();
			this.group.add(m);
		}
		chunk.treeMeshes = [crowns, trunks];
	}

	removeTrees(chunk) {
		for (const m of chunk.treeMeshes ?? []) {
			this.group.remove(m);
			m.dispose();
		}
		chunk.treeMeshes = null;
	}

	// 毎フレーム: 近いチャンクから順に読み込み・詳細度を切り替える
	update(pos) {
		if (!this.landmarks) return;
		// 全チャンクの距離計算と並べ替えは重いので間引く
		const now = performance.now();
		if (now - (this.lastUpdate ?? 0) < 250) return;
		this.lastUpdate = now;
		const order = [...this.chunks.values()]
			.map((c) => ({ c, d: Math.max(0, Math.hypot(c.x - pos.x, c.z - pos.z) - this.chunkSize * 0.5) }))
			.sort((a, b) => a.d - b.d);
		for (const { c, d } of order) {
			if (d > this.release) {
				if (c.buffer || c.mesh) this.release(c);
				continue;
			}
			if (d > this.far * 0.7) this.removeTrees(c);
			else if (c.trees && !c.treeMeshes) this.buildTrees(c);
			if (d > this.far) {
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
			// 昭和初期モードでは戦後の高い建物は無い
			if (this.era === 'showa' && (b.type === 5 || (b.type !== 2 && b.height > 14))) continue;
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
