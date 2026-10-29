// 鬼ごっこの鬼: 雲に乗った鬼が京都の空を徘徊し、プレイヤーを見つけると追いかけてくる
import {
	Group, Mesh, SphereGeometry, ConeGeometry, CylinderGeometry, CapsuleGeometry, MeshLambertMaterial,
	MeshBasicMaterial, CanvasTexture, SRGBColorSpace, Vector3, Float32BufferAttribute,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const CATCH_RADIUS = 7;
const FIRST_SPAWN = 0.5; // 秒
const CP_PER_ONI = 1; // アドバルーンをこの数割るごとに鬼が1匹増える
const MAX_ONI = 52; // 10匹 + 42か所
// 最初に京都市内の名所のまわりに散らばっている鬼の数
const FIRST_COUNT = 10;
const SCALE = 2.6;

function tigerTexture() {
	const c = document.createElement('canvas');
	c.width = c.height = 128;
	const ctx = c.getContext('2d');
	ctx.fillStyle = '#f6b51e';
	ctx.fillRect(0, 0, 128, 128);
	ctx.fillStyle = '#1b1b1f';
	for (let x = -20; x < 140; x += 22) {
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.quadraticCurveTo(x + 14, 64, x, 128);
		ctx.lineTo(x + 8, 128);
		ctx.quadraticCurveTo(x + 22, 64, x + 8, 0);
		ctx.fill();
	}
	const t = new CanvasTexture(c);
	t.colorSpace = SRGBColorSpace;
	return t;
}

function makeOni(color) {
	const g = new Group();
	const skin = new MeshLambertMaterial({ color });
	const white = new MeshLambertMaterial({ color: 0xffffff });
	const black = new MeshBasicMaterial({ color: 0x111111 });
	const horn = new MeshLambertMaterial({ color: 0xfff1c4 });
	const hair = new MeshLambertMaterial({ color: 0x1b1b1f });
	const tiger = new MeshLambertMaterial({ map: tigerTexture() });
	const iron = new MeshLambertMaterial({ color: 0x3a3a44 });

	// 雲
	const cloud = new Group();
	const cloudMat = new MeshLambertMaterial({ color: 0xffffff, emissive: 0x666666 });
	for (const [x, y, z, r] of [[0, 0, 0, 1.1], [1, 0.1, 0.3, 0.8], [-1, 0.05, -0.2, 0.85], [0.4, 0.2, -0.8, 0.7], [-0.5, 0.15, 0.8, 0.7], [1.6, -0.1, -0.4, 0.55], [-1.6, -0.1, 0.4, 0.55]]) {
		const m = new Mesh(new SphereGeometry(r, 12, 10), cloudMat);
		m.position.set(x, y, z);
		m.scale.y = 0.7;
		cloud.add(m);
	}
	cloud.position.y = -1.0;
	cloud.name = 'cloud';
	g.add(cloud);

	// 体
	const body = new Mesh(new CapsuleGeometry(0.55, 0.7, 6, 12), skin);
	body.position.y = 0.6;
	g.add(body);
	const pants = new Mesh(new CylinderGeometry(0.62, 0.66, 0.5, 14), tiger);
	pants.position.y = 0.2;
	g.add(pants);
	for (const sx of [-1, 1]) {
		const leg = new Mesh(new CapsuleGeometry(0.2, 0.3, 4, 8), skin);
		leg.position.set(sx * 0.3, -0.25, 0);
		g.add(leg);
	}
	// 頭
	const head = new Group();
	head.name = 'head';
	head.position.y = 1.65;
	g.add(head);
	head.add(new Mesh(new SphereGeometry(0.55, 16, 12), skin));
	for (const sx of [-1, 1]) {
		const h = new Mesh(new ConeGeometry(0.13, 0.55, 10), horn);
		h.position.set(sx * 0.28, 0.5, 0);
		h.rotation.z = -sx * 0.3;
		head.add(h);
		const eye = new Mesh(new SphereGeometry(0.15, 10, 8), white);
		eye.position.set(sx * 0.2, 0.08, -0.45);
		head.add(eye);
		const pupil = new Mesh(new SphereGeometry(0.07, 8, 6), black);
		pupil.position.set(sx * 0.2, 0.08, -0.59);
		head.add(pupil);
		// 眉
		const brow = new Mesh(new CylinderGeometry(0.035, 0.035, 0.3, 6), black);
		brow.rotation.z = Math.PI / 2 + sx * 0.4;
		brow.position.set(sx * 0.2, 0.28, -0.48);
		head.add(brow);
		// 牙
		const fang = new Mesh(new ConeGeometry(0.05, 0.16, 6), white);
		fang.rotation.x = Math.PI;
		fang.position.set(sx * 0.15, -0.28, -0.46);
		head.add(fang);
	}
	const mouth = new Mesh(new CylinderGeometry(0.22, 0.22, 0.05, 16, 1, false, 0, Math.PI), black);
	mouth.rotation.x = Math.PI / 2;
	mouth.position.set(0, -0.2, -0.5);
	head.add(mouth);
	// もじゃもじゃの髪
	for (let i = 0; i < 9; i++) {
		const a = (i / 9) * Math.PI * 2;
		const m = new Mesh(new SphereGeometry(0.2, 8, 6), hair);
		m.position.set(Math.cos(a) * 0.42, 0.3, Math.sin(a) * 0.42 + 0.1);
		head.add(m);
	}
	// 腕と金棒
	const armL = new Mesh(new CapsuleGeometry(0.16, 0.6, 4, 8), skin);
	armL.position.set(-0.75, 0.75, 0);
	armL.rotation.z = 0.5;
	g.add(armL);
	const arm = new Group();
	arm.name = 'arm';
	arm.position.set(0.7, 1.05, 0);
	g.add(arm);
	const armR = new Mesh(new CapsuleGeometry(0.16, 0.6, 4, 8), skin);
	armR.position.set(0.15, 0.3, 0);
	armR.rotation.z = -0.5;
	arm.add(armR);
	const club = new Mesh(new CylinderGeometry(0.16, 0.09, 2.0, 8), iron);
	club.position.set(0.35, 1.1, 0);
	club.rotation.z = -0.2;
	arm.add(club);
	for (let i = 0; i < 6; i++) {
		const stud = new Mesh(new ConeGeometry(0.06, 0.14, 5), white);
		const a = (i / 6) * Math.PI * 2;
		stud.position.set(0.35 + Math.cos(a) * 0.15, 1.5 - (i % 3) * 0.3, Math.sin(a) * 0.15);
		stud.rotation.z = -Math.PI / 2;
		arm.add(stud);
	}
	// 描画を軽くするため、部位ごとに1つのメッシュにまとめる (鬼が50匹以上になるので)
	for (const part of [g, cloud, head, arm]) flatten(part);
	g.scale.setScalar(SCALE);
	g.traverse((o) => { o.castShadow = true; });
	return g;
}

const flatMaterial = new MeshLambertMaterial({ vertexColors: true });

// group の直下にある単色のメッシュを、頂点カラー付きの1つのメッシュにまとめる
function flatten(group) {
	const parts = [];
	for (const child of [...group.children]) {
		if (!child.isMesh || child.material.map) continue;
		child.updateMatrix();
		const geom = child.geometry.clone().applyMatrix4(child.matrix).toNonIndexed();
		const c = child.material.color;
		const n = geom.attributes.position.count;
		const col = new Float32Array(n * 3);
		for (let i = 0; i < n; i++) col.set([c.r, c.g, c.b], i * 3);
		geom.setAttribute('color', new Float32BufferAttribute(col, 3));
		for (const k of Object.keys(geom.attributes)) if (!['position', 'normal', 'color'].includes(k)) geom.deleteAttribute(k);
		parts.push(geom);
		group.remove(child);
	}
	if (parts.length) group.add(new Mesh(mergeGeometries(parts), flatMaterial));
}

// 色ごとにひな形を作っておき、複製して使う (ジオメトリは共有)
const templates = new Map();
function buildOni(color) {
	if (!templates.has(color)) templates.set(color, makeOni(color));
	const g = templates.get(color).clone();
	g.userData.arm = g.getObjectByName('arm');
	g.userData.head = g.getObjectByName('head');
	g.userData.cloud = g.getObjectByName('cloud');
	return g;
}

const COLORS = [0xd83a2e, 0x2f5fd8, 0x2fa84f, 0x8a3fd8, 0xf0a020, 0x222222];

const DETECT = 450; // この距離にプレイヤーが入ると見つかる (m)
const LOSE = 900; // これより離れると見失う
const WANDER_SPEED = 6;
const WANDER_RADIUS = 450; // 持ち場のまわりをうろつく範囲
const SAFE_START = 600; // スタート地点のこの範囲には置かない
const SEPARATION = 45; // 追いかける鬼どうしがこれより近いと離れる

const tmp = new Vector3();

export class Oni {
	constructor(scene) {
		this.scene = scene;
		this.list = [];
		this.time = 0;
		this.nextSpawn = FIRST_SPAWN;
		this.homes = [];
		this.heightAt = () => 0;
	}

	// homes: 鬼の持ち場の候補 (名所の位置)、heightAtWorld: 地面の高さ
	setWorld(homes, heightAtWorld) {
		this.homes = homes;
		this.heightAt = heightAtWorld;
	}

	reset() {
		for (const o of this.list) this.scene.remove(o.obj);
		this.list = [];
		this.time = 0;
		this.nextSpawn = FIRST_SPAWN;
	}

	// 持ち場の近くに鬼を置く (最初は徘徊している)
	spawnAt(home) {
		const n = this.list.length;
		const obj = buildOni(COLORS[n % COLORS.length]);
		const pos = home.clone();
		const a = Math.random() * Math.PI * 2, r = 100 + Math.random() * 300;
		pos.x += Math.cos(a) * r;
		pos.z += Math.sin(a) * r;
		pos.y = this.heightAt(pos.x, pos.z) + 60 + Math.random() * 140;
		obj.position.copy(pos);
		this.scene.add(obj);
		const oni = {
			obj, pos, vel: new Vector3(), phase: Math.random() * 6, n,
			home: home.clone(), state: 'wander', waypoint: pos.clone(),
			flank: Math.random() * Math.PI * 2, // 回り込む方向 (鬼ごとに違う)
		};
		this.pickWaypoint(oni);
		this.list.push(oni);
		return oni;
	}

	pickWaypoint(o) {
		const a = Math.random() * Math.PI * 2, r = Math.random() * WANDER_RADIUS;
		const x = o.home.x + Math.cos(a) * r, z = o.home.z + Math.sin(a) * r;
		o.waypoint.set(x, this.heightAt(x, z) + 50 + Math.random() * 170, z);
	}

	// プレイヤーから離れた持ち場を、なるべくばらけるように選ぶ
	chooseHomes(count, from, minDist) {
		const list = this.homes.filter((h) => Math.hypot(h.x - from.x, h.z - from.z) > minDist);
		for (let i = list.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[list[i], list[j]] = [list[j], list[i]];
		}
		return list.slice(0, count);
	}

	// アドバルーンを割ったとき: 1個ごとに、まだ割っていない名所の見張りとして鬼が1匹増える
	addForCheckpoint(count, glider, unpopped) {
		if (count % CP_PER_ONI !== 0 || !this.list.length || this.list.length >= MAX_ONI) return null;
		const far = unpopped.filter((h) => Math.hypot(h.x - glider.position.x, h.z - glider.position.z) > 700);
		const home = (far.length ? far : unpopped)[Math.floor(Math.random() * (far.length || unpopped.length))];
		return home ? this.spawnAt(home) : null;
	}

	// 戻り値: { spawned, found (見つけた鬼), nearest, nearestChase, caught }
	update(dt, glider, active) {
		const out = { spawned: null, found: [], nearest: Infinity, nearestChase: Infinity, caught: false };
		if (active) {
			this.time += dt;
			if (this.time >= this.nextSpawn && !this.list.length) {
				out.spawned = this.chooseHomes(FIRST_COUNT, glider.position, SAFE_START).map((h) => this.spawnAt(h));
			}
		}
		const chaseSpeed = Math.min(27, 15 + this.time * 0.04); // だんだん速くなる
		const p = glider.position;
		for (const o of this.list) {
			o.phase += dt;
			if (active) {
				const d = o.pos.distanceTo(p);
				const desired = tmp;
				if (o.state === 'chase') {
					if (d > LOSE) {
						// 見失ったら持ち場に戻る
						o.state = 'wander';
						o.waypoint.copy(o.home);
						o.waypoint.y = this.heightAt(o.home.x, o.home.z) + 120;
					}
					// 少し先を、鬼ごとに違う方向から回り込むように狙う (近づくほど本体を直接狙う)
					const flankR = Math.min(70, d * 0.35);
					desired.copy(glider.velocity).multiplyScalar(Math.min(3, d / 40)).add(p);
					desired.x += Math.cos(o.flank) * flankR;
					desired.z += Math.sin(o.flank) * flankR;
					desired.sub(o.pos).normalize().multiplyScalar(chaseSpeed + (o.n % 5) * 0.6);
					// 団子にならないよう、近くの追いかけ役から離れる
					for (const q of this.list) {
						if (q === o || q.state !== 'chase') continue;
						const dx = o.pos.x - q.pos.x, dy = o.pos.y - q.pos.y, dz = o.pos.z - q.pos.z;
						const dd = Math.hypot(dx, dy, dz);
						if (dd > 0.1 && dd < SEPARATION) {
							const k = ((SEPARATION - dd) / SEPARATION) * chaseSpeed * 0.8;
							desired.x += (dx / dd) * k;
							desired.y += (dy / dd) * k;
							desired.z += (dz / dd) * k;
						}
					}
					o.vel.lerp(desired, Math.min(1, dt * 0.9));
					out.nearestChase = Math.min(out.nearestChase, d);
				} else {
					if (d < DETECT) {
						// 見つけた！
						o.state = 'chase';
						out.found.push(o);
					}
					// 持ち場のまわりをうろうろ
					if (o.pos.distanceTo(o.waypoint) < 25) this.pickWaypoint(o);
					desired.copy(o.waypoint).sub(o.pos).normalize().multiplyScalar(WANDER_SPEED);
					o.vel.lerp(desired, Math.min(1, dt * 0.6));
				}
				o.pos.addScaledVector(o.vel, dt);
				// 地面にはもぐらない
				// 地面の高さの計算は重いので、0.5秒に1回だけ (鬼ごとにずらして)
				o.groundTimer = (o.groundTimer ?? Math.random() * 0.5) - dt;
				if (o.groundTimer <= 0 || o.ground === undefined) {
					o.ground = this.heightAt(o.pos.x, o.pos.z);
					o.groundTimer = 0.5;
				}
				if (o.pos.y < o.ground + 12) o.pos.y = o.ground + 12;
				if (d < out.nearest) out.nearest = d;
				if (d < CATCH_RADIUS) out.caught = true;
			}
			// 見た目: ふわふわ浮いて、進む方向を向き、金棒を振る (追いかけるときは激しく)
			const chasing = o.state === 'chase';
			o.obj.position.copy(o.pos);
			o.obj.position.y += Math.sin(o.phase * 2) * 0.8;
			if (o.vel.lengthSq() > 0.1) o.obj.rotation.y = Math.atan2(-o.vel.x, -o.vel.z);
			o.obj.userData.arm.rotation.z = Math.sin(o.phase * (chasing ? 9 : 3)) * (chasing ? 0.8 : 0.3);
			o.obj.userData.head.rotation.z = Math.sin(o.phase * (chasing ? 3 : 1)) * (chasing ? 0.15 : 0.35);
			o.obj.userData.cloud.rotation.y += dt * 1.5;
		}
		return out;
	}
}
