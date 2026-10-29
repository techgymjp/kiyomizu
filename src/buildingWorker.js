// 建物ジオメトリの生成をメインスレッドから切り離す
import { parseChunk, buildChunkGeometry } from './buildingMesh.js';

self.onmessage = (e) => {
	const { id, buffer, ox, oz, size, detail, landmarks, era } = e.data;
	const list = parseChunk(buffer, ox, oz);
	const bounds = { x0: ox, x1: ox + size, z0: oz, z1: oz + size };
	const arrays = buildChunkGeometry(list, detail, landmarks, bounds, era);
	// 包み込む球もここで計算しておく (メインスレッドで計算すると一瞬止まる)
	const p = arrays.position;
	let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
	for (let i = 0; i < p.length; i += 3) {
		const x = p[i], y = p[i + 1], z = p[i + 2];
		if (x < x0) x0 = x; if (x > x1) x1 = x;
		if (y < y0) y0 = y; if (y > y1) y1 = y;
		if (z < z0) z0 = z; if (z > z1) z1 = z;
	}
	const sphere = p.length
		? [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, Math.hypot(x1 - x0, y1 - y0, z1 - z0) / 2]
		: [0, 0, 0, 0];
	self.postMessage({ id, arrays, sphere }, Object.values(arrays).map((a) => a.buffer));
};
