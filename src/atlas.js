// 建物用のテクスチャアトラスを Canvas で描く (外部画像なし)
// 4x4 セル、各セル 256px。セル番号は buildingMesh.js の CELL と対応。
// 各セルは「1スパン × 1階分」の壁、または屋根材の繰り返し単位。
import { CanvasTexture, SRGBColorSpace, LinearMipmapLinearFilter } from 'three';

const S = 256;

function rand(seed) {
	let s = seed;
	return () => {
		s = (s * 16807) % 2147483647;
		return s / 2147483647;
	};
}

function noise(ctx, x, y, w, h, amount, seed = 1) {
	const r = rand(seed);
	// ざらつき (かすかな明暗のむら)
	for (let i = 0; i < (w * h) / 40; i++) {
		const v = r() < 0.5 ? 0 : 255;
		ctx.fillStyle = `rgba(${v},${v},${v},${amount * 0.35 * r()})`;
		const s = 2 + r() * 6;
		ctx.fillRect(x + r() * w, y + r() * h, s, s);
	}
}

function window_(ctx, x, y, w, h, frame = '#ddd', glass = '#5b7590') {
	ctx.fillStyle = frame;
	ctx.fillRect(x - 4, y - 4, w + 8, h + 8);
	const g = ctx.createLinearGradient(x, y, x + w, y + h);
	g.addColorStop(0, glass);
	g.addColorStop(0.5, '#9fb6cc');
	g.addColorStop(1, glass);
	ctx.fillStyle = g;
	ctx.fillRect(x, y, w, h);
}

const cells = [
	// 0: 町家の1階 (格子と漆喰)
	(c) => {
		c.fillStyle = '#e9e1d2';
		c.fillRect(0, 0, S, S);
		c.fillStyle = '#4a3324';
		c.fillRect(0, 70, S, 186);
		c.fillStyle = '#6b4a33';
		for (let x = 6; x < S; x += 12) c.fillRect(x, 80, 5, 176);
		c.fillStyle = '#3a281c';
		c.fillRect(0, 60, S, 14);
		c.fillRect(0, 0, 10, S);
		c.fillRect(S - 10, 0, 10, S);
		c.fillStyle = '#6d6a66';
		c.fillRect(0, S - 14, S, 14);
		noise(c, 0, 0, S, S, 0.12, 3);
	},
	// 1: 町家・住宅の2階 (漆喰と小窓、虫籠窓)
	(c) => {
		c.fillStyle = '#ece6da';
		c.fillRect(0, 0, S, S);
		c.fillStyle = '#4a3324';
		c.fillRect(0, 0, 10, S);
		c.fillRect(S - 10, 0, 10, S);
		c.fillRect(0, S - 12, S, 12);
		c.fillStyle = '#5a4030';
		c.fillRect(70, 90, 116, 70);
		c.fillStyle = '#e9e1d2';
		for (let x = 78; x < 186; x += 18) c.fillRect(x, 96, 9, 58);
		noise(c, 0, 0, S, S, 0.12, 5);
	},
	// 2: 店舗の1階 (ガラス)
	(c) => {
		c.fillStyle = '#9a9894';
		c.fillRect(0, 0, S, S);
		window_(c, 16, 70, S - 32, S - 84, '#555', '#3e5568');
		c.fillStyle = '#c33';
		c.fillRect(10, 30, S - 20, 26);
		noise(c, 0, 0, S, S, 0.1, 7);
	},
	// 3: オフィスビル (窓の帯)
	(c) => {
		c.fillStyle = '#d8d8d6';
		c.fillRect(0, 0, S, S);
		window_(c, 18, 60, S - 36, 150, '#bfc3c7', '#4f6a84');
		c.fillStyle = '#c9c9c7';
		c.fillRect(S / 2 - 3, 56, 6, 158);
		noise(c, 0, 0, S, S, 0.1, 11);
	},
	// 4: マンション (ベランダ)
	(c) => {
		c.fillStyle = '#efe9df';
		c.fillRect(0, 0, S, S);
		window_(c, 30, 40, S - 60, 140, '#ccc', '#6f8396');
		c.fillStyle = '#f7f5f0';
		c.fillRect(0, 160, S, 96);
		c.fillStyle = '#cfcac0';
		c.fillRect(0, 160, S, 8);
		c.fillStyle = '#b8b2a6';
		c.fillRect(0, S - 6, S, 6);
		noise(c, 0, 0, S, S, 0.1, 13);
	},
	// 5: 寺社の壁 (柱と白壁)
	(c) => {
		c.fillStyle = '#f2ece0';
		c.fillRect(0, 0, S, S);
		c.fillStyle = '#7a3b22';
		c.fillRect(0, 0, 22, S);
		c.fillRect(S - 22, 0, 22, S);
		c.fillRect(0, 40, S, 18);
		c.fillRect(0, 170, S, 14);
		c.fillStyle = '#5a2a18';
		c.fillRect(0, S - 20, S, 20);
		noise(c, 0, 0, S, S, 0.1, 17);
	},
	// 6: 工場の波板
	(c) => {
		c.fillStyle = '#c9ccd0';
		c.fillRect(0, 0, S, S);
		for (let x = 0; x < S; x += 16) {
			const g = c.createLinearGradient(x, 0, x + 16, 0);
			g.addColorStop(0, '#aeb2b8');
			g.addColorStop(0.5, '#e2e5e8');
			g.addColorStop(1, '#aeb2b8');
			c.fillStyle = g;
			c.fillRect(x, 0, 16, S);
		}
		noise(c, 0, 0, S, S, 0.12, 19);
	},
	// 7: 瓦 (いぶし銀)
	(c) => kawara(c, '#b3b8c0', '#868c96', 23),
	// 8: 陸屋根 (コンクリート)
	(c) => {
		c.fillStyle = '#b9b8b3';
		c.fillRect(0, 0, S, S);
		noise(c, 0, 0, S, S, 0.25, 29);
		c.strokeStyle = 'rgba(0,0,0,0.12)';
		c.lineWidth = 2;
		for (let x = 0; x <= S; x += 64) {
			c.beginPath(); c.moveTo(x, 0); c.lineTo(x, S); c.stroke();
			c.beginPath(); c.moveTo(0, x); c.lineTo(S, x); c.stroke();
		}
	},
	// 9: 金属屋根
	(c) => {
		c.fillStyle = '#8e9aa2';
		c.fillRect(0, 0, S, S);
		for (let x = 0; x < S; x += 32) {
			c.fillStyle = 'rgba(255,255,255,0.25)';
			c.fillRect(x, 0, 4, S);
			c.fillStyle = 'rgba(0,0,0,0.15)';
			c.fillRect(x + 4, 0, 3, S);
		}
		noise(c, 0, 0, S, S, 0.12, 31);
	},
	// 10: 寺社の大屋根 (本瓦)
	(c) => kawara(c, '#545961', '#33373e', 37, 28),
	// 11: 無地の壁
	(c) => {
		c.fillStyle = '#d9d5cd';
		c.fillRect(0, 0, S, S);
		noise(c, 0, 0, S, S, 0.15, 41);
	},
	// 12: 塔 (白いパネル)
	(c) => {
		c.fillStyle = '#f4f4f2';
		c.fillRect(0, 0, S, S);
		c.strokeStyle = 'rgba(0,0,0,0.08)';
		c.lineWidth = 3;
		c.strokeRect(0, 0, S, S);
	},
	// 13: 金箔 (金閣)
	(c) => {
		const g = c.createLinearGradient(0, 0, S, S);
		g.addColorStop(0, '#f7d774');
		g.addColorStop(0.45, '#fff2b0');
		g.addColorStop(0.55, '#e0b23c');
		g.addColorStop(1, '#c8962a');
		c.fillStyle = g;
		c.fillRect(0, 0, S, S);
		c.fillStyle = 'rgba(120,80,10,0.35)';
		c.fillRect(0, 0, 14, S);
		c.fillRect(S - 14, 0, 14, S);
		c.fillRect(0, S - 16, S, 16);
		c.fillStyle = 'rgba(90,60,10,0.25)';
		c.fillRect(60, 70, 136, 110);
	},
	// 14: 神社の朱塗りの柱と白壁
	(c) => {
		c.fillStyle = '#fbf6ec';
		c.fillRect(0, 0, S, S);
		c.fillStyle = '#e8432c';
		c.fillRect(0, 0, 30, S);
		c.fillRect(S - 30, 0, 30, S);
		c.fillRect(0, 30, S, 20);
		c.fillRect(0, 160, S, 18);
		c.fillStyle = '#f2c230';
		c.fillRect(0, 50, S, 6);
		c.fillStyle = '#b52a1c';
		c.fillRect(0, S - 18, S, 18);
		noise(c, 0, 0, S, S, 0.08, 43);
	},
	// 15: 檜皮葺 (茶色の屋根)
	(c) => {
		c.fillStyle = '#7a4a2a';
		c.fillRect(0, 0, S, S);
		for (let y = 0; y < S; y += 10) {
			c.fillStyle = y % 20 ? 'rgba(0,0,0,0.18)' : 'rgba(255,220,180,0.12)';
			c.fillRect(0, y, S, 5);
		}
		noise(c, 0, 0, S, S, 0.2, 47);
	},
];

// 瓦: 縦の筋 (丸瓦) と横の段
function kawara(c, light, dark, seed, step = 22) {
	c.fillStyle = dark;
	c.fillRect(0, 0, S, S);
	for (let x = 0; x < S; x += step) {
		const g = c.createLinearGradient(x, 0, x + step, 0);
		g.addColorStop(0, dark);
		g.addColorStop(0.45, light);
		g.addColorStop(1, dark);
		c.fillStyle = g;
		c.fillRect(x, 0, step, S);
	}
	c.fillStyle = 'rgba(0,0,0,0.25)';
	for (let y = 0; y < S; y += 32) c.fillRect(0, y, S, 3);
	noise(c, 0, 0, S, S, 0.12, seed);
}

export function createAtlas() {
	const canvas = document.createElement('canvas');
	canvas.width = canvas.height = S * 4;
	const ctx = canvas.getContext('2d');
	cells.forEach((draw, i) => {
		ctx.save();
		ctx.translate((i % 4) * S, Math.floor(i / 4) * S);
		ctx.beginPath();
		ctx.rect(0, 0, S, S);
		ctx.clip();
		draw(ctx);
		ctx.restore();
	});
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	tex.flipY = false;
	tex.minFilter = LinearMipmapLinearFilter;
	tex.anisotropy = 8;
	return tex;
}
