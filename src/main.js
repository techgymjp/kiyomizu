import {
	WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Fog, Color,
	Vector3, MathUtils, ACESFilmicToneMapping, SRGBColorSpace, PCFSoftShadowMap,
	WebGLRenderTarget, OrthographicCamera, Mesh, PlaneGeometry, MeshBasicMaterial,
} from 'three';
import { Terrain } from './terrain.js';
import { Buildings } from './buildings.js';
import { Glider, MAX_JET } from './glider.js';
import { Balloons, Thermals } from './balloons.js';
import { SPOTS, THERMALS } from './spots.js';
import { geoToWorld, worldToGeo, lonToTileX, latToTileY } from './geo.js';
import { loadImage } from './loader.js';
import { Sound } from './audio.js';
import { createSky } from './sky.js';
import { Fireworks } from './fireworks.js';
import { People } from './people.js';
import { buildStage, STAGE, START_POINT } from './stage.js';
import { Oni } from './oni.js';
import { buildProps } from './props.js';
import { LANDMARK_SPECS } from './landmarkSpecs.js';

const $ = (id) => document.getElementById(id);
const TURBO_SEC = 5; // ターボ1つぶんの噴射時間
const START_TURBOS = 1;
// シェアするページ (ゲームの紹介記事)
const SHARE_URL = 'https://techgym.jp/column/claude-code-game-kiyomizu/';

// ---------- 設定 ----------
const settings = {
	// 初期設定は「かるい (影なし)」。以前の「きれい」の保存値は引き継がない (保存名を変更)
	quality: localStorage.getItem('kiyomizu-quality2') === 'high' ? 'high' : 'low',
	muted: localStorage.getItem('kiyomizu-muted') === '1',
	era: localStorage.getItem('kiyomizu-era') === 'showa' ? 'showa' : 'now',
};
$('opt-era').value = settings.era;
$('opt-era').addEventListener('change', (e) => {
	localStorage.setItem('kiyomizu-era', e.target.value);
	location.reload();
});
const showaEra = settings.era === 'showa';
if (showaEra) document.body.classList.add('showa');
$('opt-quality').value = settings.quality;
$('opt-mute').checked = settings.muted;
$('opt-quality').addEventListener('change', (e) => {
	localStorage.setItem('kiyomizu-quality2', e.target.value);
	location.reload();
});
$('opt-mute').addEventListener('change', (e) => {
	settings.muted = e.target.checked;
	localStorage.setItem('kiyomizu-muted', settings.muted ? '1' : '0');
	sound.setMuted(settings.muted);
});

// ---------- 描画 ----------
const canvas = $('view');
// スマホは描画の負荷を下げる (解像度・アンチエイリアス・表示距離・人の数・ワイプの更新頻度)
const mobile = matchMedia('(pointer: coarse)').matches;
const renderer = new WebGLRenderer({ canvas, antialias: !mobile, logarithmicDepthBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, settings.quality === 'high' ? 2 : mobile ? 1 : 1.25));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = SRGBColorSpace;
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.autoClear = false;
const shadows = settings.quality === 'high';
renderer.shadowMap.enabled = shadows;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;

const scene = new Scene();
// 秋晴れの澄んだ空気 (遠くだけうっすら青く)
scene.fog = new Fog(new Color(0xa9d4f5), 6000, 32000);

const camera = new PerspectiveCamera(65, innerWidth / innerHeight, 0.1, 60000);
// ワイプは遠くまで描く必要がないので描画距離を短くする
const wipeCamera = new PerspectiveCamera(55, 16 / 10, 0.5, 3500);
// ワイプは低い解像度で別の画像に描き、それを画面に貼る (1フレームおきに更新して軽くする)
const wipeTarget = new WebGLRenderTarget(320, 200);
const overlayScene = new Scene();
const overlayCamera = new OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1);
overlayScene.add(new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: wipeTarget.texture, depthTest: false, depthWrite: false })));

const sun = new Vector3().setFromSphericalCoords(1, MathUtils.degToRad(50), MathUtils.degToRad(320));
const sky = createSky(sun);
scene.add(sky);

scene.add(new HemisphereLight(0xd8ecff, 0x8a7350, 1.9));
const sunLight = new DirectionalLight(0xfff0d8, 2.6);
sunLight.position.copy(sun).multiplyScalar(1000);
scene.add(sunLight);
scene.add(sunLight.target);
if (shadows) {
	sunLight.castShadow = true;
	sunLight.shadow.mapSize.set(2048, 2048);
	const sc = sunLight.shadow.camera;
	sc.left = sc.bottom = -260;
	sc.right = sc.top = 260;
	sc.near = 10;
	sc.far = 3000;
	sunLight.shadow.bias = -0.0004;
	sunLight.shadow.normalBias = 0.6;
}

// 影を落とす範囲を注目点の周りに移動 (影のちらつきを抑えるため 4m 単位で動かす)
function updateSun(focus) {
	const fx = Math.round(focus.x / 4) * 4, fy = Math.round(focus.y / 4) * 4, fz = Math.round(focus.z / 4) * 4;
	sunLight.target.position.set(fx, fy, fz);
	sunLight.position.set(fx, fy, fz).addScaledVector(sun, 1500);
}

let wipeRect = null;
function measureWipe() {
	const r = $('wipe').getBoundingClientRect();
	// 枠線の内側に描く
	wipeRect = r.width ? { x: r.left + 5, y: r.top + 5, w: r.width - 10, h: r.height - 10 } : null;
	if (wipeRect) {
		wipeCamera.aspect = wipeRect.w / wipeRect.h;
		wipeCamera.updateProjectionMatrix();
		// 画面上の大きさの 0.75 倍の解像度で十分
		const res = mobile ? 0.5 : 0.75;
		wipeTarget.setSize(Math.round(wipeRect.w * res), Math.round(wipeRect.h * res));
	}
}
addEventListener('resize', () => {
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(innerWidth, innerHeight);
	measureWipe();
});

// ---------- ワールド ----------
const terrain = new Terrain(scene, { era: settings.era, mobile });
const glider = new Glider();
scene.add(glider.object);
const sound = new Sound();
sound.setMuted(settings.muted);
const fireworks = new Fireworks(scene);
const oni = new Oni(scene);
let buildings = null;
let balloons = null;
let thermals = null;
let people = null;

const startPos = new Vector3(START_POINT.x, STAGE.floor + 1.3, START_POINT.z);
const tmpV = new Vector3();
const geo = {};

// 最初の操作で音を出せるようにする (ブラウザの自動再生制限)
function unlockAudio() {
	const first = !sound.ctx;
	sound.init();
	if (first && (state === 'title' || state === 'loading')) sound.playSong('title');
}
addEventListener('pointerdown', unlockAudio);
addEventListener('keydown', unlockAudio);
document.addEventListener('click', (e) => { if (e.target.closest('button')) sound.click(); });

// ---------- 入力 ----------
const keys = new Set();
const touch = { x: 0, y: 0, jet: false };
addEventListener('keydown', (e) => {
	if (e.target.tagName === 'INPUT') return;
	keys.add(e.code);
	if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
	if (e.code === 'KeyC') toggleCamera();
	if (e.code === 'KeyM') {
		settings.muted = !settings.muted;
		$('opt-mute').checked = settings.muted;
		sound.setMuted(settings.muted);
	}
	if (e.code === 'KeyP' || e.code === 'Escape') togglePause();
	if (e.code === 'Space' && state === 'ready') jump();
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());

// ↑で上昇、↓で下降 (カーソルの向きのまま)
function readInput() {
	const k = (...codes) => codes.some((c) => keys.has(c));
	const pitch = (k('ArrowUp', 'KeyW') ? 1 : 0) - (k('ArrowDown', 'KeyS') ? 1 : 0) - touch.y;
	const roll = (k('ArrowRight', 'KeyD') ? 1 : 0) - (k('ArrowLeft', 'KeyA') ? 1 : 0) + touch.x;
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
let cameraMode = 'chase';
const chasePos = new Vector3();
const chaseUp = new Vector3(0, 1, 0);
const tmpUp = new Vector3();
const lookAt = new Vector3();
const wipePos = new Vector3();
const UP = new Vector3(0, 1, 0);
let chaseInit = false;
function toggleCamera() {
	cameraMode = cameraMode === 'pilot' ? 'chase' : 'pilot';
	chaseInit = false;
}

function setPilotVisible(v) {
	glider.object.getObjectByName('pilotHead').visible = v;
	glider.object.getObjectByName('pilotBody').visible = v;
	glider.object.traverse((o) => { if (o.name === 'centerPole') o.visible = v; });
}

function keepAboveGround(p, margin) {
	worldToGeo(p, geo);
	const g = terrain.heightAt(geo.lat, geo.lon);
	if (geo.height < g + margin) p.y += g + margin - geo.height;
}

function updateCamera(dt) {
	const f = glider.forward(tmpV);
	if (cameraMode === 'pilot') {
		glider.object.updateMatrixWorld();
		camera.position.set(0, 0.1, -0.2).applyMatrix4(glider.object.matrixWorld);
		camera.quaternion.copy(glider.object.quaternion);
		camera.rotateX(-0.12);
	} else {
		// 後方視点: パイロットとハングライダーを斜め後ろ上から
		const back = 7.5 + glider.speed * 0.06;
		const desired = glider.position.clone().addScaledVector(f, -back);
		desired.y += 2.2 - Math.sin(glider.gamma) * 3;
		if (!chaseInit) {
			chasePos.copy(desired);
			chaseInit = true;
		}
		chasePos.lerp(desired, Math.min(1, dt * 5));
		keepAboveGround(chasePos, 2);
		camera.position.copy(chasePos);
		// バンクに少しだけ追従して傾ける
		tmpUp.set(0, 1, 0).applyQuaternion(glider.object.quaternion).lerp(UP, 0.55).normalize();
		chaseUp.lerp(tmpUp, Math.min(1, dt * 4));
		camera.up.copy(chaseUp);
		lookAt.copy(glider.position).addScaledVector(f, 6);
		lookAt.y += 0.8;
		camera.lookAt(lookAt);
	}
	// ワイプ: 前方から自分を撮る (少し横にずらして背景の景色も入れる)
	const right = tmpUp.crossVectors(f, UP).normalize();
	const desiredWipe = glider.position.clone().addScaledVector(f, 6.5).addScaledVector(right, 2.2);
	desiredWipe.y += 0.4;
	wipePos.lerp(desiredWipe, Math.min(1, dt * 8));
	if (wipePos.distanceTo(desiredWipe) > 30) wipePos.copy(desiredWipe);
	keepAboveGround(wipePos, 1);
	wipeCamera.position.copy(wipePos);
	wipeCamera.up.copy(UP);
	wipeCamera.lookAt(glider.position.x, glider.position.y + 0.6, glider.position.z);
}

// ---------- ゲーム状態 ----------
let state = 'loading'; // loading, title, ready, flying, paused, over
let flight = null;
let titleTime = 0;

function newFlight() {
	return { distance: 0, time: 0, checkpoints: [], grace: 1.2, wasJetting: false, inThermal: false, oniDist: Infinity, oniChase: Infinity, chasers: 0, clear: false };
}

function placeOnStage() {
	glider.reset(startPos, START_POINT.heading * MathUtils.DEG2RAD);
	glider.gamma = 0;
	glider.speed = 0;
	glider.jetFuel = START_TURBOS * TURBO_SEC;
	glider.syncObject();
	balloons.reset();
	oni.reset();
	flight = newFlight();
	updateHud();
}

function startGame() {
	sound.init();
	hideScreens();
	$('hud').classList.remove('hidden');
	measureWipe();
	if (isTouch) $('touch').classList.remove('hidden');
	placeOnStage();
	state = 'ready';
	cameraMode = 'chase';
	chaseInit = false;
	wipePos.copy(glider.position);
	sound.playSong('start');
	showMessage('🎌 清水の舞台 🎌\nターボ ×1 で出発！', 2.6);
	$('hint').textContent = isTouch ? '画面をタップで飛び降りる！' : 'スペースキーで飛び降りる！';
}

function jump() {
	if (state !== 'ready') return;
	sound.init();
	glider.reset(startPos, START_POINT.heading * MathUtils.DEG2RAD);
	glider.jetFuel = START_TURBOS * TURBO_SEC;
	state = 'flying';
	$('hint').textContent = '';
	sound.jump();
	sound.playSong('flight');
	showMessage('とうっ！\n清水の舞台から\n飛び降りた！', 2);
}

function endGame(title, reason, clear = false) {
	state = 'over';
	flight.clear = clear;
	sound.stopSong(0.1);
	if (clear) sound.turboGet();
	else sound.crash();
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
	const ranked = clear || (rank <= 10 && (flight.checkpoints.length > 0 || flight.distance > 50));
	$('result-title').classList.toggle('clear', clear);
	$('rank-banner').classList.toggle('hidden', !ranked);
	$('rank-no').textContent = rank;
	$('result-name').value = localStorage.getItem('kiyomizu-name') || '';
	$('btn-save').disabled = false;
	$('btn-save').textContent = '記録する';
	showMessage(title, 1.4);
	setTimeout(() => {
		if (state !== 'over') return;
		showScreen('result');
		if (ranked) {
			// ランキング入り・全制覇: お祝いのファンファーレと花火
			sound.playSong('ranking');
			celebrate();
		} else {
			sound.playSong('gameover');
		}
	}, 1500);
}

// 画面の前方に花火を上げる (音も合わせる)
function launchFireworks(n, big, gap) {
	for (const t of fireworks.show(camera, n, big, gap)) sound.firework(t);
}

function celebrate() {
	launchFireworks(8, true, 0.35);
}

function togglePause() {
	if (state === 'flying') {
		state = 'paused';
		showScreen('pause');
		sound.update(0, {});
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
	el.classList.remove('show');
	void el.offsetWidth; // アニメーションをやり直す
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
	sound.turboGet();
});
$('btn-share').addEventListener('click', () => {
	const text = `清水の舞台から飛び降りるつもりで、紅葉の京都の空を ${(flight.distance / 1000).toFixed(2)}km 飛んでアドバルーンを ${flight.checkpoints.length} 個割った！🎈`;
	const url = SHARE_URL;
	open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent('清水の舞台から飛び降りるつもり')}`, '_blank');
});

function toTitle() {
	state = 'title';
	$('hud').classList.add('hidden');
	$('touch').classList.add('hidden');
	showScreen('title');
	sound.playSong('title');
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
		[['🥇', '🥈', '🥉'][i] ?? `${i + 1}`, r.name, `${r.cp}`, `${(r.dist / 1000).toFixed(2)} km`, `${d.getMonth() + 1}/${d.getDate()}`].forEach((t, j) => {
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

let hudAgl = 999;
function updateHud() {
	worldToGeo(glider.position, geo);
	const ground = terrain.heightAt(geo.lat, geo.lon);
	hudAgl = geo.height - ground;
	$('hud-agl').textContent = Math.max(0, hudAgl).toFixed(0);
	$('hud-alt').textContent = geo.height.toFixed(0);
	$('hud-speed').textContent = (glider.speed * 3.6).toFixed(0);
	const vario = glider.velocity.y;
	const v = $('hud-vario');
	v.textContent = `${vario >= 0 ? '+' : ''}${vario.toFixed(1)}`;
	v.className = `v ${vario > 0.3 ? 'up' : vario < -2 ? 'down' : ''}`;
	$('hud-cp').textContent = `${flight.checkpoints.length}`;
	$('hud-cp-total').textContent = `/ ${SPOTS.length}`;
	$('hud-dist').textContent = (flight.distance / 1000).toFixed(2);
	$('hud-time').textContent = formatTime(flight.time);
	$('turbo-count').textContent = `×${Math.ceil(glider.jetFuel / TURBO_SEC - 1e-6)}`;
	$('turbo-fill').style.width = `${(glider.jetFuel / MAX_JET) * 100}%`;
	$('turbo-fill').style.backgroundSize = `${(MAX_JET / Math.max(glider.jetFuel, 0.01)) * 100}% 100%`;
	$('turbo').classList.toggle('active', glider.jetting);
	$('stall').classList.toggle('hidden', !(glider.stalled && state === 'flying'));

	// 鬼との距離
	const od = flight.oniDist;
	$('oni').classList.toggle('hidden', !Number.isFinite(od));
	if (Number.isFinite(od)) {
		$('oni-dist').textContent = (od >= 1000 ? `${(od / 1000).toFixed(1)}km` : `${od.toFixed(0)}m`)
			+ (flight.chasers ? ` ・追跡中 ${flight.chasers}匹` : '');
		$('oni').classList.toggle('danger', flight.chasers > 0);
	}
	const oc = flight.oniChase;
	$('danger').style.opacity = Number.isFinite(oc) && state === 'flying' ? Math.max(0, Math.min(1, (220 - oc) / 170)) : 0;

	const near = balloons.nearest(glider.position);
	if (near) {
		const p = near.item.group.position;
		const bearing = Math.atan2(p.x - glider.position.x, -(p.z - glider.position.z));
		const rel = MathUtils.radToDeg(bearing - glider.yaw) - 90;
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
	// キャンバスの解像度によらず 220px 相当の座標で描く (スマホで大きく表示しても文字や印がつぶれない)
	const k = mm.width / 220;
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, mm.width, mm.height);
	ctx.setTransform(k, 0, 0, k, 0, 0);
	const W = 220;
	const toMap = (lat, lon) => ({
		x: lonToTileX(lon, MAP_Z) * 256 - mapOrigin.x,
		y: latToTileY(lat, MAP_Z) * 256 - mapOrigin.y,
	});
	worldToGeo(glider.position, geo);
	const me = toMap(geo.lat, geo.lon);
	ctx.save();
	ctx.translate(W / 2, W / 2);
	ctx.rotate(-glider.yaw); // 進行方向を上に
	// スマホは表示が小さいので地図の中身を拡大 (印の大きさはそのまま)
	const zoom = mobile ? 1.15 : 0.6, ms = 0.6 / zoom;
	ctx.scale(zoom, zoom);
	ctx.translate(-me.x, -me.y);
	ctx.drawImage(mapCanvas, 0, 0);
	for (const it of balloons.items) {
		const p = toMap(it.spot.lat, it.spot.lon);
		ctx.beginPath();
		ctx.arc(p.x, p.y, (it.popped ? 5 : 9) * ms, 0, Math.PI * 2);
		ctx.fillStyle = it.popped ? 'rgba(140,140,140,0.7)' : '#ff4b5c';
		ctx.fill();
		ctx.lineWidth = 3 * ms;
		ctx.strokeStyle = '#fff';
		ctx.stroke();
	}
	// 鬼
	ctx.font = `${Math.round(28 * ms)}px sans-serif`;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	for (const o of oni.list) {
		worldToGeo(o.pos, geo);
		const p = toMap(geo.lat, geo.lon);
		ctx.save();
		ctx.translate(p.x, p.y);
		ctx.rotate(glider.yaw);
		if (o.state === 'chase') {
			// 追いかけてくる鬼は赤い丸で囲む
			ctx.beginPath();
			ctx.arc(0, 0, 20 * ms, 0, Math.PI * 2);
			ctx.fillStyle = 'rgba(255,40,40,0.55)';
			ctx.fill();
		}
		ctx.fillText('👹', 0, 0);
		ctx.restore();
	}
	ctx.restore();
	// 自機
	ctx.save();
	ctx.translate(W / 2, W / 2);
	ctx.beginPath();
	ctx.moveTo(0, -14);
	ctx.lineTo(10, 10);
	ctx.lineTo(0, 5);
	ctx.lineTo(-10, 10);
	ctx.closePath();
	ctx.fillStyle = '#2f80ed';
	ctx.fill();
	ctx.strokeStyle = '#fff';
	ctx.lineWidth = 3;
	ctx.stroke();
	ctx.restore();
	// 北
	ctx.save();
	ctx.translate(W / 2, W / 2);
	ctx.rotate(-glider.yaw);
	ctx.fillStyle = '#ff4b5c';
	ctx.font = '900 20px "M PLUS Rounded 1c", sans-serif';
	ctx.textAlign = 'center';
	ctx.fillText('N', 0, -W / 2 + 26);
	ctx.restore();
}

// ---------- 飛行中の判定 ----------
function checkCollision(prev) {
	worldToGeo(glider.position, geo);
	const ground = terrain.heightAt(geo.lat, geo.lon);
	if (geo.height <= ground + 0.8) {
		return { title: '着陸！', reason: '地面に降り立ちました。' };
	}
	if (flight.grace > 0 || !buildings) return null;
	// 前フレームとの間を細かく調べて、建物に入ったか
	const steps = Math.max(1, Math.ceil(prev.distanceTo(glider.position) / 1.5));
	for (let i = 1; i <= steps; i++) {
		tmpV.lerpVectors(prev, glider.position, i / steps);
		if (buildings.hit(tmpV)) {
			const roof = glider.velocity.y < 0 && Math.abs(glider.velocity.y) > Math.hypot(glider.velocity.x, glider.velocity.z) * 0.15;
			return roof
				? { title: '屋根に着地！', reason: '建物の屋根に降り立ちました。' }
				: { title: 'ドーン！', reason: '建物にぶつかってしまいました。' };
		}
	}
	const b = terrain.bounds();
	if (geo.lat > b.north || geo.lat < b.south || geo.lon < b.west || geo.lon > b.east) {
		return { title: '京都の外へ…', reason: '京都盆地を飛び出してしまいました。' };
	}
	return null;
}

function onPop(it) {
	flight.checkpoints.push(it.spot.name);
	glider.addJet(TURBO_SEC);
	sound.pop();
	sound.turboGet();
	launchFireworks(5, false, 0.3);
	sound.cheer();
	if (flight.checkpoints.length >= SPOTS.length) {
		endGame('🏯 全制覇！ 🏯', '京都の名所をすべてめぐりました！ 鬼からも逃げ切った！', true);
		return;
	}
	const unpopped = balloons.items.filter((b) => !b.popped).map((b) => b.base);
	const more = oni.addForCheckpoint(flight.checkpoints.length, glider, unpopped);
	if (more) setTimeout(() => sound.oniLaugh(), 900);
	showMessage(`🎆 チェックポイント！ 🎆\n${it.spot.name}\nターボ +1 🚀${more ? `\n👹 見張りの鬼が増えた！ (${oni.list.length}匹)` : ''}`, 2.6);
}

// 鬼ごっこ: 鬼の動きと、近づいたときの演出
let heartTimer = 0;
function updateOni(dt, active) {
	const r = oni.update(dt, glider, active);
	if (!active) return;
	if (r.spawned) {
		showMessage(`👹 鬼が${r.spawned.length}匹、京都を徘徊中…\n見つからないように！`, 2.6);
	}
	if (r.found.length) {
		sound.oniLaugh();
		showMessage(r.found.length > 1 ? `👹 鬼${r.found.length}匹に見つかった！` : '👹 鬼に見つかった！\n逃げろ〜！', 1.8);
	}
	flight.oniDist = r.nearest;
	flight.oniChase = r.nearestChase;
	flight.chasers = oni.list.filter((o) => o.state === 'chase').length;
	// 追いかけてくる鬼が近いほど速くなる心臓の音
	heartTimer -= dt;
	if (r.nearestChase < 180 && heartTimer <= 0) {
		sound.heartbeat();
		heartTimer = 0.35 + (r.nearestChase / 180) * 0.8;
	}
	if (r.caught) endGame('つかまった！', '鬼に捕まってしまいました… 👹');
}

// ---------- メインループ ----------
let last = performance.now();
let hudTimer = 0;
let terrainTimer = 0;
const prev = new Vector3();

let frames = 0;
const debug = { cam: null };
// 処理ごとの所要時間 (ミリ秒、移動平均)。開発用
const prof = {};
let profT = 0;
function mark(name) {
	const t = performance.now();
	prof[name] = (prof[name] ?? 0) * 0.95 + (t - profT) * 0.05;
	profT = t;
}

function loop(now) {
	requestAnimationFrame(loop);
	frames++;
	profT = performance.now();
	const dt = Math.min(0.05, (now - last) / 1000);
	last = now;
	const time = now / 1000;
	let vario = 0;

	if (debug.cam) {
		camera.position.copy(debug.cam.pos);
		camera.up.set(0, 1, 0);
		camera.lookAt(debug.cam.look);
	} else if (state === 'loading' || state === 'title') {
		// タイトル画面: 清水の舞台の周りをゆっくり回る
		titleTime += dt;
		const a = titleTime * 0.06 + 2.2;
		camera.position.set(startPos.x + Math.sin(a) * 160, startPos.y + 45, startPos.z + Math.cos(a) * 160);
		camera.up.set(0, 1, 0);
		camera.lookAt(startPos.x, startPos.y - 10, startPos.z);
	} else if (state === 'ready') {
		updateCamera(dt);
	} else if (state === 'flying') {
		const input = readInput();
		prev.copy(glider.position);
		const lift = thermals ? thermals.liftAt(glider.position) : 0;
		const hadFuel = glider.jetFuel > 0;
		glider.update(dt, input, lift);
		flight.time += dt;
		flight.grace -= dt;
		flight.distance += Math.hypot(glider.position.x - prev.x, glider.position.z - prev.z);
		vario = glider.velocity.y;

		// 効果音のきっかけ
		if (glider.jetting && !flight.wasJetting) sound.jetStart();
		if (input.jet && hadFuel && glider.jetFuel <= 0) {
			sound.jetEmpty();
			showMessage('ターボ切れ！', 1.2);
		}
		flight.wasJetting = glider.jetting;
		const inThermal = lift > 0.8;
		if (inThermal && !flight.inThermal) {
			sound.thermalEnter();
			showMessage('✨ 上昇気流！', 1.2);
		}
		flight.inThermal = inThermal;

		for (const it of balloons.update(dt, time, glider.position)) onPop(it);
		updateOni(dt, true);
		const hit = state === 'flying' && checkCollision(prev);
		if (hit) endGame(hit.title, hit.reason);
		updateCamera(dt);
	} else if (state === 'over') {
		updateCamera(dt);
	}

	mark('sim');
	if (state !== 'flying' && balloons) balloons.update(dt, time, new Vector3(1e9, 0, 0));
	if (state !== 'flying') updateOni(dt, false);
	mark('oni');
	if (thermals) thermals.update(time);
	fireworks.update(dt);
	mark('fx');
	const focus = debug.cam ? debug.cam.pos : state === 'title' || state === 'loading' ? startPos : glider.position;
	if (people && people.update(dt, time, focus) && state === 'flying') sound.cheer();
	mark('people');
	sound.update(dt, {
		speed: glider.speed, jetting: glider.jetting, active: state === 'flying',
		vario, agl: hudAgl, stalled: glider.stalled,
	});

	terrainTimer -= dt;
	if (terrainTimer <= 0) {
		terrainTimer = 0.5;
		terrain.update(focus);
	}
	mark('terrain');
	if (buildings) buildings.update(focus);
	mark('buildings');
	if (shadows) updateSun(focus);

	if (balloons && (state === 'flying' || state === 'ready')) {
		hudTimer -= dt;
		if (hudTimer <= 0) {
			hudTimer = 0.1;
			updateHud();
			drawMinimap();
		}
	}

	mark('hud');
	// 描画: メイン → ワイプ
	sky.position.copy(camera.position);
	// 影は1フレームおきに更新する (太陽は動かず、ずれはわずか)
	renderer.shadowMap.needsUpdate = shadows && frames % 2 === 0;
	renderer.setScissorTest(false);
	renderer.setViewport(0, 0, innerWidth, innerHeight);
	renderer.clear();
	setPilotVisible(cameraMode !== 'pilot' || state === 'title');
	renderer.render(scene, camera);
	mark('render');
	const showWipe = (state === 'ready' || state === 'flying' || state === 'over') && wipeRect && !debug.cam;
	if (showWipe) {
		if (frames % (mobile ? 3 : 2) === 1) {
			setPilotVisible(true);
			sky.position.copy(wipeCamera.position);
			renderer.shadowMap.needsUpdate = false;
			renderer.setRenderTarget(wipeTarget);
			renderer.clear();
			renderer.render(scene, wipeCamera);
			renderer.setRenderTarget(null);
		}
		const { x, y, w, h } = wipeRect;
		renderer.setViewport(x, innerHeight - y - h, w, h);
		renderer.render(overlayScene, overlayCamera);
	}
	mark('wipe');
}

// ---------- 起動 ----------
async function init() {
	requestAnimationFrame(loop);
	buildings = new Buildings(scene, `${import.meta.env.BASE_URL}buildings/`, { near: shadows ? 1100 : mobile ? 500 : 700, far: mobile ? 2600 : 3800, era: settings.era });
	await buildings.init();
	await terrain.init((p) => {
		$('load-fill').style.width = `${(p * 85).toFixed(0)}%`;
	});
	buildStage(scene, (x, z) => terrain.heightAtWorld(x, z));
	// 名所の建物 (外形が無いときに建てる地面の高さも渡す)。昭和初期には京都タワーは無い
	const specs = LANDMARK_SPECS.filter((l) => !(showaEra && l.kind === 'tower')).map((l) => {
		const p = geoToWorld(l.lat, l.lon, 0);
		return { ...l, x: p.x, z: p.z, y: terrain.heightAtWorld(p.x, p.z) };
	});
	buildings.setLandmarks(specs.filter((l) => !l.standalone), (x, z) => terrain.heightAtWorld(x, z));
	buildings.addStandalone(specs.filter((l) => l.standalone));
	buildProps(scene, (x, z) => terrain.heightAtWorld(x, z));

	balloons = new Balloons(scene, SPOTS, terrain);
	thermals = new Thermals(scene, THERMALS, terrain);
	people = new People(scene, SPOTS, terrain, buildings, { perSpot: mobile ? 30 : 60 });
	// 鬼の持ち場は名所のまわり
	oni.setWorld(SPOTS.map((sp) => { const p = geoToWorld(sp.lat, sp.lon, 0); p.y = terrain.heightAtWorld(p.x, p.z); return p; }), (x, z) => terrain.heightAtWorld(x, z));
	flight = newFlight();
	await buildMinimapBase();

	// 舞台周辺の建物ができるまで待つ
	$('load-text').textContent = '紅葉の京都の街並みを組み立て中…';
	for (let i = 0; i < 300 && buildings.readyAround(startPos, 1500) < 1; i++) {
		$('load-fill').style.width = `${(85 + buildings.readyAround(startPos, 1500) * 15).toFixed(0)}%`;
		await new Promise((r) => setTimeout(r, 100));
	}

	$('loading').classList.add('hidden');
	$('title-buttons').classList.remove('hidden');
	state = 'title';
	if (sound.ctx) sound.playSong('title');
}

init().catch((e) => {
	console.error(e);
	$('load-text').textContent = `読み込みに失敗しました: ${e.message}`;
});

// デバッグ用
window.__kiyomizu = {
	debug, geoToWorld, glider, terrain, camera, startGame, jump,
	get state() { return state; }, get flight() { return flight; }, get frames() { return frames; },
	buildings: () => buildings, balloons: () => balloons, fireworks, sound, oni, Vector3, prof, renderer, people: () => people,
};
