// ハングライダーの飛行モデルと3Dモデル
import {
	Group, Mesh, BufferGeometry, Float32BufferAttribute, MeshStandardMaterial, DoubleSide,
	CylinderGeometry, CapsuleGeometry, SphereGeometry, MathUtils, Vector3, CanvasTexture, SRGBColorSpace,
} from 'three';

const G = 9.81;
const DEG = MathUtils.DEG2RAD;
const GLIDE_RATIO = 11; // 滑空比
const TRIM_SPEED = 17; // m/s
const TRIM_ANGLE = -Math.atan(1 / GLIDE_RATIO);
const DRAG_K = G * Math.sin(-TRIM_ANGLE) / TRIM_SPEED ** 2;
const STALL_SPEED = 9;
const JET_THRUST = 16; // m/s^2
export const MAX_JET = 40; // 秒 (ターボ8つ分)

export class Glider {
	constructor() {
		this.position = new Vector3();
		this.velocity = new Vector3();
		this.yaw = 0; // 北から時計回り
		this.gamma = TRIM_ANGLE; // 飛行経路角 (上向き正)
		this.bank = 0;
		this.speed = TRIM_SPEED;
		this.jetFuel = 0;
		this.jetting = false;
		this.stalled = false;
		this.object = buildModel();
		this.jetFlame = this.object.getObjectByName('flame');
	}

	reset(position, yaw) {
		this.position.copy(position);
		this.yaw = yaw;
		this.gamma = -20 * DEG;
		this.bank = 0;
		this.speed = 14;
		this.jetFuel = 0;
		this.jetting = false;
		this.stalled = false;
		this.syncObject();
	}

	forward(target = new Vector3()) {
		return target.set(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
	}

	// input: { pitch: -1..1 (正で上昇), roll: -1..1 (正で右), jet: bool }
	update(dt, input, lift = 0) {
		this.jetting = input.jet && this.jetFuel > 0;
		if (this.jetting) this.jetFuel = Math.max(0, this.jetFuel - dt);

		// バンクと旋回
		const targetBank = input.roll * 55 * DEG;
		this.bank += (targetBank - this.bank) * Math.min(1, dt * 2.5);
		this.yaw += G * Math.tan(this.bank) / Math.max(this.speed, 8) * dt;

		// ピッチ (飛行経路角)
		this.stalled = this.speed < STALL_SPEED && !this.jetting;
		const trim = this.jetting ? 2 * DEG : TRIM_ANGLE;
		let targetGamma = trim + (input.pitch > 0 ? input.pitch * 32 * DEG : input.pitch * 50 * DEG);
		if (this.stalled) targetGamma = Math.min(targetGamma, -35 * DEG);
		const rate = this.stalled ? 2.5 : 1.6;
		this.gamma += (targetGamma - this.gamma) * Math.min(1, dt * rate);

		// 速度: 重力・抗力・ジェット推力
		const bankDrag = 1 + 0.6 * (1 / Math.cos(this.bank) - 1);
		let accel = -G * Math.sin(this.gamma) - DRAG_K * this.speed ** 2 * bankDrag;
		if (this.jetting) accel += JET_THRUST;
		this.speed = Math.max(4, this.speed + accel * dt);

		const f = this.forward();
		const horiz = this.speed * Math.cos(this.gamma);
		this.velocity.set(f.x * horiz, this.speed * Math.sin(this.gamma) + lift, f.z * horiz);
		this.position.addScaledVector(this.velocity, dt);
		this.syncObject();
	}

	syncObject() {
		const o = this.object;
		o.position.copy(this.position);
		o.rotation.set(this.gamma * 0.8, -this.yaw, -this.bank, 'YXZ');
		this.jetFlame.visible = this.jetting;
		if (this.jetting) this.jetFlame.scale.setScalar(0.8 + Math.random() * 0.5);
	}

	addJet(seconds) {
		this.jetFuel = Math.min(MAX_JET, this.jetFuel + seconds);
	}
}

function sailTexture() {
	const c = document.createElement('canvas');
	c.width = 512;
	c.height = 256;
	const ctx = c.getContext('2d');
	// 翼幅方向 (x) に色帯
	const bands = ['#1d3f8f', '#f4f1ea', '#d7262e', '#f6b51e', '#d7262e', '#f4f1ea', '#d7262e', '#f6b51e', '#d7262e', '#f4f1ea', '#1d3f8f'];
	const w = c.width / bands.length;
	bands.forEach((col, i) => {
		ctx.fillStyle = col;
		ctx.fillRect(i * w, 0, w + 1, c.height);
	});
	// 縫い目
	ctx.strokeStyle = 'rgba(0,0,0,0.18)';
	ctx.lineWidth = 2;
	for (let i = 1; i < bands.length; i++) {
		ctx.beginPath();
		ctx.moveTo(i * w, 0);
		ctx.lineTo(i * w, c.height);
		ctx.stroke();
	}
	for (let y = 40; y < c.height; y += 50) {
		ctx.strokeStyle = 'rgba(0,0,0,0.07)';
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(c.width, y);
		ctx.stroke();
	}
	// 前縁の補強布
	ctx.fillStyle = '#2b2b30';
	ctx.fillRect(0, 0, c.width, 14);
	const tex = new CanvasTexture(c);
	tex.colorSpace = SRGBColorSpace;
	return tex;
}

function buildModel() {
	const root = new Group();
	root.name = 'glider';

	// 翼: 原点はパイロットの頭の位置、-Z が前方
	const span = 10.4, sweep = 2.3, rootChord = 3.1, sailY = 1.35, noseZ = -1.75;
	const NS = 20, NC = 6;
	const pos = [], uv = [], index = [];
	for (let i = 0; i <= NS; i++) {
		const s = i / NS * 2 - 1; // -1 (左翼端) 〜 1 (右翼端)
		const a = Math.abs(s);
		const leZ = noseZ + a * sweep;
		const chord = rootChord * (1 - a * 0.8) + 0.25;
		for (let j = 0; j <= NC; j++) {
			const t = j / NC;
			const x = s * span / 2;
			// 上反角 + 帆のふくらみ + 後縁のねじり上げ
			const y = sailY + 0.12 + a * 0.32 + Math.sin(Math.PI * t) * 0.16 * (1 - a * a) - t * a * 0.12;
			const z = leZ + chord * t;
			pos.push(x, y, z);
			uv.push(i / NS, 1 - t);
		}
	}
	for (let i = 0; i < NS; i++) {
		for (let j = 0; j < NC; j++) {
			const a = i * (NC + 1) + j, b = a + NC + 1;
			index.push(a, a + 1, b, b, a + 1, b + 1);
		}
	}
	const sailGeom = new BufferGeometry();
	sailGeom.setAttribute('position', new Float32BufferAttribute(pos, 3));
	sailGeom.setAttribute('uv', new Float32BufferAttribute(uv, 2));
	sailGeom.setIndex(index);
	sailGeom.computeVertexNormals();
	const sail = new Mesh(sailGeom, new MeshStandardMaterial({ map: sailTexture(), side: DoubleSide, roughness: 0.7 }));
	sail.castShadow = true;
	root.add(sail);

	const tube = new MeshStandardMaterial({ color: 0xb4bcc4, metalness: 0.7, roughness: 0.35 });
	const addTube = (a, b, r = 0.022, parent = root, mat = tube) => {
		const va = new Vector3(...a), vb = new Vector3(...b);
		const m = new Mesh(new CylinderGeometry(r, r, va.distanceTo(vb), 8), mat);
		m.position.copy(va).add(vb).multiplyScalar(0.5);
		m.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), vb.clone().sub(va).normalize());
		m.castShadow = true;
		parent.add(m);
		return m;
	};
	// キール・リーディングエッジ・クロスバー
	addTube([0, sailY + 0.08, noseZ - 0.05], [0, sailY + 0.02, noseZ + rootChord + 0.1], 0.03);
	addTube([0, sailY + 0.12, noseZ], [-span / 2, sailY + 0.44, noseZ + sweep], 0.028);
	addTube([0, sailY + 0.12, noseZ], [span / 2, sailY + 0.44, noseZ + sweep], 0.028);
	addTube([-span * 0.3, sailY + 0.25, noseZ + sweep * 0.6 + 0.2], [span * 0.3, sailY + 0.25, noseZ + sweep * 0.6 + 0.2], 0.02);
	// キングポスト
	addTube([0, sailY + 0.1, -0.2], [0, sailY + 0.75, -0.2], 0.02);
	// コントロールバー (A字フレーム)
	const barY = -0.42, barZ = -0.62, barW = 0.72;
	addTube([0, sailY, -0.15], [-barW, barY, barZ]);
	addTube([0, sailY, -0.15], [barW, barY, barZ]);
	addTube([-barW, barY, barZ], [barW, barY, barZ], 0.02);
	// ワイヤー
	const wire = new MeshStandardMaterial({ color: 0x666666 });
	for (const sx of [-1, 1]) {
		addTube([sx * barW, barY, barZ], [sx * span / 2 * 0.62, sailY + 0.33, noseZ + sweep * 0.62 + 0.1], 0.005, root, wire);
		addTube([0, sailY + 0.75, -0.2], [sx * span / 2 * 0.62, sailY + 0.33, noseZ + sweep * 0.62 + 0.1], 0.005, root, wire);
	}
	addTube([0, barY, barZ], [0, sailY + 0.05, noseZ], 0.005, root, wire);

	// パイロット (うつ伏せでハーネスに入っている)
	const body = new Group();
	body.name = 'pilotBody';
	const suit = new MeshStandardMaterial({ color: 0x1f2a44, roughness: 0.8 });
	const accent = new MeshStandardMaterial({ color: 0xf6b51e, roughness: 0.6 });
	const skin = new MeshStandardMaterial({ color: 0xe0b48f, roughness: 0.8 });
	const harness = new Mesh(new CapsuleGeometry(0.25, 1.25, 6, 12), suit);
	harness.rotation.x = Math.PI / 2;
	harness.position.set(0, -0.12, 0.78);
	harness.scale.set(1, 1, 0.85);
	body.add(harness);
	const stripe = new Mesh(new CapsuleGeometry(0.255, 0.9, 4, 12), accent);
	stripe.rotation.x = Math.PI / 2;
	stripe.position.set(0, -0.12, 0.85);
	stripe.scale.set(1.01, 1, 0.2);
	body.add(stripe);
	// 肩
	const shoulders = new Mesh(new CapsuleGeometry(0.13, 0.32, 4, 8), suit);
	shoulders.rotation.z = Math.PI / 2;
	shoulders.position.set(0, -0.08, 0.12);
	body.add(shoulders);
	// 腕 (肩 → ひじ → コントロールバーを握る手)
	for (const sx of [-1, 1]) {
		const sh = [sx * 0.24, -0.08, 0.12];
		const el = [sx * 0.44, -0.3, -0.22];
		const hand = [sx * 0.42, barY, barZ];
		addTube(sh, el, 0.065, body, suit);
		addTube(el, hand, 0.055, body, suit);
		const h = new Mesh(new SphereGeometry(0.06, 8, 6), skin);
		h.position.set(...hand);
		body.add(h);
	}
	// 吊り下げベルト
	addTube([0, sailY, 0.25], [0, 0.08, 0.45], 0.025, body, new MeshStandardMaterial({ color: 0x222222 }));
	body.traverse((o) => { o.castShadow = true; });
	root.add(body);

	// 頭 (ヘルメットとバイザー)
	const head = new Group();
	head.name = 'pilotHead';
	const helmet = new Mesh(new SphereGeometry(0.16, 16, 12), new MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }));
	helmet.scale.set(1, 0.95, 1.1);
	head.add(helmet);
	const helmetStripe = new Mesh(new SphereGeometry(0.162, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.35), new MeshStandardMaterial({ color: 0xd7262e, roughness: 0.3 }));
	helmetStripe.scale.set(0.35, 0.95, 1.1);
	head.add(helmetStripe);
	const visor = new Mesh(new SphereGeometry(0.15, 16, 8, Math.PI * 0.15, Math.PI * 0.7, Math.PI * 0.35, Math.PI * 0.3),
		new MeshStandardMaterial({ color: 0x111822, roughness: 0.1, metalness: 0.6 }));
	visor.rotation.y = Math.PI;
	visor.scale.set(1.05, 1, 1.12);
	head.add(visor);
	head.position.set(0, 0, -0.05);
	head.traverse((o) => { o.castShadow = true; });
	root.add(head);

	// ジェット (ハーネスの後ろ)
	const nozzle = new Mesh(new CylinderGeometry(0.16, 0.12, 0.5, 12), tube);
	nozzle.rotation.x = Math.PI / 2;
	nozzle.position.set(0, -0.12, 1.65);
	root.add(nozzle);
	const flame = new Mesh(
		new CylinderGeometry(0.05, 0.3, 2.2, 12, 1, true),
		new MeshStandardMaterial({ color: 0xffa020, emissive: 0xff6a00, emissiveIntensity: 3, transparent: true, opacity: 0.85, depthWrite: false }),
	);
	flame.rotation.x = Math.PI / 2;
	flame.position.set(0, -0.12, 3.0);
	flame.name = 'flame';
	root.add(flame);

	return root;
}
