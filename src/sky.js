// 真っ青な秋晴れの空 (グラデーションの天球 + 太陽 + 小さな雲)
import {
	Mesh, SphereGeometry, ShaderMaterial, BackSide, Sprite, SpriteMaterial, CanvasTexture, Group,
} from 'three';

export function createSky(sunDir) {
	const group = new Group();
	const dome = new Mesh(
		new SphereGeometry(45000, 32, 16),
		new ShaderMaterial({
			side: BackSide,
			depthWrite: false,
			fog: false,
			uniforms: { sun: { value: sunDir.clone().normalize() } },
			vertexShader: `
				varying vec3 vDir;
				void main() {
					vDir = normalize(position);
					vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					gl_Position = p.xyww;
				}
			`,
			fragmentShader: `
				uniform vec3 sun;
				varying vec3 vDir;
				void main() {
					float h = clamp(vDir.y, -0.1, 1.0);
					vec3 zenith = vec3(0.02, 0.22, 0.72);
					vec3 mid = vec3(0.12, 0.45, 0.92);
					vec3 horizon = vec3(0.62, 0.82, 0.98);
					vec3 col = mix(horizon, mid, smoothstep(0.0, 0.18, h));
					col = mix(col, zenith, smoothstep(0.18, 0.85, h));
					float s = max(dot(normalize(vDir), sun), 0.0);
					col += vec3(1.0, 0.95, 0.8) * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.18);
					gl_FragColor = vec4(col, 1.0);
				}
			`,
		}),
	);
	dome.renderOrder = -1;
	dome.frustumCulled = false;
	group.add(dome);

	// ぽつぽつ浮かぶ白い雲
	const cloudTex = cloudTexture();
	for (let i = 0; i < 26; i++) {
		const a = Math.random() * Math.PI * 2;
		const r = 6000 + Math.random() * 14000;
		const s = new Sprite(new SpriteMaterial({ map: cloudTex, transparent: true, opacity: 0.85, depthWrite: false, fog: false }));
		const w = 700 + Math.random() * 1400;
		s.scale.set(w, w * 0.35, 1);
		s.position.set(Math.cos(a) * r, 900 + Math.random() * 900, Math.sin(a) * r);
		group.add(s);
	}
	return group;
}

function cloudTexture() {
	const c = document.createElement('canvas');
	c.width = 256;
	c.height = 96;
	const ctx = c.getContext('2d');
	for (let i = 0; i < 14; i++) {
		const x = 40 + Math.random() * 176, y = 40 + Math.random() * 30, r = 18 + Math.random() * 26;
		const g = ctx.createRadialGradient(x, y, 0, x, y, r);
		g.addColorStop(0, 'rgba(255,255,255,0.95)');
		g.addColorStop(1, 'rgba(255,255,255,0)');
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, 256, 96);
	}
	return new CanvasTexture(c);
}
