// アドバルーン(チェックポイント)と上昇気流の表示
import {
	Group, Mesh, SphereGeometry, MeshStandardMaterial, PlaneGeometry, MeshBasicMaterial,
	CanvasTexture, SRGBColorSpace, DoubleSide, BufferGeometry, Float32BufferAttribute,
	LineBasicMaterial, Line, Sprite, SpriteMaterial, Points, PointsMaterial, Vector3,
	AdditiveBlending, CylinderGeometry, Color,
} from 'three';
import { geoToWorld } from './geo.js';

const BALLOON_RADIUS = 7;
export const HIT_RADIUS = 11;
const COLORS = ['#e8382f', '#f5b800', '#2f7fe8', '#e85ab5', '#2fbf71', '#f07a1a'];

function bannerTexture(text, color) {
	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128 * Math.max(4, text.length + 1);
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = '#fffaf0';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = color;
	ctx.lineWidth = 14;
	ctx.strokeRect(7, 7, canvas.width - 14, canvas.height - 14);
	ctx.fillStyle = '#1a1a1a';
	ctx.font = 'bold 92px "Hiragino Mincho ProN", "Yu Mincho", serif';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	const chars = [...text.replace(/\s/g, '')];
	const step = (canvas.height - 64) / chars.length;
	chars.forEach((ch, i) => ctx.fillText(ch, 64, 32 + step * (i + 0.5)));
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	return { tex, aspect: canvas.height / canvas.width };
}

function labelTexture(text) {
	const canvas = document.createElement('canvas');
	canvas.width = 512;
	canvas.height = 128;
	const ctx = canvas.getContext('2d');
	ctx.font = 'bold 52px sans-serif';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.lineWidth = 10;
	ctx.strokeStyle = 'rgba(0,0,0,0.75)';
	ctx.strokeText(text, 256, 64);
	ctx.fillStyle = '#fff';
	ctx.fillText(text, 256, 64);
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	return tex;
}

export class Balloons {
	constructor(scene, spots, terrain) {
		this.group = new Group();
		scene.add(this.group);
		this.items = [];
		this.particles = [];
		const sphere = new SphereGeometry(BALLOON_RADIUS, 32, 20);

		spots.forEach((spot, i) => {
			const color = COLORS[i % COLORS.length];
			const ground = terrain.heightAt(spot.lat, spot.lon);
			const pos = geoToWorld(spot.lat, spot.lon, ground + spot.agl);
			const groundPos = geoToWorld(spot.lat, spot.lon, ground);

			const g = new Group();
			g.position.copy(pos);

			const ball = new Mesh(sphere, new MeshStandardMaterial({
				color, roughness: 0.35, metalness: 0.05, emissive: new Color(color).multiplyScalar(0.25),
			}));
			g.add(ball);

			const { tex, aspect } = bannerTexture(spot.name, color);
			const bw = 3.2, bh = bw * aspect;
			const banner = new Mesh(new PlaneGeometry(bw, bh), new MeshBasicMaterial({ map: tex, side: DoubleSide }));
			banner.position.y = -BALLOON_RADIUS - 2 - bh / 2;
			g.add(banner);

			// 地面への係留ロープ
			const rope = new BufferGeometry();
			rope.setAttribute('position', new Float32BufferAttribute([
				0, -BALLOON_RADIUS, 0,
				groundPos.x - pos.x, groundPos.y - pos.y, groundPos.z - pos.z,
			], 3));
			g.add(new Line(rope, new LineBasicMaterial({ color: 0x333333 })));

			// 遠くからでも見えるラベル
			const label = new Sprite(new SpriteMaterial({ map: labelTexture(`🎈 ${spot.name}`), depthTest: false, transparent: true }));
			label.scale.set(0.16, 0.04, 1);
			label.material.sizeAttenuation = false;
			label.position.y = BALLOON_RADIUS + 6;
			label.renderOrder = 10;
			g.add(label);

			this.group.add(g);
			this.items.push({ spot, group: g, ball, banner, label, popped: false, phase: Math.random() * 6.28, base: pos.clone() });
		});
	}

	reset() {
		for (const it of this.items) {
			it.popped = false;
			it.group.visible = true;
		}
		for (const p of this.particles) this.group.remove(p.points);
		this.particles.length = 0;
	}

	// 割れたチェックポイントを返す
	update(dt, time, playerPos, camera) {
		const popped = [];
		for (const it of this.items) {
			if (it.popped) continue;
			it.group.position.y = it.base.y + Math.sin(time * 0.8 + it.phase) * 1.2;
			it.banner.rotation.y = Math.sin(time * 0.5 + it.phase) * 0.3;
			const d = it.group.position.distanceTo(playerPos);
			// 近くのラベルは隠し、遠すぎるものは薄く
			it.label.visible = d > 120 && d < 6000;
			it.label.material.opacity = d > 3000 ? 0.55 : 1;
			if (d < HIT_RADIUS) {
				it.popped = true;
				it.group.visible = false;
				this.burst(it.group.position, it.ball.material.color);
				popped.push(it);
			}
		}
		for (let i = this.particles.length - 1; i >= 0; i--) {
			const p = this.particles[i];
			p.life -= dt;
			const pos = p.points.geometry.attributes.position;
			for (let k = 0; k < pos.count; k++) {
				p.vel[k * 3 + 1] -= 9.8 * dt * 0.3;
				pos.array[k * 3] += p.vel[k * 3] * dt;
				pos.array[k * 3 + 1] += p.vel[k * 3 + 1] * dt;
				pos.array[k * 3 + 2] += p.vel[k * 3 + 2] * dt;
			}
			pos.needsUpdate = true;
			p.points.material.opacity = Math.max(0, p.life / 1.5);
			if (p.life <= 0) {
				this.group.remove(p.points);
				p.points.geometry.dispose();
				this.particles.splice(i, 1);
			}
		}
		return popped;
	}

	burst(center, color) {
		const n = 160;
		const pos = new Float32Array(n * 3);
		const vel = new Float32Array(n * 3);
		const v = new Vector3();
		for (let i = 0; i < n; i++) {
			v.randomDirection();
			pos.set([center.x + v.x * BALLOON_RADIUS, center.y + v.y * BALLOON_RADIUS, center.z + v.z * BALLOON_RADIUS], i * 3);
			v.multiplyScalar(10 + Math.random() * 25);
			vel.set([v.x, v.y, v.z], i * 3);
		}
		const geom = new BufferGeometry();
		geom.setAttribute('position', new Float32BufferAttribute(pos, 3));
		const points = new Points(geom, new PointsMaterial({ color, size: 1.6, transparent: true }));
		this.group.add(points);
		this.particles.push({ points, vel, life: 1.5 });
	}

	nearest(playerPos) {
		let best = null, bd = Infinity;
		for (const it of this.items) {
			if (it.popped) continue;
			const d = it.group.position.distanceTo(playerPos);
			if (d < bd) { bd = d; best = it; }
		}
		return best ? { item: best, distance: bd } : null;
	}
}

// 上昇気流: ゆっくり昇る光の粒で表現
export class Thermals {
	constructor(scene, thermals, terrain) {
		this.items = thermals.map((t) => {
			const ground = terrain.heightAt(t.lat, t.lon);
			const base = geoToWorld(t.lat, t.lon, ground);
			return { ...t, base, top: 600 };
		});
		const n = 220;
		this.group = new Group();
		scene.add(this.group);
		this.systems = this.items.map((t) => {
			const pos = new Float32Array(n * 3);
			const seed = new Float32Array(n * 3);
			for (let i = 0; i < n; i++) {
				seed[i * 3] = Math.random() * Math.PI * 2;
				seed[i * 3 + 1] = Math.sqrt(Math.random()) * t.r;
				seed[i * 3 + 2] = Math.random() * t.top;
			}
			const geom = new BufferGeometry();
			geom.setAttribute('position', new Float32BufferAttribute(pos, 3));
			const points = new Points(geom, new PointsMaterial({
				color: 0xfff1c4, size: 2.2, transparent: true, opacity: 0.35, depthWrite: false, blending: AdditiveBlending,
			}));
			points.frustumCulled = false;
			this.group.add(points);
			// 足元の目印
			const ring = new Mesh(
				new CylinderGeometry(t.r, t.r, 1, 48, 1, true),
				new MeshBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.06, side: DoubleSide, depthWrite: false }),
			);
			ring.scale.y = 400;
			ring.position.copy(t.base).add(new Vector3(0, 200, 0));
			this.group.add(ring);
			return { points, seed, t };
		});
	}

	update(time) {
		for (const s of this.systems) {
			const arr = s.points.geometry.attributes.position.array;
			const { base, top } = s.t;
			for (let i = 0; i < s.seed.length / 3; i++) {
				const a = s.seed[i * 3] + time * 0.6;
				const r = s.seed[i * 3 + 1];
				const h = (s.seed[i * 3 + 2] + time * s.t.w * 4) % top;
				arr[i * 3] = base.x + Math.cos(a) * r;
				arr[i * 3 + 1] = base.y + h;
				arr[i * 3 + 2] = base.z + Math.sin(a) * r;
			}
			s.points.geometry.attributes.position.needsUpdate = true;
		}
	}

	// 位置における上昇気流の強さ(m/s)
	liftAt(pos) {
		let w = 0;
		for (const t of this.items) {
			const d = Math.hypot(pos.x - t.base.x, pos.z - t.base.z);
			if (d < t.r * 1.5 && pos.y - t.base.y < t.top) {
				const k = Math.max(0, 1 - (d / (t.r * 1.5)) ** 2);
				w += t.w * k * 1.6;
			}
		}
		return w;
	}
}
