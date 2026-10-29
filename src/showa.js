// 昭和初期の京都の街角: 市電 (路面電車)、木の電柱、銭湯の煙突、屋上のアドバルーン、二代目京都駅舎
// 昭和初期モードのときだけ表示する
import {
	Group, Mesh, BoxGeometry, CylinderGeometry, ConeGeometry, SphereGeometry, MeshLambertMaterial,
	InstancedMesh, Object3D, Float32BufferAttribute, Color, PlaneGeometry, MeshBasicMaterial,
	CanvasTexture, SRGBColorSpace, DoubleSide, Points, PointsMaterial, BufferGeometry, Vector3,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { geoToWorld } from './geo.js';

// 市電が走っていた主な通り (緯度, 経度 の折れ線)
const TRAM_LINES = [
	{ name: '四条線', pts: [[35.00365, 135.7487], [35.00365, 135.7770]], cars: 3 },
	{ name: '烏丸線', pts: [[34.9858, 135.7596], [35.0420, 135.7596]], cars: 4 },
	{ name: '河原町線', pts: [[34.9893, 135.7690], [35.0300, 135.7690]], cars: 3 },
	{ name: '東山線', pts: [[34.9790, 135.7755], [35.0036, 135.7780], [35.0297, 135.7798]], cars: 3 },
	{ name: '丸太町線', pts: [[35.0170, 135.7350], [35.0170, 135.7880]], cars: 3 },
	{ name: '七条線', pts: [[34.9892, 135.7400], [34.9892, 135.7720]], cars: 2 },
	{ name: '今出川線', pts: [[35.0297, 135.7420], [35.0297, 135.7870]], cars: 3 },
	{ name: '千本線', pts: [[34.9900, 135.7420], [35.0450, 135.7430]], cars: 3 },
];

// 二代目京都駅舎 (1914〜1950年。ルネサンス風の木造駅舎)
const OLD_STATION = { lat: 34.98680, lon: 135.75900 };

function colored(geom, color) {
	const g = geom.toNonIndexed();
	const c = new Color(color);
	const n = g.attributes.position.count;
	const arr = new Float32Array(n * 3);
	for (let i = 0; i < n; i++) arr.set([c.r, c.g, c.b], i * 3);
	g.setAttribute('color', new Float32BufferAttribute(arr, 3));
	for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k);
	return g;
}
const merge = (parts) => mergeGeometries(parts.map(([g, c]) => colored(g, c)));
const vc = new MeshLambertMaterial({ vertexColors: true });

// 市電の車両 (緑とクリームの2色、屋根にポール)。+Z が進行方向
function tramGeometry() {
	return merge([
		[new BoxGeometry(2.3, 1.2, 12).translate(0, 0.9, 0), '#2f6b3a'], // 腰回り (緑)
		[new BoxGeometry(2.32, 1.1, 11.6).translate(0, 2.05, 0), '#f2e6c4'], // 窓まわり (クリーム)
		[new BoxGeometry(2.34, 0.6, 10.6).translate(0, 2.05, 0), '#2a3440'], // 窓
		[new BoxGeometry(2.4, 0.25, 12.2).translate(0, 2.72, 0), '#5a5a5a'], // 屋根
		[new BoxGeometry(0.06, 0.06, 4).rotateX(-0.5).translate(0, 3.8, -2.6), '#222222'], // ポール
		[new BoxGeometry(2.2, 0.35, 0.2).translate(0, 0.25, 5.9), '#222222'],
		[new BoxGeometry(2.2, 0.35, 0.2).translate(0, 0.25, -5.9), '#222222'],
	]);
}

function signTexture(text) {
	const c = document.createElement('canvas');
	c.width = 64;
	c.height = 256;
	const ctx = c.getContext('2d');
	ctx.fillStyle = '#fffaf0';
	ctx.fillRect(0, 0, 64, 256);
	ctx.fillStyle = '#c7254e';
	ctx.font = 'bold 44px serif';
	ctx.textAlign = 'center';
	[...text].forEach((ch, i) => ctx.fillText(ch, 32, 50 + i * 50));
	const t = new CanvasTexture(c);
	t.colorSpace = SRGBColorSpace;
	return t;
}

export class Showa {
	constructor(scene, heightAtWorld) {
		this.group = new Group();
		this.group.name = 'showa';
		scene.add(this.group);
		this.heightAt = heightAtWorld;
		this.buildTrams();
		this.buildPoles();
		this.buildChimneys();
		this.buildAdBalloons();
		this.buildStation();
		this.group.visible = false;
	}

	setVisible(v) {
		this.group.visible = v;
	}

	// 折れ線に沿って、距離 d の位置と向き
	pointAt(line, d) {
		let rest = d;
		for (let i = 0; i < line.segs.length; i++) {
			const s = line.segs[i];
			if (rest <= s.len || i === line.segs.length - 1) {
				const t = Math.min(1, rest / s.len);
				return { x: s.a.x + (s.b.x - s.a.x) * t, z: s.a.z + (s.b.z - s.a.z) * t, angle: s.angle };
			}
			rest -= s.len;
		}
		return null;
	}

	buildTrams() {
		const geom = tramGeometry();
		this.lines = TRAM_LINES.map((l) => {
			const pts = l.pts.map(([lat, lon]) => geoToWorld(lat, lon, 0));
			const segs = [];
			let total = 0;
			for (let i = 0; i < pts.length - 1; i++) {
				const a = pts[i], b = pts[i + 1];
				const len = Math.hypot(b.x - a.x, b.z - a.z);
				segs.push({ a, b, len, angle: Math.atan2(b.x - a.x, b.z - a.z) });
				total += len;
			}
			return { ...l, segs, total };
		});
		const count = this.lines.reduce((a, l) => a + l.cars, 0);
		this.trams = new InstancedMesh(geom, vc, count);
		this.trams.castShadow = true;
		this.trams.frustumCulled = false;
		this.group.add(this.trams);
		this.cars = [];
		for (const line of this.lines) {
			for (let i = 0; i < line.cars; i++) {
				// 上りと下りを交互に、間隔をあけて置く
				this.cars.push({ line, d: (line.total * (i + 0.5)) / line.cars, dir: i % 2 ? 1 : -1, speed: 7 + Math.random() * 2, wait: 0, y: 0, yTimer: 0 });
			}
		}
		this.dummy = new Object3D();
	}

	// 通り沿いの木の電柱 (電線は省略)
	buildPoles() {
		const spots = [];
		for (const line of this.lines) {
			for (let d = 0; d < line.total; d += 40) {
				const p = this.pointAt(line, d);
				for (const side of [-1, 1]) {
					const ox = Math.cos(p.angle) * 9 * side, oz = -Math.sin(p.angle) * 9 * side;
					spots.push([p.x + ox, p.z + oz, p.angle]);
				}
			}
		}
		const geom = merge([
			[new CylinderGeometry(0.12, 0.16, 9, 6).translate(0, 4.5, 0), '#5a4632'],
			[new BoxGeometry(1.6, 0.12, 0.12).translate(0, 8.3, 0), '#3a2e22'], // 腕木
			[new BoxGeometry(1.2, 0.1, 0.1).translate(0, 7.6, 0), '#3a2e22'],
		]);
		const poles = new InstancedMesh(geom, vc, spots.length);
		const o = new Object3D();
		spots.forEach(([x, z, a], i) => {
			o.position.set(x, this.heightAt(x, z) - 0.2, z);
			o.rotation.y = a;
			o.updateMatrix();
			poles.setMatrixAt(i, o.matrix);
		});
		this.group.add(poles);
	}

	// 銭湯の煙突 (れんが色) と、立ちのぼる煙
	buildChimneys() {
		const geom = merge([
			[new CylinderGeometry(0.7, 1.1, 22, 10).translate(0, 11, 0), '#8a4a32'],
			[new CylinderGeometry(0.78, 0.78, 0.6, 10).translate(0, 21.2, 0), '#3a3a3a'],
			[new BoxGeometry(6, 4, 6).translate(0, 2, 2.5), '#d9d0c0'], // 銭湯の建物
		]);
		const spots = [];
		for (let i = 0; i < 28; i++) {
			const lat = 34.980 + Math.random() * 0.058, lon = 135.735 + Math.random() * 0.045;
			spots.push(geoToWorld(lat, lon, 0));
		}
		const mesh = new InstancedMesh(geom, vc, spots.length);
		const o = new Object3D();
		this.smoke = [];
		spots.forEach((p, i) => {
			const y = this.heightAt(p.x, p.z) - 0.3;
			o.position.set(p.x, y, p.z);
			o.rotation.y = Math.random() * 6.28;
			o.updateMatrix();
			mesh.setMatrixAt(i, o.matrix);
			this.smoke.push(new Vector3(p.x, y + 22.5, p.z));
		});
		mesh.castShadow = true;
		this.group.add(mesh);
		// 煙: ゆっくり昇って横に流れる白い粒
		const n = 14;
		const pos = new Float32Array(this.smoke.length * n * 3);
		this.smokeSeed = Array.from({ length: this.smoke.length * n }, () => Math.random());
		const g = new BufferGeometry();
		g.setAttribute('position', new Float32BufferAttribute(pos, 3));
		this.smokePoints = new Points(g, new PointsMaterial({ color: 0xe8e4dc, size: 3.5, transparent: true, opacity: 0.55, depthWrite: false }));
		this.smokePoints.frustumCulled = false;
		this.smokePerChimney = n;
		this.group.add(this.smokePoints);
	}

	// 屋上のアドバルーン (宣伝用。チェックポイントではない)
	buildAdBalloons() {
		const words = ['仁丹', '大売出し', 'キネマ', '百貨店', 'カフェー', '新発売', '映画', '万年筆', '石鹸', '化粧品'];
		const colors = ['#e8382f', '#f5b800', '#2f7fe8', '#2fbf71', '#e85ab5', '#ff8a3d'];
		this.ads = [];
		const ball = new SphereGeometry(2.4, 16, 12);
		for (let i = 0; i < 24; i++) {
			const lat = 34.990 + Math.random() * 0.03, lon = 135.750 + Math.random() * 0.03;
			const p = geoToWorld(lat, lon, 0);
			const ground = this.heightAt(p.x, p.z);
			const g = new Group();
			g.position.set(p.x, ground + 26 + Math.random() * 14, p.z);
			g.add(new Mesh(ball, new MeshLambertMaterial({ color: colors[i % colors.length] })));
			const word = words[i % words.length];
			const banner = new Mesh(new PlaneGeometry(1.4, 1.4 * word.length + 0.8), new MeshBasicMaterial({ map: signTexture(word), side: DoubleSide }));
			banner.position.y = -2.4 - (1.4 * word.length + 0.8) / 2 - 0.5;
			g.add(banner);
			this.group.add(g);
			this.ads.push({ g, base: g.position.y, phase: Math.random() * 6 });
		}
	}

	// 二代目京都駅舎: 横に長い2階建てに、中央の時計台
	buildStation() {
		const c = geoToWorld(OLD_STATION.lat, OLD_STATION.lon, 0);
		const y = this.heightAt(c.x, c.z) - 0.3;
		const geom = merge([
			[new BoxGeometry(110, 11, 20).translate(0, 5.5, 0), '#efe6d2'], // 本屋
			[new BoxGeometry(110.5, 0.8, 20.5).translate(0, 5.2, 0), '#8a5a3a'], // 胴蛇腹
			[new BoxGeometry(112, 1, 22).translate(0, 11.4, 0), '#6a6a72'], // 軒
			[new ConeGeometry(36, 6, 4).rotateY(Math.PI / 4).scale(1.55, 1, 0.33).translate(0, 14.8, 0), '#4f5a52'], // 屋根
			[new BoxGeometry(18, 18, 22).translate(0, 9, 1), '#f5eedc'], // 中央部
			[new BoxGeometry(10, 10, 10).translate(0, 22, 1), '#f5eedc'], // 時計台
			[new ConeGeometry(8, 8, 4).rotateY(Math.PI / 4).translate(0, 31, 1), '#3f5a4a'], // 塔屋根
			[new CylinderGeometry(2.4, 2.4, 0.3, 24).rotateX(Math.PI / 2).translate(0, 22, 6.2), '#ffffff'], // 時計
			[new BoxGeometry(0.2, 1.8, 0.2).translate(0, 22.6, 6.4), '#111111'],
			[new BoxGeometry(1.3, 0.2, 0.2).translate(0.5, 22, 6.4), '#111111'],
			// 窓の列
			...Array.from({ length: 14 }, (_, i) => [new BoxGeometry(2.2, 3, 0.4).translate(-48 + i * 7.4, 7.8, 10.1), '#2a3440']),
			...Array.from({ length: 14 }, (_, i) => [new BoxGeometry(2.2, 3, 0.4).translate(-48 + i * 7.4, 2.6, 10.1), '#2a3440']),
		]);
		const station = new Mesh(geom, vc);
		station.position.set(c.x, y, c.z);
		// 線路に沿った東西向き (正面は北)
		station.rotation.y = Math.PI;
		station.castShadow = station.receiveShadow = true;
		this.group.add(station);
	}

	update(dt, time) {
		if (!this.group.visible) return;
		const o = this.dummy;
		this.cars.forEach((car, i) => {
			if (car.wait > 0) {
				car.wait -= dt;
			} else {
				car.d += car.dir * car.speed * dt;
				// 終点で折り返し、停留所でときどき止まる
				if (car.d > car.line.total || car.d < 0) {
					car.dir *= -1;
					car.d = Math.max(0, Math.min(car.line.total, car.d));
					car.wait = 4;
				} else if (Math.random() < dt * 0.05) {
					car.wait = 3 + Math.random() * 3;
				}
			}
			const p = this.pointAt(car.line, car.d);
			car.yTimer -= dt;
			if (car.yTimer <= 0) {
				car.y = this.heightAt(p.x, p.z);
				car.yTimer = 1;
			}
			// 上り下りで反対側の車線を走る
			const lane = 1.6 * car.dir;
			o.position.set(p.x + Math.cos(p.angle) * lane, car.y + 0.1, p.z - Math.sin(p.angle) * lane);
			o.rotation.set(0, p.angle + (car.dir < 0 ? Math.PI : 0), 0);
			o.updateMatrix();
			this.trams.setMatrixAt(i, o.matrix);
		});
		this.trams.instanceMatrix.needsUpdate = true;
		for (const a of this.ads) {
			a.g.position.y = a.base + Math.sin(time * 0.7 + a.phase) * 0.8;
			a.g.rotation.y = Math.sin(time * 0.3 + a.phase) * 0.4;
		}
		// 煙
		const arr = this.smokePoints.geometry.attributes.position.array;
		const n = this.smokePerChimney;
		this.smoke.forEach((top, c) => {
			for (let k = 0; k < n; k++) {
				const idx = c * n + k;
				const t = (time * 0.12 + this.smokeSeed[idx]) % 1;
				arr[idx * 3] = top.x + t * 18 + Math.sin(idx) * 1.5;
				arr[idx * 3 + 1] = top.y + t * 14;
				arr[idx * 3 + 2] = top.z + t * 6 + Math.cos(idx) * 1.5;
			}
		});
		this.smokePoints.geometry.attributes.position.needsUpdate = true;
	}
}
