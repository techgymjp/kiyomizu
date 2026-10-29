// 鬼ごっこの鬼: 雲に乗った赤鬼が空を飛んで追いかけてくる
import {
	Group, Mesh, SphereGeometry, ConeGeometry, CylinderGeometry, CapsuleGeometry, MeshLambertMaterial,
	MeshBasicMaterial, CanvasTexture, SRGBColorSpace, Vector3,
} from 'three';

export const CATCH_RADIUS = 7;
const FIRST_SPAWN = 5; // 秒
const NEXT_SPAWN = 70; // 秒ごとに鬼が増える
const MAX_ONI = 6;
// 最初に出てくる3匹: 前方の左右に2匹、後ろに1匹。距離は毎回まちまち
// dir: 進行方向からの角度、dist: [最小, 最大] の距離 (m)
const FIRST = [
	{ dir: -0.4, dist: [380, 900] },
	{ dir: 0.45, dist: [380, 900] },
	{ dir: Math.PI, dist: [300, 650] },
];
const SPAWN_DIST = 520;
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

function buildOni(color) {
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
	g.add(cloud);
	g.userData.cloud = cloud;

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
	g.userData.arm = arm;
	g.userData.head = head;
	g.scale.setScalar(SCALE);
	g.traverse((o) => { o.castShadow = true; });
	return g;
}

const COLORS = [0xd83a2e, 0x2f5fd8, 0x2fa84f, 0x8a3fd8, 0xf0a020, 0x222222];

export class Oni {
	constructor(scene) {
		this.scene = scene;
		this.list = [];
		this.time = 0;
		this.nextSpawn = FIRST_SPAWN;
	}

	reset() {
		for (const o of this.list) this.scene.remove(o.obj);
		this.list = [];
		this.time = 0;
		this.nextSpawn = FIRST_SPAWN;
	}

	// dir: 進行方向からの角度 (0 = 前方)
	spawn(target, heading, dir, dist = SPAWN_DIST) {
		const n = this.list.length;
		const obj = buildOni(COLORS[n % COLORS.length]);
		const a = heading + dir;
		const pos = new Vector3(target.x + Math.sin(a) * dist, target.y + 40, target.z - Math.cos(a) * dist);
		obj.position.copy(pos);
		this.scene.add(obj);
		const oni = { obj, pos, vel: new Vector3(), phase: Math.random() * 6, n };
		this.list.push(oni);
		return oni;
	}

	// 戻り値: { spawned, nearest(距離), caught }
	update(dt, glider, active) {
		const out = { spawned: null, nearest: Infinity, caught: false, nearestOni: null };
		if (active) {
			this.time += dt;
			if (this.time >= this.nextSpawn && this.list.length < MAX_ONI) {
				if (!this.list.length) {
					out.spawned = FIRST.map((f) => this.spawn(glider.position, glider.yaw, f.dir, f.dist[0] + Math.random() * (f.dist[1] - f.dist[0])));
				} else {
					// 追加の鬼は後ろの左右から交互に
					const k = this.list.length;
					out.spawned = [this.spawn(glider.position, glider.yaw, Math.PI + (k % 2 ? 1 : -1) * (0.3 + 0.2 * k))];
				}
				this.nextSpawn += NEXT_SPAWN;
			}
		}
		const speed = Math.min(27, 15 + this.time * 0.04); // だんだん速くなる
		const to = new Vector3();
		for (const o of this.list) {
			o.phase += dt;
			if (active) {
				// プレイヤーの少し先を狙う
				const d = o.pos.distanceTo(glider.position);
				to.copy(glider.velocity).multiplyScalar(Math.min(3, d / 40)).add(glider.position).sub(o.pos);
				const desired = to.normalize().multiplyScalar(speed + o.n * 0.8);
				o.vel.lerp(desired, Math.min(1, dt * 0.9));
				o.pos.addScaledVector(o.vel, dt);
				if (d < out.nearest) {
					out.nearest = d;
					out.nearestOni = o;
				}
				if (d < CATCH_RADIUS) out.caught = true;
			}
			// 見た目: ふわふわ浮いて、進む方向を向き、金棒を振る
			o.obj.position.copy(o.pos);
			o.obj.position.y += Math.sin(o.phase * 2) * 0.8;
			if (o.vel.lengthSq() > 0.1) o.obj.rotation.y = Math.atan2(-o.vel.x, -o.vel.z);
			o.obj.userData.arm.rotation.z = Math.sin(o.phase * 6) * 0.6;
			o.obj.userData.head.rotation.z = Math.sin(o.phase * 3) * 0.15;
			o.obj.userData.cloud.rotation.y += dt * 1.5;
		}
		return out;
	}
}
