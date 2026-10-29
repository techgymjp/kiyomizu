// 建物以外の名所の目印: 平安神宮の大鳥居、伏見稲荷の千本鳥居、嵐山の渡月橋
import {
	Group, Mesh, BoxGeometry, CylinderGeometry, MeshLambertMaterial, InstancedMesh, Object3D,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { geoToWorld } from './geo.js';
import { TORII, SENBON_TORII, TOGETSUKYO } from './landmarkSpecs.js';

const VERMILION = 0xe8432c;

// 幅 w・高さ h の鳥居 (原点は足元の中央、X 方向に柱が並ぶ)
function toriiGeometry(w, h) {
	const r = w * 0.045;
	const parts = [
		new CylinderGeometry(r, r * 1.1, h, 12).translate(-w / 2, h / 2, 0),
		new CylinderGeometry(r, r * 1.1, h, 12).translate(w / 2, h / 2, 0),
		new BoxGeometry(w * 1.45, h * 0.07, r * 2.4).translate(0, h * 0.98, 0), // 笠木
		new BoxGeometry(w * 1.2, h * 0.05, r * 1.8).translate(0, h * 0.82, 0), // 貫
	];
	return mergeGeometries(parts.map((g) => g.toNonIndexed()));
}

export function buildProps(scene, heightAtWorld) {
	const group = new Group();
	const red = new MeshLambertMaterial({ color: VERMILION });
	const black = new MeshLambertMaterial({ color: 0x222222 });

	// 大鳥居
	for (const t of TORII) {
		const p = geoToWorld(t.lat, t.lon, 0);
		const m = new Mesh(toriiGeometry(t.width, t.height), red);
		m.position.set(p.x, heightAtWorld(p.x, p.z) - 0.5, p.z);
		m.rotation.y = (t.deg * Math.PI) / 180;
		m.castShadow = true;
		group.add(m);
		// 笠木の黒い上端
		const cap = new Mesh(new BoxGeometry(t.width * 1.5, t.height * 0.03, t.width * 0.11), black);
		cap.position.set(0, t.height * 1.025, 0);
		m.add(cap);
	}

	// 千本鳥居: 参道に沿って朱色の鳥居がトンネルのように並ぶ
	const path = SENBON_TORII.map(([lat, lon]) => geoToWorld(lat, lon, 0));
	const spots = [];
	for (let i = 0; i < path.length - 1; i++) {
		const a = path[i], b = path[i + 1];
		const len = Math.hypot(b.x - a.x, b.z - a.z);
		const angle = Math.atan2(b.x - a.x, b.z - a.z);
		for (let d = 0; d < len; d += 1.4) {
			const x = a.x + ((b.x - a.x) * d) / len, z = a.z + ((b.z - a.z) * d) / len;
			spots.push({ x, z, angle });
		}
	}
	const small = new InstancedMesh(toriiGeometry(2.4, 3.2), red, spots.length);
	const o = new Object3D();
	spots.forEach((s, i) => {
		o.position.set(s.x, heightAtWorld(s.x, s.z) - 0.2, s.z);
		o.rotation.y = s.angle + Math.PI / 2;
		o.updateMatrix();
		small.setMatrixAt(i, o.matrix);
	});
	small.castShadow = true;
	group.add(small);

	// 渡月橋: 桂川に架かる木の橋
	const from = geoToWorld(...TOGETSUKYO.from, 0), to = geoToWorld(...TOGETSUKYO.to, 0);
	const len = Math.hypot(to.x - from.x, to.z - from.z);
	const angle = Math.atan2(to.x - from.x, to.z - from.z);
	const ya = heightAtWorld(from.x, from.z), yb = heightAtWorld(to.x, to.z);
	const deckY = Math.max(ya, yb) + 1.5;
	const bridge = new Group();
	bridge.position.set((from.x + to.x) / 2, 0, (from.z + to.z) / 2);
	bridge.rotation.y = angle;
	const wood = new MeshLambertMaterial({ color: 0x8a6a4a });
	const deck = new Mesh(new BoxGeometry(TOGETSUKYO.width, 0.8, len + 6), wood);
	deck.position.y = deckY;
	deck.castShadow = deck.receiveShadow = true;
	bridge.add(deck);
	for (const sx of [-1, 1]) {
		const rail = new Mesh(new BoxGeometry(0.3, 1.1, len + 6), new MeshLambertMaterial({ color: 0x5a4632 }));
		rail.position.set(sx * (TOGETSUKYO.width / 2 - 0.2), deckY + 0.9, 0);
		bridge.add(rail);
	}
	const pier = new CylinderGeometry(0.35, 0.35, 12, 8);
	for (let z = -len / 2; z <= len / 2; z += 7) {
		for (const sx of [-1, 0, 1]) {
			const m = new Mesh(pier, wood);
			m.position.set(sx * TOGETSUKYO.width * 0.35, deckY - 6, z);
			bridge.add(m);
		}
	}
	group.add(bridge);

	scene.add(group);
	return group;
}
