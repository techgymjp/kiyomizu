// ハングライダーの飛行モデルと3Dモデル
import {
	Group, Mesh, BufferGeometry, Float32BufferAttribute, MeshStandardMaterial, DoubleSide,
	CylinderGeometry, CapsuleGeometry, SphereGeometry, MathUtils, Vector3,
} from 'three';

const G = 9.81;
const DEG = MathUtils.DEG2RAD;
const GLIDE_RATIO = 11; // 滑空比
const TRIM_SPEED = 17; // m/s
const TRIM_ANGLE = -Math.atan(1 / GLIDE_RATIO);
const DRAG_K = G * Math.sin(-TRIM_ANGLE) / TRIM_SPEED ** 2;
const STALL_SPEED = 9;
const JET_THRUST = 16; // m/s^2
export const MAX_JET = 20; // 秒

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

function buildModel() {
	const root = new Group();
	root.name = 'glider';

	// 翼 (デルタ形の帆): 原点はパイロットの頭の位置、-Z が前方
	const span = 10, chord = 3.2, sweep = 2.4, sailY = 1.4;
	const verts = [
		0, sailY + 0.15, -1.6, // 機首
		-span / 2, sailY + 0.35, -1.6 + sweep, // 左翼端
		0, sailY, -1.6 + chord, // 後端中央
		0, sailY + 0.15, -1.6,
		0, sailY, -1.6 + chord,
		span / 2, sailY + 0.35, -1.6 + sweep, // 右翼端
	];
	const sailGeom = new BufferGeometry();
	sailGeom.setAttribute('position', new Float32BufferAttribute(verts, 3));
	sailGeom.computeVertexNormals();
	const sail = new Mesh(sailGeom, new MeshStandardMaterial({
		color: 0xd7262e, side: DoubleSide, roughness: 0.6, transparent: true, opacity: 0.92,
	}));
	root.add(sail);

	// 帆の模様 (白いストライプ)
	const stripeGeom = new BufferGeometry();
	stripeGeom.setAttribute('position', new Float32BufferAttribute([
		-span / 2 * 0.55, sailY + 0.27, -1.6 + sweep * 0.55 + 0.02,
		-span / 2 * 0.45, sailY + 0.25, -1.6 + sweep * 0.45 + 0.02,
		-0.15, sailY + 0.03, -1.6 + chord - 0.1,
		span / 2 * 0.45, sailY + 0.25, -1.6 + sweep * 0.45 + 0.02,
		span / 2 * 0.55, sailY + 0.27, -1.6 + sweep * 0.55 + 0.02,
		0.15, sailY + 0.03, -1.6 + chord - 0.1,
	], 3));
	stripeGeom.computeVertexNormals();
	root.add(new Mesh(stripeGeom, new MeshStandardMaterial({ color: 0xffffff, side: DoubleSide })));

	const tube = new MeshStandardMaterial({ color: 0x9aa4ad, metalness: 0.6, roughness: 0.4 });
	const addTube = (a, b, r = 0.013) => {
		const va = new Vector3(...a), vb = new Vector3(...b);
		const len = va.distanceTo(vb);
		const m = new Mesh(new CylinderGeometry(r, r, len, 6), tube);
		m.position.copy(va).add(vb).multiplyScalar(0.5);
		m.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), vb.clone().sub(va).normalize());
		root.add(m);
	};
	// キール・リーディングエッジ
	addTube([0, sailY + 0.1, -1.7], [0, sailY - 0.05, -1.6 + chord]);
	addTube([0, sailY + 0.15, -1.6], [-span / 2, sailY + 0.35, -1.6 + sweep]);
	addTube([0, sailY + 0.15, -1.6], [span / 2, sailY + 0.35, -1.6 + sweep]);
	// コントロールバー (A字フレーム)
	const barY = -0.55, barZ = -1.15;
	addTube([0, sailY, -0.2], [-0.75, barY, barZ]);
	addTube([0, sailY, -0.2], [0.75, barY, barZ]);
	addTube([-0.75, barY, barZ], [0.75, barY, barZ], 0.018);

	// パイロット
	const suit = new MeshStandardMaterial({ color: 0x223355, roughness: 0.8 });
	const body = new Mesh(new CapsuleGeometry(0.28, 1.4, 4, 8), suit);
	body.rotation.x = Math.PI / 2;
	body.position.set(0, -0.15, 0.85);
	body.name = 'pilotBody';
	root.add(body);
	const head = new Mesh(new SphereGeometry(0.17, 12, 10), new MeshStandardMaterial({ color: 0xffcc33 }));
	head.position.set(0, -0.05, 0);
	head.name = 'pilotHead';
	root.add(head);

	// ジェット噴射
	const flame = new Mesh(
		new CylinderGeometry(0.05, 0.35, 2.2, 10, 1, true),
		new MeshStandardMaterial({ color: 0xffa020, emissive: 0xff6a00, emissiveIntensity: 3, transparent: true, opacity: 0.85 }),
	);
	flame.rotation.x = Math.PI / 2;
	flame.position.set(0, -0.15, 2.9);
	flame.name = 'flame';
	root.add(flame);
	const nozzle = new Mesh(new CylinderGeometry(0.22, 0.18, 0.6, 10), tube);
	nozzle.rotation.x = Math.PI / 2;
	nozzle.position.set(0, -0.15, 1.75);
	root.add(nozzle);

	return root;
}
