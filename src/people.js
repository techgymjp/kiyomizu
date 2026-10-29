// 観光地の人だかり: 和服姿の人たちや舞妓さんがのんびり歩き回る。たまにお侍さんも
// ハングライダーが近くを通ると、立ち止まって見上げる
import {
	InstancedMesh, Float32BufferAttribute, MeshLambertMaterial, Object3D, Color,
	CylinderGeometry, SphereGeometry, BoxGeometry, ConeGeometry, DynamicDrawUsage,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { geoToWorld } from './geo.js';
import { KYOKOCHI } from './landmarkSpecs.js';

// 人が入れない場所 (池)
const POND = (() => {
	const c = geoToWorld(KYOKOCHI.lat, KYOKOCHI.lon, 0);
	return { x: c.x, z: c.z, a: KYOKOCHI.w / 2 + 1, b: KYOKOCHI.d / 2 + 1 };
})();
const inPond = (x, z) => ((x - POND.x) / POND.a) ** 2 + ((z - POND.z) / POND.b) ** 2 < 1;

const PER_SPOT = 60;
const RADIUS = 38;
const ACTIVE_DIST = 1600; // この距離より近い人だかりだけ動かす
const SCALE = 1.0; // 実物大 (身長およそ1.6m)
const SAMURAI_RATE = 0.06;
const MAIKO_RATE = 0.12;

// 着物・帯・袴・裃の色
const KIMONO = ['#e8384f', '#f28cb1', '#f5b800', '#8a4fd8', '#2f7fe8', '#16a3a3', '#ff8a3d', '#c7254e', '#f7f0e0', '#6fb7e8', '#9bd36a', '#e85ab5'];
const OBI = ['#f5d042', '#ffffff', '#c7254e', '#1d3f8f', '#2fbf71', '#f28cb1'];
const MEN = ['#3a4a6a', '#5a4632', '#2f3b2f', '#6a6a72', '#1d2a44', '#7a5a3a'];
const HAKAMA = ['#2b2b33', '#4a3a5a', '#3a3a3a', '#5a4a3a'];
const SAMURAI = ['#1d2a44', '#2b2b33', '#3a2a22', '#24402f'];

function colored(geom, color) {
	const g = geom.toNonIndexed();
	const c = new Color(color);
	const n = g.attributes.position.count;
	const arr = new Float32Array(n * 3);
	for (let i = 0; i < n; i++) arr.set([c.r, c.g, c.b], i * 3);
	g.setAttribute('color', new Float32BufferAttribute(arr, 3));
	return g;
}
const merge = (parts) => mergeGeometries(parts.map(([g, c]) => colored(g, c)));
const WHITE = '#ffffff';

function head(hair, extra = []) {
	return [
		[new CylinderGeometry(0.05, 0.06, 0.1, 6).translate(0, 1.36, 0), '#f1c8a0'],
		[new SphereGeometry(0.12, 10, 8).translate(0, 1.47, 0), '#f1c8a0'],
		[new SphereGeometry(0.128, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55).translate(0, 1.49, 0.015), hair],
		...extra,
	];
}

// 種類ごとの形: dye=着物の色、dye2=帯や袴の色、fixed=肌や髪など
const KINDS = {
	// 振袖の女性: 裾のすぼまった着物、垂れた袖、太い帯、結い上げた髪
	woman: {
		dye: merge([
			[new CylinderGeometry(0.16, 0.22, 1.25, 10).translate(0, 0.68, 0), WHITE],
			[new BoxGeometry(0.12, 0.46, 0.26).translate(-0.24, 0.98, 0.02), WHITE],
			[new BoxGeometry(0.12, 0.46, 0.26).translate(0.24, 0.98, 0.02), WHITE],
		]),
		dye2: merge([
			[new CylinderGeometry(0.185, 0.195, 0.2, 10).translate(0, 1.0, 0), WHITE],
			[new BoxGeometry(0.26, 0.18, 0.1).translate(0, 1.0, 0.18), WHITE], // 背中のお太鼓
		]),
		fixed: merge([
			...head('#1b1410', [[new SphereGeometry(0.085, 8, 6).translate(0, 1.6, 0.06), '#1b1410'], [new BoxGeometry(0.2, 0.025, 0.025).translate(0, 1.6, 0.06), '#f5d042']]),
			[new BoxGeometry(0.18, 0.04, 0.24).translate(0, 0.03, -0.02), '#c7a070'], // 草履
		]),
		dyeColors: KIMONO,
		dye2Colors: OBI,
	},
	// 舞妓さん: 白塗り、花かんざしの日本髪、背中に長く垂れる「だらりの帯」、高いおこぼ
	maiko: {
		dye: merge([
			[new CylinderGeometry(0.15, 0.24, 1.2, 10).translate(0, 0.78, 0), WHITE],
			[new BoxGeometry(0.12, 0.56, 0.28).translate(-0.24, 0.98, 0.02), WHITE],
			[new BoxGeometry(0.12, 0.56, 0.28).translate(0.24, 0.98, 0.02), WHITE],
		]),
		dye2: merge([
			[new CylinderGeometry(0.18, 0.19, 0.22, 10).translate(0, 1.08, 0), WHITE],
			[new BoxGeometry(0.22, 0.95, 0.04).translate(0, 0.62, 0.2), WHITE], // だらりの帯
		]),
		fixed: merge([
			[new CylinderGeometry(0.05, 0.06, 0.1, 6).translate(0, 1.44, 0), '#fbf7f2'],
			[new SphereGeometry(0.12, 10, 8).translate(0, 1.55, 0), '#fbf7f2'], // 白塗り
			[new SphereGeometry(0.03, 6, 4).translate(0, 1.5, -0.11), '#d81b3c'], // 紅
			[new SphereGeometry(0.15, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.6).translate(0, 1.6, 0.03), '#120d0a'],
			[new SphereGeometry(0.11, 8, 6).translate(0, 1.74, 0.03), '#120d0a'], // 割れしのぶ
			[new SphereGeometry(0.045, 6, 4).translate(-0.12, 1.7, -0.02), '#ff6fa8'], // 花かんざし
			[new SphereGeometry(0.04, 6, 4).translate(-0.14, 1.64, 0.02), '#ffd23f'],
			[new SphereGeometry(0.035, 6, 4).translate(-0.1, 1.62, -0.06), '#ffffff'],
			[new BoxGeometry(0.003, 0.14, 0.02).translate(-0.13, 1.56, -0.04), '#f5d042'], // ぶら
			[new BoxGeometry(0.16, 0.16, 0.24).translate(0, 0.08, -0.01), '#2b1a10'], // おこぼ
		]),
		dyeColors: ['#e8384f', '#f28cb1', '#8a4fd8', '#16a3a3', '#ff8a3d', '#6fb7e8', '#9bd36a'],
		dye2Colors: ['#1b1b1f', '#f5d042', '#c7254e', '#1d3f8f'],
	},
	// モボ: 背広に中折れ帽
	mobo: {
		dye: merge([
			[new CylinderGeometry(0.17, 0.19, 0.62, 10).translate(0, 1.04, 0), WHITE], // 上着
			[new BoxGeometry(0.11, 0.55, 0.13).translate(-0.24, 1.0, 0), WHITE],
			[new BoxGeometry(0.11, 0.55, 0.13).translate(0.24, 1.0, 0), WHITE],
			[new BoxGeometry(0.12, 0.72, 0.14).translate(-0.08, 0.38, 0), WHITE], // ズボン
			[new BoxGeometry(0.12, 0.72, 0.14).translate(0.08, 0.38, 0), WHITE],
		]),
		dye2: merge([
			[new CylinderGeometry(0.2, 0.2, 0.025, 14).translate(0, 1.58, 0), WHITE], // 帽子のつば
			[new CylinderGeometry(0.12, 0.13, 0.12, 12).translate(0, 1.64, 0), WHITE],
		]),
		fixed: merge([
			...head('#1b1410'),
			[new BoxGeometry(0.1, 0.22, 0.02).translate(0, 1.2, -0.18), '#c7254e'], // ネクタイ
			[new BoxGeometry(0.16, 0.06, 0.26).translate(-0.08, 0.03, -0.03), '#2b1a10'], // 靴
			[new BoxGeometry(0.16, 0.06, 0.26).translate(0.08, 0.03, -0.03), '#2b1a10'],
		]),
		dyeColors: ['#3a3f4a', '#5a4a3a', '#2b2b33', '#6a6a72', '#7a6a50'],
		dye2Colors: ['#2b2b33', '#5a4a3a', '#d9c9a0'],
	},
	// モガ: ひざ丈のワンピースに断髪とクロシェ帽
	moga: {
		dye: merge([
			[new CylinderGeometry(0.14, 0.24, 0.85, 10).translate(0, 0.98, 0), WHITE],
			[new BoxGeometry(0.09, 0.42, 0.1).translate(-0.2, 1.12, 0), WHITE],
			[new BoxGeometry(0.09, 0.42, 0.1).translate(0.2, 1.12, 0), WHITE],
		]),
		dye2: merge([
			[new SphereGeometry(0.15, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.5).translate(0, 1.52, 0.01), WHITE], // クロシェ帽
			[new CylinderGeometry(0.19, 0.19, 0.02, 12).translate(0, 1.52, 0), WHITE],
		]),
		fixed: merge([
			...head('#1b1410'),
			[new CylinderGeometry(0.035, 0.035, 0.55, 6).translate(-0.07, 0.3, 0), '#f1c8a0'], // 脚
			[new CylinderGeometry(0.035, 0.035, 0.55, 6).translate(0.07, 0.3, 0), '#f1c8a0'],
			[new BoxGeometry(0.08, 0.06, 0.18).translate(-0.07, 0.03, -0.02), '#c7254e'], // 靴
			[new BoxGeometry(0.08, 0.06, 0.18).translate(0.07, 0.03, -0.02), '#c7254e'],
		]),
		dyeColors: ['#e8384f', '#f28cb1', '#6fb7e8', '#f5d042', '#9bd36a', '#ffffff', '#8a4fd8'],
		dye2Colors: ['#1b1b1f', '#c7254e', '#1d3f8f', '#f7f0e0'],
	},
	// 学生: 黒い詰襟の学生服と学生帽
	student: {
		dye: merge([
			[new CylinderGeometry(0.17, 0.19, 0.62, 10).translate(0, 1.04, 0), WHITE],
			[new BoxGeometry(0.11, 0.55, 0.13).translate(-0.24, 1.0, 0), WHITE],
			[new BoxGeometry(0.11, 0.55, 0.13).translate(0.24, 1.0, 0), WHITE],
			[new BoxGeometry(0.12, 0.72, 0.14).translate(-0.08, 0.38, 0), WHITE],
			[new BoxGeometry(0.12, 0.72, 0.14).translate(0.08, 0.38, 0), WHITE],
			[new CylinderGeometry(0.135, 0.13, 0.08, 12).translate(0, 1.6, 0), WHITE], // 学生帽
			[new BoxGeometry(0.2, 0.02, 0.1).translate(0, 1.57, -0.12), WHITE], // つば
		]),
		dye2: null,
		fixed: merge([
			...head('#1b1410'),
			[new BoxGeometry(0.03, 0.03, 0.03).translate(0, 1.2, -0.19), '#f5d042'], // 金ボタン
			[new BoxGeometry(0.03, 0.03, 0.03).translate(0, 1.05, -0.2), '#f5d042'],
			[new BoxGeometry(0.03, 0.03, 0.03).translate(0, 0.9, -0.2), '#f5d042'],
			[new BoxGeometry(0.16, 0.06, 0.26).translate(-0.08, 0.03, -0.03), '#1b1b1f'],
			[new BoxGeometry(0.16, 0.06, 0.26).translate(0.08, 0.03, -0.03), '#1b1b1f'],
		]),
		dyeColors: ['#15161c', '#1b1d26'],
		dye2Colors: null,
	},
	// 人力車: 車夫が客を乗せた車を引く (-Z が進行方向)
	rickshaw: {
		dye: merge([
			[new BoxGeometry(0.8, 0.5, 0.7).translate(0, 0.95, 0.9), WHITE], // 座席
			[new BoxGeometry(0.85, 0.7, 0.08).translate(0, 1.4, 1.25), WHITE], // 背もたれ
			[new SphereGeometry(0.5, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.5).scale(0.9, 0.9, 0.8).translate(0, 1.55, 1.05), WHITE], // 幌
		]),
		dye2: null,
		fixed: merge([
			[new CylinderGeometry(0.6, 0.6, 0.06, 16).rotateZ(Math.PI / 2).translate(-0.48, 0.6, 1.0), '#3a2a22'], // 車輪
			[new CylinderGeometry(0.6, 0.6, 0.06, 16).rotateZ(Math.PI / 2).translate(0.48, 0.6, 1.0), '#3a2a22'],
			[new BoxGeometry(0.05, 0.05, 1.8).translate(-0.3, 0.85, -0.2), '#3a2a22'], // かじ棒
			[new BoxGeometry(0.05, 0.05, 1.8).translate(0.3, 0.85, -0.2), '#3a2a22'],
			// 車夫 (法被と股引、笠)
			[new CylinderGeometry(0.16, 0.18, 0.55, 8).translate(0, 1.08, -1.0), '#1d3f8f'],
			[new BoxGeometry(0.12, 0.75, 0.14).translate(-0.08, 0.4, -1.0), '#1b1b1f'],
			[new BoxGeometry(0.12, 0.75, 0.14).translate(0.08, 0.4, -1.0), '#1b1b1f'],
			[new SphereGeometry(0.11, 8, 6).translate(0, 1.47, -1.0), '#e0b48f'],
			[new ConeGeometry(0.26, 0.12, 12).translate(0, 1.62, -1.0), '#d9c08a'], // 笠
			// 乗っているお客さん
			[new CylinderGeometry(0.17, 0.2, 0.5, 8).translate(0, 1.42, 0.85), '#e8384f'],
			[new SphereGeometry(0.11, 8, 6).translate(0, 1.78, 0.85), '#f1c8a0'],
			[new SphereGeometry(0.12, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.55).translate(0, 1.8, 0.87), '#1b1410'],
		]),
		dyeColors: ['#1b1b1f', '#3a2a22', '#2b2b33'],
		dye2Colors: null,
	},
	// 着物に袴の男性
	man: {
		dye: merge([
			[new CylinderGeometry(0.17, 0.2, 0.58, 10).translate(0, 1.04, 0), WHITE],
			[new BoxGeometry(0.12, 0.4, 0.22).translate(-0.25, 1.02, 0), WHITE],
			[new BoxGeometry(0.12, 0.4, 0.22).translate(0.25, 1.02, 0), WHITE],
		]),
		dye2: merge([[new CylinderGeometry(0.2, 0.28, 0.78, 10).translate(0, 0.4, 0), WHITE]]),
		fixed: merge(head('#1b1410')),
		dyeColors: MEN,
		dye2Colors: HAKAMA,
	},
	// お侍さん: 肩の張った裃、袴、ちょんまげ、腰に刀
	samurai: {
		dye: merge([
			[new CylinderGeometry(0.18, 0.21, 0.58, 10).translate(0, 1.04, 0), WHITE],
			[new BoxGeometry(0.72, 0.05, 0.24).translate(0, 1.3, 0), WHITE], // 肩衣
			[new CylinderGeometry(0.21, 0.32, 0.8, 10).translate(0, 0.4, 0), WHITE], // 袴
		]),
		dye2: null,
		fixed: merge([
			...head('#1b1410', [
				[new BoxGeometry(0.05, 0.05, 0.16).translate(0, 1.6, 0.02), '#1b1410'], // ちょんまげ
				[new BoxGeometry(0.16, 0.06, 0.06).translate(0, 1.04, -0.17), '#f7f0e0'], // 胸元の白
			]),
			[new BoxGeometry(0.035, 0.035, 0.95).rotateX(-0.35).translate(-0.24, 0.9, 0.05), '#111111'], // 刀
			[new BoxGeometry(0.03, 0.03, 0.6).rotateX(-0.3).translate(-0.22, 0.95, 0.02), '#3a2a22'], // 脇差
		]),
		dyeColors: SAMURAI,
		dye2Colors: null,
	},
};

export class People {
	constructor(scene, spots, terrain, buildings, { perSpot = PER_SPOT, era = 'now' } = {}) {
		this.scene = scene;
		this.terrain = terrain;
		this.buildings = buildings;
		const mat = new MeshLambertMaterial({ vertexColors: true });
		// 種類ごとの人数を先に決める
		this.crowds = spots.map((spot) => ({
			spot, center: geoToWorld(spot.lat, spot.lon, 0), people: [], active: false, placed: false, cheerCooldown: 0,
		}));
		const counts = Object.fromEntries(Object.keys(KINDS).map((k) => [k, 0]));
		// 時代ごとの人の構成 (割合)。昭和初期にはお侍さんはいない
		const mix = era === 'showa'
			? [['woman', 0.28], ['man', 0.12], ['maiko', 0.08], ['mobo', 0.13], ['moga', 0.13], ['student', 0.16], ['rickshaw', 0.1]]
			: [['samurai', SAMURAI_RATE], ['maiko', MAIKO_RATE], ['woman', 0.48], ['man', 0.34]];
		for (const crowd of this.crowds) {
			for (let i = 0; i < perSpot; i++) {
				let r = Math.random(), kind = mix[mix.length - 1][0];
				for (const [k, rate] of mix) {
					if (r < rate) { kind = k; break; }
					r -= rate;
				}
				crowd.people.push({
					kind, idx: counts[kind]++, x: 0, z: 0, y: 0, tx: 0, tz: 0, heading: 0,
					// 侍はゆっくり堂々と歩く
					speed: { samurai: 0.55, maiko: 0.45, rickshaw: 2.2 }[kind] ?? 0.6 + Math.random() * 0.45,
					phase: Math.random() * 10, wait: Math.random() * 6, placed: false,
				});
			}
		}
		this.meshes = {};
		const col = new Color();
		for (const [kind, def] of Object.entries(KINDS)) {
			const n = Math.max(1, counts[kind]);
			const list = [];
			const make = (geom, colors) => {
				const m = new InstancedMesh(geom, mat, n);
				m.instanceMatrix.setUsage(DynamicDrawUsage);
				m.frustumCulled = false;
				m.castShadow = true;
				if (colors) {
					for (let i = 0; i < n; i++) m.setColorAt(i, col.set(colors[Math.floor(Math.random() * colors.length)]));
					m.instanceColor.needsUpdate = true;
				}
				scene.add(m);
				list.push(m);
			};
			make(def.dye, def.dyeColors);
			if (def.dye2) make(def.dye2, def.dye2Colors);
			make(def.fixed, null);
			this.meshes[kind] = list;
		}
		this.dummy = new Object3D();
		this.hideAll();
	}

	// 時代を切り替えるときに作り直すため
	dispose() {
		for (const list of Object.values(this.meshes)) {
			for (const m of list) {
				this.scene.remove(m);
				m.dispose();
			}
		}
	}

	setMatrix(p, matrix) {
		for (const m of this.meshes[p.kind]) m.setMatrixAt(p.idx, matrix);
	}

	hideAll() {
		this.dummy.scale.setScalar(0);
		this.dummy.updateMatrix();
		for (const list of Object.values(this.meshes)) {
			for (const m of list) {
				for (let i = 0; i < m.count; i++) m.setMatrixAt(i, this.dummy.matrix);
				m.instanceMatrix.needsUpdate = true;
			}
		}
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
			if (!inPond(x, z) && !this.buildings.inside(x, z, y + 1)) {
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
			if (dist >= ACTIVE_DIST) {
				if (crowd.active) {
					d.scale.setScalar(0);
					d.updateMatrix();
					for (const p of crowd.people) this.setMatrix(p, d.matrix);
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
						this.pickSpot(crowd, p);
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
				let bob = 0, sway = 0;
				if (gliderClose) {
					// 立ち止まって、空のハングライダーのほうへ向き直る
					const want = Math.atan2(gliderPos.x - p.x, gliderPos.z - p.z);
					let diff = want - p.heading;
					diff = Math.atan2(Math.sin(diff), Math.cos(diff));
					p.heading += diff * Math.min(1, dt * 2);
				} else if (p.wait > 0) {
					p.wait -= dt;
					if (p.wait <= 0) this.pickSpot(crowd, p);
				} else {
					const dx = p.tx - p.x, dz = p.tz - p.z;
					const l = Math.hypot(dx, dz);
					if (l < 0.4) {
						p.wait = 2 + Math.random() * 6; // 立ち止まって景色を眺める
					} else {
						const step = Math.min(l, p.speed * dt);
						p.x += (dx / l) * step;
						p.z += (dz / l) * step;
						// 向きはなめらかに変える
						const want = Math.atan2(dx, dz);
						let diff = want - p.heading;
						diff = Math.atan2(Math.sin(diff), Math.cos(diff));
						p.heading += diff * Math.min(1, dt * 3);
						// 歩くときの小さな上下と左右の揺れ (草履でしずしずと)
						const ph = time * 6.5 * p.speed + p.phase;
						bob = Math.abs(Math.sin(ph)) * 0.025;
						sway = Math.sin(ph) * (p.kind === 'samurai' ? 0.05 : 0.03);
						if (Math.random() < 0.02) p.y = this.groundAt(p.x, p.z);
					}
				}
				d.position.set(p.x, p.y + bob * SCALE, p.z);
				d.rotation.set(0, p.heading + Math.PI, sway);
				d.scale.setScalar(SCALE);
				d.updateMatrix();
				this.setMatrix(p, d.matrix);
			}
		}
		for (const list of Object.values(this.meshes)) for (const m of list) m.instanceMatrix.needsUpdate = true;
		return cheer;
	}
}
