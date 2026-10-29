// 建物ジオメトリの生成をメインスレッドから切り離す
import { parseChunk, buildChunkGeometry } from './buildingMesh.js';

self.onmessage = (e) => {
	const { id, buffer, ox, oz, size, detail, landmarks, era } = e.data;
	const list = parseChunk(buffer, ox, oz);
	const bounds = { x0: ox, x1: ox + size, z0: oz, z1: oz + size };
	const arrays = buildChunkGeometry(list, detail, landmarks, bounds, era);
	self.postMessage({ id, arrays }, Object.values(arrays).map((a) => a.buffer));
};
