// 観光地の人だかり: 歩き回り、ハングライダーが近づくと手を振って跳ねる
import {
	InstancedMesh, BufferGeometry, Float32BufferAttribute, MeshLambertMaterial, Object3D, Color,
	CylinderGeometry, SphereGeometry, BoxGeometry, DynamicDrawUsage,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { geoToWorld } from './geo.js';

const PER_SPOT = 70;
const RADIUS = 38;
const ACTIVE_DIST = 1600; // この距離より近い人だかりだけ動かす
const SCALE = 1.35; // 空からも見えるよう少し大きめ

// 着物や観光客の服の色
const CLOTHES = ['#e8382f', '#f07a1a', '#f5b800', '#e85ab5', '#8a4fd8', '#2f7fe8', '#2fbf71', '#ffffff', '#ff8fb1', '#16a3a3', '#1d3f8f', '#c7254e'];

function colored(geom, color) {
	const c = new Color(color);
	const n = geom.attributes.position.count;
	const arr = new Float32Array(n * 3);
	for (let i = 0; i < n; i++) arr.set([c.r, c.g, c.b], i * 3);
	geom.setAttribute('color', new Float32BufferAttribute(arr, 3));
	return geom;
}

function bodyGeometry() {
	// 服 (インスタンスごとに色を変える部分)
	const torso = new CylinderGeometry(0.2, 0.3, 0.75, 8).translate(0, 1.05, 0);
	const skirt = new CylinderGeometry(0.3, 0.34, 0.5, 8).translate(0, 0.55, 0);
	const armL = new BoxGeometry(0.11, 0.6, 0.11).translate(-0.3, 1.1, 0);
	const armR = new BoxGeometry(0.11, 0.6, 0.11).translate(0.3, 1.1, 0);
	return mergeGeometries([torso, skirt, armL, armR].map((g) => colored(g.toNonIndexed(), '#ffffff')));
}

function headGeometry() {
	const head = colored(new SphereGeometry(0.17, 10, 8).translate(0, 1.62, 0).toNonIndexed(), '#f1c8a0');
	const hair = colored(new SphereGeometry(0.18, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55).translate(0, 1.66, 0.01).toNonIndexed(), '#2a1d16');
	const legs = colored(new BoxGeometry(0.28, 0.32, 0.16).translate(0, 0.16, 0).toNonIndexed(), '#33302c');
	return mergeGeometries([head, hair, legs]);
}

export class People {
	constructor(scene, spots, terrain, buildings) {
		this.terrain = terrain;
		this.buildings = buildings;
		const total = spots.length * PER_SPOT;
		const mat = new MeshLambertMaterial({ vertexColors: true });
		this.body = new InstancedMesh(bodyGeometry(), mat, total);
		this.head = new InstancedMesh(headGeometry(), mat, total);
		for (const m of [this.body, this.head]) {
			m.instanceMatrix.setUsage(DynamicDrawUsage);
			m.frustumCulled = false;
			m.castShadow = true;
			scene.add(m);
		}
		const col = new Color();
		this.crowds = spots.map((spot, si) => {
			const center = geoToWorld(spot.lat, spot.lon, 0);
			const people = [];
			for (let i = 0; i < PER_SPOT; i++) {
				const idx = si * PER_SPOT + i;
				this.body.setColorAt(idx, col.set(CLOTHES[(i * 7 + si * 3) % CLOTHES.length]));
				people.push({ idx, x: 0, z: 0, y: 0, tx: 0, tz: 0, heading: 0, speed: 0.6 + Math.random() * 0.8, phase: Math.random() * 10, wait: Math.random() * 3, placed: false });
			}
			return { spot, center, people, active: false, placed: false, cheerCooldown: 0 };
		});
		this.body.instanceColor.needsUpdate = true;
		this.dummy = new Object3D();
		this.hideAll();
	}

	hideAll() {
		this.dummy.scale.setScalar(0);
		this.dummy.updateMatrix();
		for (let i = 0; i < this.body.count; i++) {
			this.body.setMatrixAt(i, this.dummy.matrix);
			this.head.setMatrixAt(i, this.dummy.matrix);
		}
		this.body.instanceMatrix.needsUpdate = this.head.instanceMatrix.needsUpdate = true;
	}

	groundAt(x, z) {
		return this.terrain.heightAtWorld(x, z);
	}

	// 建物の中でない場所を探す
	pickSpot(crowd, p) {
		for (let k = 0; k < 12; k++) {
			const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * RADIUS;
			const x = crowd.center.x + Math.cos(a) * r, z = crowd.center.z + Math.sin(a) * r;
			const y = this.groundAt(x, z);
			if (!this.buildings.inside(x, z, y + 1)) {
				p.tx = x;
				p.tz = z;
				return true;
			}
		}
		return false;
	}

	// 戻り値: 人だかりの近くを通過したら true (歓声用)
	update(dt, time, gliderPos) {
		let cheer = false;
		const d = this.dummy;
		for (const crowd of this.crowds) {
			const dist = Math.hypot(crowd.center.x - gliderPos.x, crowd.center.z - gliderPos.z);
			const active = dist < ACTIVE_DIST;
			if (!active) {
				if (crowd.active) {
					d.scale.setScalar(0);
					d.updateMatrix();
					for (const p of crowd.people) {
						this.body.setMatrixAt(p.idx, d.matrix);
						this.head.setMatrixAt(p.idx, d.matrix);
					}
				}
				crowd.active = false;
				continue;
			}
			crowd.active = true;
			if (!crowd.placed) {
				for (const p of crowd.people) {
					if (this.pickSpot(crowd, p)) {
						p.x = p.tx;
						p.z = p.tz;
						p.y = this.groundAt(p.x, p.z);
						p.placed = true;
					}
				}
				crowd.placed = true;
			}
			const gliderClose = dist < 200;
			crowd.cheerCooldown -= dt;
			if (gliderClose && crowd.cheerCooldown <= 0) {
				cheer = true;
				crowd.cheerCooldown = 8;
			}
			for (const p of crowd.people) {
				if (!p.placed) continue;
				let bounce = 0, wave = 0;
				if (gliderClose) {
					// 空を見上げてぴょんぴょん
					p.heading = Math.atan2(gliderPos.x - p.x, gliderPos.z - p.z);
					bounce = Math.abs(Math.sin(time * 7 + p.phase)) * 0.45;
					wave = Math.sin(time * 10 + p.phase) * 0.25;
				} else if (p.wait > 0) {
					p.wait -= dt;
					if (p.wait <= 0) this.pickSpot(crowd, p);
				} else {
					const dx = p.tx - p.x, dz = p.tz - p.z;
					const l = Math.hypot(dx, dz);
					if (l < 0.5) {
						p.wait = 1 + Math.random() * 4;
					} else {
						const step = Math.min(l, p.speed * dt);
						p.x += (dx / l) * step;
						p.z += (dz / l) * step;
						p.heading = Math.atan2(dx, dz);
						bounce = Math.abs(Math.sin(time * 9 * p.speed + p.phase)) * 0.06;
						wave = Math.sin(time * 9 * p.speed + p.phase) * 0.06;
						if (Math.random() < 0.02) p.y = this.groundAt(p.x, p.z);
					}
				}
				d.position.set(p.x, p.y + bounce * SCALE, p.z);
				d.rotation.set(0, p.heading, wave);
				d.scale.setScalar(SCALE);
				d.updateMatrix();
				this.body.setMatrixAt(p.idx, d.matrix);
				this.head.setMatrixAt(p.idx, d.matrix);
			}
		}
		this.body.instanceMatrix.needsUpdate = true;
		this.head.instanceMatrix.needsUpdate = true;
		return cheer;
	}
}
