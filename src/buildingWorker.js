// 建物ジオメトリの生成をメインスレッドから切り離す
import { parseChunk, buildChunkGeometry } from './buildingMesh.js';

self.onmessage = (e) => {
	const { id, buffer, ox, oz, detail } = e.data;
	const list = parseChunk(buffer, ox, oz);
	const arrays = buildChunkGeometry(list, detail);
	self.postMessage({ id, arrays }, Object.values(arrays).map((a) => a.buffer));
};
