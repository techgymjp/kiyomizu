// 打ち上げ花火
import {
	BufferGeometry, Float32BufferAttribute, Points, PointsMaterial, AdditiveBlending, Color, Vector3, Group,
	CanvasTexture,
} from 'three';

const PALETTES = [
	['#ff4b5c', '#ffd23f', '#ffffff'],
	['#3bceac', '#0ead69', '#ffd23f'],
	['#ff70a6', '#ff9770', '#ffd670'],
	['#70d6ff', '#ffffff', '#e9ff70'],
	['#c77dff', '#ff4ecd', '#ffffff'],
	['#ff8c00', '#ffd700', '#ff3d00'],
];

function sparkTexture() {
	const c = document.createElement('canvas');
	c.width = c.height = 64;
	const ctx = c.getContext('2d');
	const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
	g.addColorStop(0, 'rgba(255,255,255,1)');
	g.addColorStop(0.3, 'rgba(255,255,255,0.8)');
	g.addColorStop(1, 'rgba(255,255,255,0)');
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, 64, 64);
	return new CanvasTexture(c);
}

export class Fireworks {
	constructor(scene) {
		this.group = new Group();
		scene.add(this.group);
		this.shells = [];
		this.bursts = [];
		this.texture = sparkTexture();
	}

	// from: 打ち上げ地点, to: 開く位置
	launch(from, to, delay = 0) {
		const geom = new BufferGeometry();
		geom.setAttribute('position', new Float32BufferAttribute([from.x, from.y, from.z], 3));
		const points = new Points(geom, new PointsMaterial({
			size: 6, map: this.texture, color: 0xfff1c0, transparent: true, depthWrite: false, blending: AdditiveBlending,
		}));
		points.visible = false;
		this.group.add(points);
		this.shells.push({ points, from: from.clone(), to: to.clone(), t: -delay, dur: 1.0 });
	}

	burst(center) {
		const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
		const n = 420;
		const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), vel = new Float32Array(n * 3);
		const v = new Vector3(), c = new Color();
		const speed = 45 + Math.random() * 15;
		for (let i = 0; i < n; i++) {
			v.randomDirection().multiplyScalar(speed * (0.85 + Math.random() * 0.15));
			pos.set([center.x, center.y, center.z], i * 3);
			vel.set([v.x, v.y, v.z], i * 3);
			c.set(palette[i % palette.length]);
			col.set([c.r, c.g, c.b], i * 3);
		}
		const geom = new BufferGeometry();
		geom.setAttribute('position', new Float32BufferAttribute(pos, 3));
		geom.setAttribute('color', new Float32BufferAttribute(col, 3));
		const points = new Points(geom, new PointsMaterial({
			size: 8, map: this.texture, vertexColors: true, transparent: true, depthWrite: false, blending: AdditiveBlending,
		}));
		points.frustumCulled = false;
		this.group.add(points);
		this.bursts.push({ points, vel, life: 2.8 });
	}

	update(dt) {
		for (let i = this.shells.length - 1; i >= 0; i--) {
			const s = this.shells[i];
			s.t += dt;
			if (s.t < 0) continue;
			s.points.visible = true;
			const k = Math.min(1, s.t / s.dur);
			const e = 1 - (1 - k) ** 2;
			const p = s.points.geometry.attributes.position;
			p.setXYZ(0, s.from.x + (s.to.x - s.from.x) * e, s.from.y + (s.to.y - s.from.y) * e, s.from.z + (s.to.z - s.from.z) * e);
			p.needsUpdate = true;
			if (k >= 1) {
				this.burst(s.to);
				this.group.remove(s.points);
				s.points.geometry.dispose();
				this.shells.splice(i, 1);
			}
		}
		for (let i = this.bursts.length - 1; i >= 0; i--) {
			const b = this.bursts[i];
			b.life -= dt;
			const p = b.points.geometry.attributes.position;
			const drag = Math.exp(-1.2 * dt);
			for (let k = 0; k < p.count; k++) {
				b.vel[k * 3] *= drag;
				b.vel[k * 3 + 1] = b.vel[k * 3 + 1] * drag - 5 * dt;
				b.vel[k * 3 + 2] *= drag;
				p.array[k * 3] += b.vel[k * 3] * dt;
				p.array[k * 3 + 1] += b.vel[k * 3 + 1] * dt;
				p.array[k * 3 + 2] += b.vel[k * 3 + 2] * dt;
			}
			p.needsUpdate = true;
			// 最後はチカチカと消える
			b.points.material.opacity = Math.max(0, Math.min(1, b.life / 1.2)) * (b.life < 1 ? 0.6 + Math.random() * 0.4 : 1);
			if (b.life <= 0) {
				this.group.remove(b.points);
				b.points.geometry.dispose();
				b.points.material.dispose();
				this.bursts.splice(i, 1);
			}
		}
	}
}
