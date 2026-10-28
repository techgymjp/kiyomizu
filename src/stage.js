// 清水の舞台 (本堂の南に張り出した板張りの舞台と、それを支える懸造の柱)
import {
	Group, Mesh, BoxGeometry, MeshLambertMaterial, Sprite, SpriteMaterial, CanvasTexture, SRGBColorSpace,
} from 'three';

// 舞台の範囲 (ワールド座標、本堂の外形データから求めた南側)
export const STAGE = { x0: -17, x1: -3, z0: 12, z1: 21, floor: 121.5 };
export const START_POINT = { x: -10, z: 20, heading: 235 };

function signTexture() {
	const c = document.createElement('canvas');
	c.width = 512;
	c.height = 160;
	const ctx = c.getContext('2d');
	ctx.fillStyle = '#fff6e0';
	ctx.strokeStyle = '#d7262e';
	ctx.lineWidth = 14;
	ctx.beginPath();
	ctx.roundRect(8, 8, 496, 144, 36);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = '#1b1b1f';
	ctx.font = '900 76px "M PLUS Rounded 1c", sans-serif';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText('清水の舞台', 256, 84);
	const tex = new CanvasTexture(c);
	tex.colorSpace = SRGBColorSpace;
	return tex;
}

export function buildStage(scene, terrainHeightAtWorld) {
	const g = new Group();
	const wood = new MeshLambertMaterial({ color: 0x9a6a3c });
	const dark = new MeshLambertMaterial({ color: 0x5e3b20 });
	const { x0, x1, z0, z1, floor } = STAGE;
	const w = x1 - x0, d = z1 - z0;
	const deck = new Mesh(new BoxGeometry(w, 0.5, d), wood);
	deck.position.set((x0 + x1) / 2, floor - 0.25, (z0 + z1) / 2);
	deck.castShadow = deck.receiveShadow = true;
	g.add(deck);
	// 板の目地
	for (let x = x0 + 0.6; x < x1; x += 0.6) {
		const line = new Mesh(new BoxGeometry(0.04, 0.02, d), dark);
		line.position.set(x, floor + 0.01, (z0 + z1) / 2);
		g.add(line);
	}
	// 欄干
	const rail = (ax, az, bx, bz) => {
		const len = Math.hypot(bx - ax, bz - az);
		const m = new Mesh(new BoxGeometry(len, 0.12, 0.12), dark);
		m.position.set((ax + bx) / 2, floor + 1.0, (az + bz) / 2);
		m.rotation.y = -Math.atan2(bz - az, bx - ax);
		g.add(m);
	};
	rail(x0, z0, x0, z1);
	rail(x1, z0, x1, z1);
	// 正面 (南) の欄干は飛び出す部分を空ける
	rail(x0, z1, x0 + 3, z1);
	rail(x1 - 3, z1, x1, z1);
	// 懸造の柱と貫 (格子)
	for (let x = x0 + 0.5; x <= x1; x += 3.4) {
		for (let z = z0 + 0.5; z <= z1; z += 2.8) {
			const ground = terrainHeightAtWorld(x, z);
			const h = floor - ground + 1;
			if (h <= 0) continue;
			const post = new Mesh(new BoxGeometry(0.6, h, 0.6), wood);
			post.position.set(x, ground + h / 2 - 1, z);
			post.castShadow = true;
			g.add(post);
		}
	}
	for (let y = floor - 4; y > floor - 30; y -= 4) {
		for (let z = z0 + 0.5; z <= z1; z += 2.8) {
			const m = new Mesh(new BoxGeometry(w, 0.35, 0.3), dark);
			m.position.set((x0 + x1) / 2, y, z);
			g.add(m);
		}
		for (let x = x0 + 0.5; x <= x1; x += 3.4) {
			const m = new Mesh(new BoxGeometry(0.3, 0.35, d), dark);
			m.position.set(x, y, (z0 + z1) / 2);
			g.add(m);
		}
	}
	// 看板
	const sign = new Sprite(new SpriteMaterial({ map: signTexture(), transparent: true }));
	sign.scale.set(9, 2.8, 1);
	sign.position.set((x0 + x1) / 2, floor + 9, z0 - 2);
	g.add(sign);
	scene.add(g);
	return g;
}
