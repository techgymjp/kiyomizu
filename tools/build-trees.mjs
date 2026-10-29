// 国土地理院ベクトルタイル (道路中心線) から、幅の広い道路の両側に街路樹を並べたデータを作る
//
//   node tools/build-trees.mjs
//
// 出力: public/trees/{cx}_{cz}.bin (建物と同じ 1km チャンク)
//   'KYT1', 本数 uint32, 以降 1本ごとに x int16, z int16 (0.1m 単位、チャンク原点から), 種類 uint8, 予備 uint8
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { VectorTile } from '@mapbox/vector-tile';
import Pbf from 'pbf';
import { geoToWorld, tileXToLon, tileYToLat } from '../src/geo.js';
import { parseChunk } from '../src/buildingMesh.js';

const run = promisify(execFile);
const CACHE = 'tools/.cache';
const OUT = 'public/trees';
const CHUNK = 1000;
const Z = 16;
// 地形の詳細範囲と同じ (z12 の 3591..3593, 1621..1623)
const X0 = 3591 * 16, X1 = 3594 * 16, Y0 = 1621 * 16, Y1 = 1624 * 16;
// 道幅ごとの、中心線から木までの距離と間隔
const WIDTH = { '19.5m以上': { off: 13, step: 11 }, '13m-19.5m': { off: 8.5, step: 12 } };

async function download(url) {
	const file = join(CACHE, url.replace(/^https:\/\//, ''));
	if (!existsSync(file)) {
		mkdirSync(dirname(file), { recursive: true });
		try {
			await run('curl', ['-sSf', '--retry', '3', '-o', file, url]);
		} catch {
			writeFileSync(file, '');
		}
	}
	return readFileSync(file);
}

// 建物の中に木を置かないよう、建物データを読み込む
const buildingCache = new Map();
function buildingsAt(x, z) {
	const key = `${Math.floor(x / CHUNK)}_${Math.floor(z / CHUNK)}`;
	if (!buildingCache.has(key)) {
		const file = `public/buildings/${key}.bin`;
		let list = [];
		if (existsSync(file)) {
			const buf = readFileSync(file);
			const [cx, cz] = key.split('_').map(Number);
			list = parseChunk(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), cx * CHUNK, cz * CHUNK);
		}
		buildingCache.set(key, list);
	}
	return buildingCache.get(key);
}
function insideBuilding(x, z) {
	for (const b of buildingsAt(x, z)) {
		if (x < b.minX - 1.5 || x > b.maxX + 1.5 || z < b.minZ - 1.5 || z > b.maxZ + 1.5) continue;
		let inside = false;
		const r = b.ring, n = r.length / 2;
		for (let i = 0, j = n - 1; i < n; j = i++) {
			const xi = r[i * 2], zi = r[i * 2 + 1], xj = r[j * 2], zj = r[j * 2 + 1];
			if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
		}
		if (inside) return true;
	}
	return false;
}

const chunks = new Map();
const used = new Set(); // 近すぎる木を除く (2m 格子)
let roads = 0;

const tiles = [];
for (let x = X0; x < X1; x++) for (let y = Y0; y < Y1; y++) tiles.push([x, y]);
console.log(`${tiles.length} tiles`);
let done = 0;
// 8 本ずつ並行してダウンロード
for (let i = 0; i < tiles.length; i += 8) {
	const batch = tiles.slice(i, i + 8);
	const bufs = await Promise.all(batch.map(([x, y]) => download(`https://cyberjapandata.gsi.go.jp/xyz/optimal_bvmap-v1/${Z}/${x}/${y}.pbf`)));
	batch.forEach(([tx, ty], k) => {
		const buf = bufs[k];
		if (!buf.length) return;
		const layer = new VectorTile(new Pbf(buf)).layers.RdCL;
		if (!layer) return;
		for (let f = 0; f < layer.length; f++) {
			const feat = layer.feature(f);
			const w = WIDTH[feat.properties.vt_rnkwidth];
			if (!w) continue;
			roads++;
			for (const line of feat.loadGeometry()) {
				const pts = line.map((p) => geoToWorld(tileYToLat(ty + p.y / layer.extent, Z), tileXToLon(tx + p.x / layer.extent, Z), 0));
				let carry = 0;
				for (let s = 0; s < pts.length - 1; s++) {
					const a = pts[s], b = pts[s + 1];
					const len = Math.hypot(b.x - a.x, b.z - a.z);
					if (len < 0.01) continue;
					const ux = (b.x - a.x) / len, uz = (b.z - a.z) / len;
					for (let d = carry; d < len; d += w.step) {
						for (const side of [-1, 1]) {
							const x = a.x + ux * d - uz * w.off * side, z = a.z + uz * d + ux * w.off * side;
							const key = `${Math.round(x / 2)},${Math.round(z / 2)}`;
							if (used.has(key) || insideBuilding(x, z)) continue;
							used.add(key);
							const ck = `${Math.floor(x / CHUNK)}_${Math.floor(z / CHUNK)}`;
							if (!chunks.has(ck)) chunks.set(ck, []);
							// 種類: 0=イチョウ 1=モミジ 2=ケヤキ (通りごとにだいたい揃える)
							const kind = Math.abs(Math.floor(feat.properties.vt_drworder ?? f)) % 3;
							chunks.get(ck).push([x, z, Math.random() < 0.8 ? kind : (kind + 1) % 3]);
						}
					}
					carry = (carry - len) % w.step;
					if (carry < 0) carry += w.step;
				}
			}
		}
	});
	done += batch.length;
	if (done % 400 < 8) console.log(`${done} / ${tiles.length}`);
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
let total = 0, bytes = 0;
const index = [];
for (const [key, list] of chunks) {
	const [cx, cz] = key.split('_').map(Number);
	const buf = Buffer.alloc(8 + list.length * 6);
	buf.write('KYT1', 0);
	buf.writeUInt32LE(list.length, 4);
	list.forEach(([x, z, kind], i) => {
		const o = 8 + i * 6;
		buf.writeInt16LE(Math.round((x - cx * CHUNK) * 10), o);
		buf.writeInt16LE(Math.round((z - cz * CHUNK) * 10), o + 2);
		buf.writeUInt8(kind, o + 4);
	});
	writeFileSync(join(OUT, `${key}.bin`), buf);
	total += list.length;
	bytes += buf.length;
	index.push(key);
}
writeFileSync(join(OUT, 'index.json'), JSON.stringify(index));
console.log(`roads: ${roads}, trees: ${total}, ${(bytes / 1e6).toFixed(2)} MB`);
