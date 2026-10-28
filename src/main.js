import {
	WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Fog, Color,
	Vector3, Raycaster, MathUtils, ACESFilmicToneMapping, SRGBColorSpace,
} from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { Terrain } from './terrain.js';
import { City } from './city.js';
import { Glider, MAX_JET } from './glider.js';
import { Balloons, Thermals } from './balloons.js';
import { SPOTS, THERMALS } from './spots.js';
import { geoToWorld, worldToGeo, lonToTileX, latToTileY } from './geo.js';
import { loadImage } from './loader.js';
import { Sound } from './audio.js';

const $ = (id) => document.getElementById(id);
const JET_PER_BALLOON = 5;
// 清水の舞台 (本堂の舞台の西端) と飛び出す向き
const START = { lat: 34.99478, lon: 135.78478, height: 128, heading: 245 };

// ---------- 設定 ----------
const settings = {
	quality: localStorage.getItem('kiyomizu-quality') || (matchMedia('(pointer: coarse)').matches ? 'low' : 'high'),
	invert: localStorage.getItem('kiyomizu-invert') === '1',
};
$('opt-quality').value = settings.quality;
$('opt-invert').checked = settings.invert;
$('opt-quality').addEventListener('change', (e) => {
	localStorage.setItem('kiyomizu-quality', e.target.value);
	location.reload();
});
$('opt-invert').addEventListener('change', (e) => {
	settings.invert = e.target.checked;
	localStorage.setItem('kiyomizu-invert', settings.invert ? '1' : '0');
});

// ---------- 描画 ----------
const canvas = $('view');
const renderer = new WebGLRenderer({ canvas, antialias: true, logarithmicDepthBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, settings.quality === 'high' ? 2 : 1.25));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = SRGBColorSpace;
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.9;

const scene = new Scene();
const haze = new Color(0xc4d6e6);
scene.fog = new Fog(haze, 4000, 26000);
scene.background = haze;

const camera = new PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 60000);

const sky = new Sky();
sky.scale.setScalar(50000);
const sun = new Vector3().setFromSphericalCoords(1, MathUtils.degToRad(62), MathUtils.degToRad(215));
sky.material.uniforms.sunPosition.value.copy(sun);
sky.material.uniforms.turbidity.value = 4;
sky.material.uniforms.rayleigh.value = 1.2;
sky.material.uniforms.mieCoefficient.value = 0.004;
sky.material.uniforms.mieDirectionalG.value = 0.8;
sky.material.fog = false;
scene.add(sky);

scene.add(new HemisphereLight(0xdfeeff, 0x6b604a, 1.6));
const sunLight = new DirectionalLight(0xfff2dd, 2.2);
sunLight.position.copy(sun).multiplyScalar(1000);
scene.add(sunLight);

addEventListener('resize', () => {
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(innerWidth, innerHeight);
});

// ---------- ワールド ----------
const terrain = new Terrain(scene);
const glider = new Glider();
scene.add(glider.object);
const sound = new Sound();
let city = null;
let balloons = null;
let thermals = null;

const startPos = new Vector3();
const raycaster = new Raycaster();
const tmpV = new Vector3();
const geo = {};

// ---------- 入力 ----------
const keys = new Set();
const touch = { x: 0, y: 0, jet: false };
addEventListener('keydown', (e) => {
	if (e.target.tagName === 'INPUT') return;
	keys.add(e.code);
	if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
	if (e.code === 'KeyC') toggleCamera();
	if (e.code === 'KeyM') sound.setMuted(!sound.muted);
	if (e.code === 'KeyP' || e.code === 'Escape') togglePause();
	if (e.code === 'Space' && state === 'ready') jump();
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());

function readInput() {
	const k = (...codes) => codes.some((c) => keys.has(c));
	let pitch = (k('ArrowUp', 'KeyW') ? 1 : 0) - (k('ArrowDown', 'KeyS') ? 1 : 0);
	let roll = (k('ArrowRight', 'KeyD') ? 1 : 0) - (k('ArrowLeft', 'KeyA') ? 1 : 0);
	pitch += -touch.y;
	roll += touch.x;
	if (settings.invert) pitch = -pitch;
	return {
		pitch: MathUtils.clamp(pitch, -1, 1),
		roll: MathUtils.clamp(roll, -1, 1),
		jet: k('Space', 'ShiftLeft', 'ShiftRight') || touch.jet,
	};
}

// タッチ操作
const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
(function setupTouch() {
	const stick = $('stick'), knob = $('stick-knob');
	let id = null;
	const move = (e) => {
		const r = stick.getBoundingClientRect();
		const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
		let dx = (e.clientX - cx) / (r.width / 2), dy = (e.clientY - cy) / (r.height / 2);
		const len = Math.hypot(dx, dy);
		if (len > 1) { dx /= len; dy /= len; }
		touch.x = dx;
		touch.y = dy;
		knob.style.transform = `translate(${dx * 40}px, ${dy * 40}px)`;
	};
	stick.addEventListener('pointerdown', (e) => { id = e.pointerId; stick.setPointerCapture(id); move(e); });
	stick.addEventListener('pointermove', (e) => { if (e.pointerId === id) move(e); });
	const end = (e) => {
		if (e.pointerId !== id) return;
		id = null;
		touch.x = touch.y = 0;
		knob.style.transform = '';
	};
	stick.addEventListener('pointerup', end);
	stick.addEventListener('pointercancel', end);
	const jetBtn = $('touch-jet');
	jetBtn.addEventListener('pointerdown', (e) => {
		e.preventDefault();
		if (state === 'ready') jump();
		touch.jet = true;
	});
	const jetOff = () => { touch.jet = false; };
	jetBtn.addEventListener('pointerup', jetOff);
	jetBtn.addEventListener('pointercancel', jetOff);
	jetBtn.addEventListener('pointerleave', jetOff);
	$('touch-cam').addEventListener('pointerdown', (e) => { e.preventDefault(); toggleCamera(); });
	canvas.addEventListener('pointerdown', () => { if (state === 'ready') jump(); });
})();

// ---------- カメラ ----------
let cameraMode = 'pilot';
const chasePos = new Vector3();
function toggleCamera() {
	cameraMode = cameraMode === 'pilot' ? 'chase' : 'pilot';
	chasePos.copy(camera.position);
}

function updateCamera(dt) {
	const head = glider.object.getObjectByName('pilotHead');
	const body = glider.object.getObjectByName('pilotBody');
	if (cameraMode === 'pilot') {
		head.visible = body.visible = false;
		glider.object.updateMatrixWorld();
		camera.position.set(0, 0.05, -0.15).applyMatrix4(glider.object.matrixWorld);
		camera.quaternion.copy(glider.object.quaternion);
		// 機首方向を少し見下ろす
		camera.rotateX(-0.12);
	} else {
		head.visible = body.visible = true;
		const f = glider.forward(tmpV);
		const desired = glider.position.clone().addScaledVector(f, -16).add(new Vector3(0, 5, 0));
		chasePos.lerp(desired, Math.min(1, dt * 4));
		camera.position.copy(chasePos);
		camera.up.set(0, 1, 0);
		camera.lookAt(glider.position.clone().addScaledVector(f, 10));
	}
}

// ---------- ゲーム状態 ----------
let state = 'loading'; // loading, title, ready, flying, paused, over
let flight = null;
let titleTime = 0;

function newFlight() {
	return { distance: 0, time: 0, checkpoints: [], grace: 1.2, lastVario: 0 };
}

function placeOnStage() {
	glider.reset(startPos, START.heading * MathUtils.DEG2RAD);
	glider.gamma = 0;
	glider.speed = 0;
	glider.syncObject();
	balloons.reset();
	flight = newFlight();
	updateHud();
}

function startGame() {
	sound.init();
	hideScreens();
	$('hud').classList.remove('hidden');
	if (isTouch) $('touch').classList.remove('hidden');
	placeOnStage();
	state = 'ready';
	cameraMode = 'pilot';
	$('hint').textContent = isTouch ? '画面をタップで飛び降りる！' : 'スペースキーで飛び降りる！';
}

function jump() {
	if (state !== 'ready') return;
	sound.init();
	glider.reset(startPos, START.heading * MathUtils.DEG2RAD);
	state = 'flying';
	$('hint').textContent = '';
	showMessage('えいっ！');
}

function endGame(title, reason) {
	state = 'over';
	sound.crash();
	sound.update(0, false, false);
	$('touch').classList.add('hidden');
	const dist = flight.distance / 1000;
	$('result-title').textContent = title;
	$('result-reason').textContent = reason;
	$('result-cp').textContent = `${flight.checkpoints.length}`;
	$('result-dist').textContent = `${dist.toFixed(2)} km`;
	$('result-time').textContent = formatTime(flight.time);
	$('result-spots').textContent = flight.checkpoints.length
		? `通過: ${flight.checkpoints.join(' → ')}`
		: 'アドバルーンは割れなかった…';
	const rank = rankOf(flight.checkpoints.length, flight.distance);
	$('result-rank').textContent = rank <= 10 ? `ランキング ${rank} 位に入りました！` : '';
	$('result-name').value = localStorage.getItem('kiyomizu-name') || '';
	$('btn-save').disabled = false;
	$('btn-save').textContent = '記録する';
	setTimeout(() => showScreen('result'), 1200);
}

function togglePause() {
	if (state === 'flying') {
		state = 'paused';
		showScreen('pause');
		sound.update(0, false, false);
	} else if (state === 'paused') {
		state = 'flying';
		hideScreens();
	}
}

// ---------- 画面 ----------
function showScreen(id) {
	hideScreens();
	$(id).classList.remove('hidden');
}
function hideScreens() {
	document.querySelectorAll('.screen').forEach((s) => s.classList.add('hidden'));
}
let messageTimer = 0;
function showMessage(text, sec = 2.2) {
	const el = $('message');
	el.textContent = text;
	el.classList.add('show');
	clearTimeout(messageTimer);
	messageTimer = setTimeout(() => el.classList.remove('show'), sec * 1000);
}

$('btn-start').addEventListener('click', startGame);
$('btn-retry').addEventListener('click', startGame);
$('btn-resume').addEventListener('click', togglePause);
$('btn-howto').addEventListener('click', () => showScreen('howto'));
$('btn-ranking').addEventListener('click', () => { renderRanking(); showScreen('ranking'); });
$('btn-to-title').addEventListener('click', toTitle);
document.querySelectorAll('.close').forEach((b) => b.addEventListener('click', () => showScreen('title')));
$('btn-save').addEventListener('click', () => {
	const name = $('result-name').value.trim() || '名無しの参拝者';
	localStorage.setItem('kiyomizu-name', name);
	saveRanking({ name, cp: flight.checkpoints.length, dist: flight.distance, date: Date.now() });
	$('btn-save').disabled = true;
	$('btn-save').textContent = '記録しました';
});
$('btn-share').addEventListener('click', () => {
	const text = `清水の舞台から飛び降りるつもりで、京都の空を ${(flight.distance / 1000).toFixed(2)}km 飛んでチェックポイントを ${flight.checkpoints.length} 個通過した！`;
	const url = location.href.split('#')[0].split('?')[0];
	open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent('清水の舞台から飛び降りるつもり')}`, '_blank');
});

function toTitle() {
	state = 'title';
	$('hud').classList.add('hidden');
	$('touch').classList.add('hidden');
	showScreen('title');
}

// ---------- ランキング (localStorage) ----------
function loadRanking() {
	try {
		return JSON.parse(localStorage.getItem('kiyomizu-ranking') || '[]');
	} catch {
		return [];
	}
}
function sortRanking(list) {
	return list.sort((a, b) => b.cp - a.cp || b.dist - a.dist);
}
function rankOf(cp, dist) {
	return loadRanking().filter((r) => r.cp > cp || (r.cp === cp && r.dist > dist)).length + 1;
}
function saveRanking(entry) {
	const list = sortRanking([...loadRanking(), entry]).slice(0, 10);
	try {
		localStorage.setItem('kiyomizu-ranking', JSON.stringify(list));
	} catch {
		// 保存できない環境では何もしない
	}
}
function renderRanking() {
	const body = $('ranking-body');
	const list = loadRanking();
	body.innerHTML = '';
	if (!list.length) {
		body.innerHTML = '<tr><td colspan="5">まだ記録がありません</td></tr>';
		return;
	}
	list.forEach((r, i) => {
		const tr = document.createElement('tr');
		const d = new Date(r.date);
		[`${i + 1}`, r.name, `${r.cp}`, `${(r.dist / 1000).toFixed(2)} km`, `${d.getMonth() + 1}/${d.getDate()}`].forEach((t, j) => {
			const td = document.createElement('td');
			td.textContent = t;
			if (j === 2 || j === 3) td.className = 'num';
			tr.appendChild(td);
		});
		body.appendChild(tr);
	});
}

// ---------- HUD ----------
function formatTime(sec) {
	const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
	return `${m}:${String(s).padStart(2, '0')}`;
}

let hudAgl = 0;
function updateHud() {
	worldToGeo(glider.position, geo);
	const ground = terrain.heightAt(geo.lat, geo.lon);
	hudAgl = geo.height - ground;
	$('hud-agl').textContent = Math.max(0, hudAgl).toFixed(0);
	$('hud-alt').textContent = geo.height.toFixed(0);
	$('hud-speed').textContent = (glider.speed * 3.6).toFixed(0);
	const vario = glider.velocity.y;
	$('hud-vario').textContent = `${vario >= 0 ? '+' : ''}${vario.toFixed(1)}`;
	$('hud-cp').textContent = `${flight.checkpoints.length}`;
	$('hud-cp-total').textContent = `/ ${SPOTS.length}`;
	$('hud-dist').textContent = (flight.distance / 1000).toFixed(2);
	$('hud-time').textContent = formatTime(flight.time);
	$('jet-sec').textContent = glider.jetFuel.toFixed(1);
	$('jet-fill').style.width = `${(glider.jetFuel / MAX_JET) * 100}%`;
	$('jet').classList.toggle('active', glider.jetting);
	$('stall').classList.toggle('hidden', !(glider.stalled && state === 'flying'));

	const near = balloons.nearest(glider.position);
	if (near) {
		const p = near.item.group.position;
		const bearing = Math.atan2(p.x - glider.position.x, -(p.z - glider.position.z));
		const rel = MathUtils.radToDeg(bearing - glider.yaw);
		const dy = p.y - glider.position.y;
		$('target-arrow').style.transform = `rotate(${rel}deg)`;
		$('target-name').textContent = `🎈 ${near.item.spot.name}`;
		$('target-info').textContent = `${near.distance >= 1000 ? `${(near.distance / 1000).toFixed(2)}km` : `${near.distance.toFixed(0)}m`}  ${dy >= 0 ? '↑' : '↓'}${Math.abs(dy).toFixed(0)}m`;
	}
}

// ---------- ミニマップ ----------
const MAP_Z = 13;
const mapCanvas = document.createElement('canvas');
let mapOrigin = { x: 0, y: 0 };
async function buildMinimapBase() {
	const b = terrain.bounds();
	const x0 = Math.floor(lonToTileX(b.west, MAP_Z)), x1 = Math.floor(lonToTileX(b.east, MAP_Z) - 1e-9);
	const y0 = Math.floor(latToTileY(b.north, MAP_Z)), y1 = Math.floor(latToTileY(b.south, MAP_Z) - 1e-9);
	mapOrigin = { x: x0 * 256, y: y0 * 256 };
	mapCanvas.width = (x1 - x0 + 1) * 256;
	mapCanvas.height = (y1 - y0 + 1) * 256;
	const ctx = mapCanvas.getContext('2d');
	ctx.fillStyle = '#e8e4d8';
	ctx.fillRect(0, 0, mapCanvas.width, mapCanvas.height);
	const jobs = [];
	for (let x = x0; x <= x1; x++) {
		for (let y = y0; y <= y1; y++) {
			jobs.push(loadImage(`https://cyberjapandata.gsi.go.jp/xyz/pale/${MAP_Z}/${x}/${y}.png`, () => 1e9)
				.then((bmp) => ctx.drawImage(bmp, (x - x0) * 256, (y - y0) * 256))
				.catch(() => {}));
		}
	}
	await Promise.all(jobs);
}

function drawMinimap() {
	const mm = $('minimap');
	const ctx = mm.getContext('2d');
	const W = mm.width;
	const toMap = (lat, lon) => ({
		x: lonToTileX(lon, MAP_Z) * 256 - mapOrigin.x,
		y: latToTileY(lat, MAP_Z) * 256 - mapOrigin.y,
	});
	worldToGeo(glider.position, geo);
	const me = toMap(geo.lat, geo.lon);
	const scale = 0.6;
	ctx.save();
	ctx.clearRect(0, 0, W, W);
	ctx.translate(W / 2, W / 2);
	ctx.rotate(-glider.yaw); // 進行方向を上に
	ctx.scale(scale, scale);
	ctx.translate(-me.x, -me.y);
	ctx.drawImage(mapCanvas, 0, 0);
	for (const it of balloons.items) {
		const p = toMap(it.spot.lat, it.spot.lon);
		ctx.beginPath();
		ctx.arc(p.x, p.y, it.popped ? 4 : 7, 0, Math.PI * 2);
		ctx.fillStyle = it.popped ? 'rgba(120,120,120,0.7)' : '#e8382f';
		ctx.fill();
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#fff';
		ctx.stroke();
	}
	ctx.restore();
	// 自機
	ctx.save();
	ctx.translate(W / 2, W / 2);
	ctx.beginPath();
	ctx.moveTo(0, -12);
	ctx.lineTo(8, 9);
	ctx.lineTo(0, 4);
	ctx.lineTo(-8, 9);
	ctx.closePath();
	ctx.fillStyle = '#1b3fa6';
	ctx.fill();
	ctx.strokeStyle = '#fff';
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.restore();
	// 北
	ctx.save();
	ctx.translate(W / 2, W / 2);
	ctx.rotate(-glider.yaw);
	ctx.fillStyle = '#d7262e';
	ctx.font = 'bold 18px sans-serif';
	ctx.textAlign = 'center';
	ctx.fillText('N', 0, -W / 2 + 22);
	ctx.restore();
}

// ---------- 飛行中の判定 ----------
const down = new Vector3(0, -1, 0);
function checkCollision(prev) {
	worldToGeo(glider.position, geo);
	const ground = terrain.heightAt(geo.lat, geo.lon);
	if (geo.height <= ground + 0.8) {
		return { title: '着陸！', reason: '地面に降り立ちました。' };
	}
	if (flight.grace > 0 || !city) return null;
	// 進行方向と真下に建物があるか
	const seg = tmpV.copy(glider.position).sub(prev);
	const len = seg.length();
	if (len > 0) {
		raycaster.set(prev, seg.normalize());
		raycaster.near = 0;
		raycaster.far = len + 1.5;
		if (city.raycast(raycaster)) return { title: 'ドーン！', reason: '建物に着地しました。' };
	}
	raycaster.set(glider.position, down);
	raycaster.far = 1.2;
	if (city.raycast(raycaster)) return { title: '屋根に着地！', reason: '建物の屋根に降り立ちました。' };
	const b = terrain.bounds();
	if (geo.lat > b.north || geo.lat < b.south || geo.lon < b.west || geo.lon > b.east) {
		return { title: '京都の外へ…', reason: '京都盆地を飛び出してしまいました。' };
	}
	return null;
}

// ---------- メインループ ----------
let last = performance.now();
let hudTimer = 0;
let terrainTimer = 0;
const prev = new Vector3();

let frames = 0;
function loop(now) {
	requestAnimationFrame(loop);
	frames++;
	const dt = Math.min(0.05, (now - last) / 1000);
	last = now;
	const time = now / 1000;

	if (state === 'loading' || state === 'title') {
		// タイトル画面: 清水寺の周りをゆっくり回る
		titleTime += dt;
		const a = titleTime * 0.05;
		camera.position.set(startPos.x + Math.sin(a) * 350, startPos.y + 120, startPos.z + Math.cos(a) * 350);
		camera.up.set(0, 1, 0);
		camera.lookAt(startPos.x, startPos.y - 20, startPos.z);
	} else if (state === 'ready') {
		updateCamera(dt);
		// 舞台の上で揺れる
		camera.position.y += Math.sin(time * 2) * 0.03;
	} else if (state === 'flying') {
		const input = readInput();
		prev.copy(glider.position);
		const lift = thermals ? thermals.liftAt(glider.position) : 0;
		glider.update(dt, input, lift);
		flight.time += dt;
		flight.grace -= dt;
		flight.distance += Math.hypot(glider.position.x - prev.x, glider.position.z - prev.z);

		const popped = balloons.update(dt, time, glider.position, camera);
		for (const it of popped) {
			flight.checkpoints.push(it.spot.name);
			glider.addJet(JET_PER_BALLOON);
			sound.pop();
			showMessage(`チェックポイント！\n${it.spot.name}\nジェット +${JET_PER_BALLOON}秒`);
		}
		const hit = checkCollision(prev);
		if (hit) endGame(hit.title, hit.reason);
		updateCamera(dt);
	} else if (state === 'over') {
		updateCamera(dt);
	}

	if (state !== 'flying' && balloons) balloons.update(dt, time, new Vector3(1e9, 0, 0), camera);
	if (thermals) thermals.update(time);
	sound.update(glider.speed, glider.jetting, state === 'flying');

	terrainTimer -= dt;
	if (terrainTimer <= 0) {
		terrainTimer = 0.5;
		terrain.update(state === 'title' || state === 'loading' ? startPos : glider.position);
	}
	if (city) {
		camera.updateMatrixWorld();
		city.update();
	}

	if (balloons && (state === 'flying' || state === 'ready')) {
		hudTimer -= dt;
		if (hudTimer <= 0) {
			hudTimer = 0.1;
			updateHud();
			drawMinimap();
		}
	}

	renderer.render(scene, camera);
}

// ---------- 起動 ----------
async function init() {
	geoToWorld(START.lat, START.lon, START.height, startPos);
	requestAnimationFrame(loop);
	city = new City(scene, camera, renderer, { quality: settings.quality });
	await terrain.init((p) => {
		$('load-fill').style.width = `${(p * 100).toFixed(0)}%`;
	});
	// 舞台の位置を地表より上に
	const ground = terrain.heightAt(START.lat, START.lon);
	if (START.height < ground + 10) geoToWorld(START.lat, START.lon, ground + 10, startPos);

	balloons = new Balloons(scene, SPOTS, terrain);
	thermals = new Thermals(scene, THERMALS, terrain);
	flight = newFlight();
	await buildMinimapBase();

	$('loading').classList.add('hidden');
	$('title-buttons').classList.remove('hidden');
	state = 'title';
}

init().catch((e) => {
	console.error(e);
	$('load-text').textContent = `読み込みに失敗しました: ${e.message}`;
});

// デバッグ用
window.__kiyomizu = { glider, terrain, get state() { return state; }, get flight() { return flight; }, get frames() { return frames; }, city: () => city, camera, startGame, jump };
