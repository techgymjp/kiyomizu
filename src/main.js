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
import { Showa } from './showa.js';
import { lang, L, spotName, applyStatic } from './i18n.js';
import { buildStage, STAGE, START_POINT } from './stage.js';
import { Oni } from './oni.js';
import { buildProps } from './props.js';
import { LANDMARK_SPECS } from './landmarkSpecs.js';
import { createAds } from './ads.js';

const $ = (id) => document.getElementById(id);
const TURBO_SEC = 5; // ターボ1つぶんの噴射時間
const START_TURBOS = 1;
// シェアするページ (ゲームの紹介記事)
const SHARE_URL = 'https://techgym.jp/column/claude-code-game-kiyomizu/';
// Android アプリ (Capacitor) で動いているか。Web 版では Capacitor がないので何もしない
const NATIVE = !!window.Capacitor?.isNativePlatform?.();
const plugin = (name) => (NATIVE ? window.Capacitor.Plugins?.[name] ?? null : null);
if (NATIVE) document.body.classList.add('app');
// 広告を見て続きから飛べる回数 (1 ゲームあたり)
const CONTINUE_MAX = 3;
const CONTINUE_DELAY = 2.5; // 失敗の様子を見届けてから案内を出す (秒)
const CONTINUE_WAIT = 6; // 案内を出しておく時間 (秒)。過ぎたら結果画面へ

// ---------- 設定 ----------
const settings = {
	// 初期設定は「かるい (影なし)」。以前の「きれい」の保存値は引き継がない (保存名を変更)
	quality: localStorage.getItem('kiyomizu-quality2') === 'high' ? 'high' : 'low',
	muted: localStorage.getItem('kiyomizu-muted') === '1',
	era: localStorage.getItem('kiyomizu-era') === 'showa' ? 'showa' : 'now',
};
applyStatic();
$('opt-lang').value = lang;
$('opt-lang').addEventListener('change', (e) => {
	localStorage.setItem('kiyomizu-lang', e.target.value);
	location.reload();
});
$('opt-era').value = settings.era;
$('opt-era').addEventListener('change', (e) => setEra(e.target.value));
if (settings.era === 'showa') document.body.classList.add('showa');
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
// 本番ではシェーダーのエラーログ取得を省く (初回描画時に処理が止まるのを避ける)
renderer.debug.checkShaderErrors = !import.meta.env.PROD;
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
sound.era = settings.era; // 昭和初期で始めたときは BGM も昭和の曲に
sound.setMuted(settings.muted);
const ads = createAds(sound);
const fireworks = new Fireworks(scene);
const oni = new Oni(scene);
let buildings = null;
let balloons = null;
let thermals = null;
let people = null;
let showa = null;
const perSpot = mobile ? 30 : 60;

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
	if (e.code === 'KeyT') setEra(settings.era === 'showa' ? 'now' : 'showa');
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
	$('touch-era').addEventListener('pointerdown', (e) => { e.preventDefault(); setEra(settings.era === 'showa' ? 'now' : 'showa'); });
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
	return { distance: 0, time: 0, checkpoints: [], grace: 1.2, wasJetting: false, inThermal: false, oniDist: Infinity, oniChase: Infinity, chasers: 0, alarm: false, alarmTimer: 0, clear: false, continues: 0, trail: [], trailTimer: 0 };
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
	showMessage(L('start'), 2.6);
	$('hint').textContent = isTouch ? L('hintTouch') : L('hintKey');
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
	showMessage(L('jump'), 2);
}

function endGame(title, reason, clear = false) {
	state = 'over';
	flight.clear = clear;
	sound.stopSong(0.1);
	if (clear) sound.turboGet();
	else sound.crash();
	$('touch').classList.add('hidden');
	showMessage(title, 1.4);
	const offer = !clear && ads.canReward && flight.continues < CONTINUE_MAX;
	setTimeout(() => {
		if (state !== 'over') return;
		if (offer) showContinue(title, reason);
		else showResult(title, reason);
	}, (offer ? CONTINUE_DELAY : 1.5) * 1000);
}

// 結果画面
function showResult(title, reason) {
	const clear = flight.clear;
	const dist = flight.distance / 1000;
	$('result-title').textContent = title;
	$('result-reason').textContent = reason;
	$('result-cp').textContent = `${flight.checkpoints.length}`;
	$('result-dist').textContent = `${dist.toFixed(2)} km`;
	$('result-time').textContent = formatTime(flight.time);
	$('result-spots').textContent = (flight.checkpoints.length
		? L('visited', flight.checkpoints)
		: L('noBalloons')) + (flight.continues ? L('continued', flight.continues) : '');
	const rank = rankOf(flight.checkpoints.length, flight.distance);
	const ranked = clear || (rank <= 10 && (flight.checkpoints.length > 0 || flight.distance > 50));
	$('result-title').classList.toggle('clear', clear);
	$('rank-banner').classList.toggle('hidden', !ranked);
	$('rank-no').textContent = rank;
	$('result-name').value = localStorage.getItem('kiyomizu-name') || '';
	$('btn-save').disabled = false;
	$('btn-save').textContent = L('save');
	showScreen('result');
	if (ranked) {
		// ランキング入り・全制覇: お祝いのファンファーレと花火
		sound.playSong('ranking');
		celebrate();
	} else {
		sound.playSong('gameover');
	}
}

// ---------- リワード広告: 広告を見て続きから飛ぶ (アプリのみ・1 ゲーム 3 回まで) ----------
// ぶつかったり鬼に捕まったりしたら「広告を見て続きから飛ぶ」を出す。見終わると、少し前の位置の少し上から飛び直す。
// 鬼は持ち場に戻る。使った回数は結果画面とシェア文に出る
const cont = { active: false, busy: false, t: 0, timer: 0, title: '', reason: '' };
function showContinue(title, reason) {
	Object.assign(cont, { active: true, busy: false, t: CONTINUE_WAIT, title, reason });
	$('btn-cont-watch').disabled = false;
	$('btn-cont-watch').textContent = L('contWatch');
	$('cont-note').textContent = L('contNote', CONTINUE_MAX - flight.continues);
	$('btn-cont-skip').textContent = L('contSkip', CONTINUE_WAIT);
	showScreen('continue');
	clearInterval(cont.timer);
	cont.timer = setInterval(() => {
		if (!cont.active || cont.busy) return;
		cont.t -= 0.25;
		$('btn-cont-skip').textContent = L('contSkip', Math.max(0, Math.ceil(cont.t)));
		if (cont.t <= 0) closeContinue(true);
	}, 250);
}
function closeContinue(toResult) {
	if (!cont.active) return;
	cont.active = false;
	clearInterval(cont.timer);
	if (toResult && state === 'over') showResult(cont.title, cont.reason);
}
$('btn-cont-skip').addEventListener('click', () => closeContinue(true));
$('btn-cont-watch').addEventListener('click', async () => {
	if (!cont.active || cont.busy) return;
	cont.busy = true;
	$('btn-cont-watch').disabled = true;
	$('btn-cont-watch').textContent = L('contLoading');
	const result = await ads.showRewarded();
	if (!cont.active) return;
	if (result === 'unavailable') {
		$('cont-note').textContent = L('contFail');
		setTimeout(() => closeContinue(true), 2000);
		return;
	}
	if (result !== 'rewarded') {
		closeContinue(true);
		return;
	}
	closeContinue(false);
	revive();
});

// 少し前 (4 秒ほど前) にいた場所の少し上から、同じ向きで飛び直す
function revive() {
	const snap = flight.trail[Math.max(0, flight.trail.length - 8)] ?? { pos: startPos.clone().setY(startPos.y + 60), yaw: START_POINT.heading * MathUtils.DEG2RAD };
	const pos = snap.pos.clone();
	pos.y = Math.max(pos.y + 30, terrain.heightAtWorld(pos.x, pos.z) + 80);
	const fuel = glider.jetFuel;
	glider.reset(pos, snap.yaw);
	glider.gamma = 0;
	glider.speed = 16;
	glider.jetFuel = fuel;
	glider.syncObject();
	oni.scatter(glider);
	flight.continues++;
	flight.trail = [];
	flight.grace = 2;
	flight.alarm = false;
	flight.alarmTimer = 0;
	state = 'flying';
	hideScreens();
	if (isTouch) $('touch').classList.remove('hidden');
	chaseInit = false;
	sound.jump();
	sound.playSong('flight');
	showMessage(L('contGo'), 2);
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

// ---------- 全画面広告 (アプリのみ) ----------
// プレイを始めるとき・タイトルに戻るとき・ポーズからの再開・もう一度飛ぶときに、毎回出す
let adBusy = false;
async function withInterstitial(next) {
	if (adBusy) return;
	if (ads.available) {
		adBusy = true;
		hideScreens();
		await ads.showInterstitial(3000);
		adBusy = false;
	}
	next();
}

// バナー広告: タイトル・遊び方・ポーズ・結果の画面だけ (プレイ中は操作ボタンと重なるので出さない)
function updateBanner() {
	const open = (id) => !$(id).classList.contains('hidden');
	ads.setBanner(!adBusy && (open('title') || open('howto') || open('pause') || open('result')));
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

$('btn-start').addEventListener('click', () => withInterstitial(startGame));
$('btn-retry').addEventListener('click', () => withInterstitial(startGame));
$('btn-resume').addEventListener('click', () => { if (state === 'paused') withInterstitial(togglePause); });
$('btn-pause-title').addEventListener('click', () => { if (state === 'paused') withInterstitial(toTitle); });
$('btn-howto').addEventListener('click', () => showScreen('howto'));
$('btn-ranking').addEventListener('click', () => { renderRanking(); showScreen('ranking'); });
$('btn-to-title').addEventListener('click', () => withInterstitial(toTitle));
$('btn-howto-ok').addEventListener('click', () => withInterstitial(() => showScreen('title')));
$('btn-ranking-close').addEventListener('click', () => showScreen('title'));
$('btn-save').addEventListener('click', () => {
	const name = $('result-name').value.trim() || L('anonymous');
	localStorage.setItem('kiyomizu-name', name);
	saveRanking({ name, cp: flight.checkpoints.length, dist: flight.distance, date: Date.now() });
	$('btn-save').disabled = true;
	$('btn-save').textContent = L('saved');
	sound.turboGet();
});
$('btn-share').addEventListener('click', async () => {
	const text = L('share', (flight.distance / 1000).toFixed(2), flight.checkpoints.length) + (flight.continues ? L('continued', flight.continues) : '');
	const url = SHARE_URL;
	// アプリでは Android の共有メニューを出す
	const share = plugin('Share');
	if (share) {
		try {
			await share.share({ title: document.title, text: `${text} #${L('hashtag')}`, url, dialogTitle: L('shareDialog') });
		} catch { /* キャンセル */ }
		return;
	}
	open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(L('hashtag'))}`, '_blank');
});

// 別のアプリに切り替えたら一時停止して音を止める (広告の表示中は広告側が音を止めている)
document.addEventListener('visibilitychange', () => {
	if (document.hidden) {
		if (state === 'flying') togglePause();
		sound.suspend();
	} else if (!ads.showing) {
		sound.resume();
	}
});

// Android の戻るボタン: 飛行中は一時停止 (一時停止中なら再開)、遊び方・ランキングはタイトルへ、
// タイトル・結果画面ではアプリを終了
plugin('App')?.addListener('backButton', () => {
	if (adBusy || ads.showing) return;
	const open = (id) => !$(id).classList.contains('hidden');
	if (state === 'flying') togglePause();
	else if (state === 'paused') withInterstitial(togglePause);
	else if (cont.active) closeContinue(true);
	else if (open('howto')) withInterstitial(() => showScreen('title'));
	else if (open('ranking')) showScreen('title');
	else if (state === 'ready') toTitle();
	else if (state !== 'over' || open('result')) plugin('App').exitApp();
});

// アプリではタイトル画面の下にバージョン・プライバシーポリシー・広告の設定 (EU など) を出す
if (NATIVE) {
	$('legal').classList.remove('hidden');
	if (window.APP_VERSION && window.APP_VERSION !== 'dev') $('build-info').textContent = window.APP_VERSION;
	if (lang === 'en') $('privacy-link').href = 'https://techgym.jp/privacy-policy-en/';
	ads.initDone.then(() => { if (ads.privacyOptionsRequired) $('ad-privacy').classList.remove('hidden'); });
	$('ad-privacy').addEventListener('click', (e) => { e.preventDefault(); ads.showPrivacyOptions(); });
	// 遊び方と案内は、キーではなく画面のボタンで説明する
	$('howto-list').innerHTML = L('howtoApp').map(([k, v]) => `<li><span class="key">${k}</span><span>${v}</span></li>`).join('');
	$('btn-resume').textContent = L('resumeApp');
}

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
		body.innerHTML = `<tr><td colspan="5">${L('noRecords')}</td></tr>`;
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
			+ (flight.chasers ? L('chasing', flight.chasers) : '');
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
		$('target-name').textContent = `🎈 ${spotName(near.item.spot)}`;
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

// ---------- 今昔の切り替え (T キー / 時代ボタン) ----------
function setEra(era) {
	if (era === settings.era) return;
	settings.era = era;
	localStorage.setItem('kiyomizu-era', era);
	$('opt-era').value = era;
	const showaEra = era === 'showa';
	sound.setEra(era);
	if (!buildings || !people) {
		// 読み込み中は地形・建物の時代だけ合わせる (人などはこのあと作られる)
		document.body.classList.toggle('showa', showaEra);
		terrain.setEra(era);
		buildings?.setEra(era);
		return;
	}
	// タイムスリップの演出: 画面が白く光っている間に入れ替える
	const fx = $('timeslip');
	fx.classList.remove('on');
	void fx.offsetWidth;
	fx.classList.add('on');
	sound.timeslip();
	setTimeout(() => {
		document.body.classList.toggle('showa', showaEra);
		terrain.setEra(era);
		buildings.setEra(era);
		showa.setVisible(showaEra);
		people.dispose();
		people = new People(scene, SPOTS, terrain, buildings, { perSpot, era });
	}, 350);
	if (state === 'flying' || state === 'ready') {
		showMessage(showaEra ? L('toShowa') : L('toNow'), 1.8);
	}
}

// ---------- 飛行中の判定 ----------
function checkCollision(prev) {
	worldToGeo(glider.position, geo);
	const ground = terrain.heightAt(geo.lat, geo.lon);
	if (geo.height <= ground + 0.8) {
		return { title: L('landed')[0], reason: L('landed')[1] };
	}
	if (flight.grace > 0 || !buildings) return null;
	// 前フレームとの間を細かく調べて、建物に入ったか
	const steps = Math.max(1, Math.ceil(prev.distanceTo(glider.position) / 1.5));
	for (let i = 1; i <= steps; i++) {
		tmpV.lerpVectors(prev, glider.position, i / steps);
		if (buildings.hit(tmpV)) {
			const roof = glider.velocity.y < 0 && Math.abs(glider.velocity.y) > Math.hypot(glider.velocity.x, glider.velocity.z) * 0.15;
			return roof
				? { title: L('roof')[0], reason: L('roof')[1] }
				: { title: L('crash')[0], reason: L('crash')[1] };
		}
	}
	const b = terrain.bounds();
	if (geo.lat > b.north || geo.lat < b.south || geo.lon < b.west || geo.lon > b.east) {
		return { title: L('outside')[0], reason: L('outside')[1] };
	}
	return null;
}

function onPop(it) {
	flight.checkpoints.push(spotName(it.spot));
	glider.addJet(TURBO_SEC);
	sound.pop();
	sound.turboGet();
	launchFireworks(5, false, 0.3);
	sound.cheer();
	if (flight.checkpoints.length >= SPOTS.length) {
		endGame(...L('clear'), true);
		return;
	}
	const unpopped = balloons.items.filter((b) => !b.popped).map((b) => b.base);
	const more = oni.addForCheckpoint(flight.checkpoints.length, glider, unpopped);
	if (more) setTimeout(() => sound.oniLaugh(), 900);
	showMessage(L('checkpoint', spotName(it.spot)) + (more ? L('moreOni', oni.list.length) : ''), 2.6);
}

// 鬼ごっこ: 鬼の動きと、近づいたときの演出
let heartTimer = 0;
const dangerEl = $('danger');
function updateOni(dt, active) {
	const r = oni.update(dt, glider, active);
	if (!active) return;
	if (r.spawned) {
		showMessage(L('spawned', r.spawned.length), 2.6);
	}
	if (r.found.length) {
		sound.oniLaugh();
		showMessage(r.found.length > 1 ? L('foundMany', r.found.length) : L('found'), 1.8);
	}
	flight.oniDist = r.nearest;
	flight.oniChase = r.nearestChase;
	flight.chasers = oni.list.filter((o) => o.state === 'chase').length;
	// 追いかけられている間は BGM を止めて「ブブー、ブブー」と警報を鳴らす
	const chased = flight.chasers > 0;
	if (chased !== flight.alarm) {
		flight.alarm = chased;
		flight.alarmTimer = 0;
		if (chased) sound.stopSong(0.3);
		else if (!r.caught) sound.playSong('flight');
	}
	if (chased) {
		flight.alarmTimer -= dt;
		if (flight.alarmTimer <= 0) {
			sound.alarm();
			flight.alarmTimer = 1.5;
		}
	}
	// 追いかけてくる鬼が近いほど速くなる心臓の音
	heartTimer -= dt;
	if (r.nearestChase < 180 && heartTimer <= 0) {
		sound.heartbeat();
		heartTimer = 0.35 + (r.nearestChase / 180) * 0.8;
	}
	if (r.caught) endGame(...L('caught'));
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
		// 続きから飛ぶときのために、0.5 秒ごとの位置と向きを 5 秒ぶん覚えておく
		flight.trailTimer -= dt;
		if (flight.trailTimer <= 0) {
			flight.trailTimer = 0.5;
			flight.trail.push({ pos: glider.position.clone(), yaw: glider.yaw });
			if (flight.trail.length > 10) flight.trail.shift();
		}
		vario = glider.velocity.y;

		// 効果音のきっかけ
		if (glider.jetting && !flight.wasJetting) sound.jetStart();
		if (input.jet && hadFuel && glider.jetFuel <= 0) {
			sound.jetEmpty();
			showMessage(L('noTurbo'), 1.2);
		}
		flight.wasJetting = glider.jetting;
		const inThermal = lift > 0.8;
		if (inThermal && !flight.inThermal) {
			sound.thermalEnter();
			showMessage(L('thermal'), 1.2);
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
	// 警報が鳴っている間は画面のふちを赤く点滅させる
	dangerEl.classList.toggle('alarm', state === 'flying' && !!flight?.alarm);
	updateBanner();
	mark('oni');
	if (thermals) thermals.update(time);
	fireworks.update(dt);
	mark('fx');
	const focus = debug.cam ? debug.cam.pos : state === 'title' || state === 'loading' ? startPos : glider.position;
	if (people && people.update(dt, time, focus) && state === 'flying') sound.cheer();
	if (showa) showa.update(dt, time);
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
	const specs = LANDMARK_SPECS.map((l) => {
		const p = geoToWorld(l.lat, l.lon, 0);
		return { ...l, x: p.x, z: p.z, y: terrain.heightAtWorld(p.x, p.z) };
	});
	buildings.setLandmarks(specs.filter((l) => !l.standalone), (x, z) => terrain.heightAtWorld(x, z));
	buildings.addStandalone(specs.filter((l) => l.standalone));
	buildProps(scene, (x, z) => terrain.heightAtWorld(x, z));

	balloons = new Balloons(scene, SPOTS, terrain);
	thermals = new Thermals(scene, THERMALS, terrain);
	people = new People(scene, SPOTS, terrain, buildings, { perSpot, era: settings.era });
	// 昭和の町並み (市電・電柱・銭湯の煙突・屋上のアドバルーン・二代目京都駅)
	showa = new Showa(scene, (x, z) => terrain.heightAtWorld(x, z));
	showa.setVisible(settings.era === 'showa');
	// 鬼の持ち場は名所のまわり
	oni.setWorld(SPOTS.map((sp) => { const p = geoToWorld(sp.lat, sp.lon, 0); p.y = terrain.heightAtWorld(p.x, p.z); return p; }), (x, z) => terrain.heightAtWorld(x, z));
	flight = newFlight();
	await buildMinimapBase();

	// 舞台周辺の建物ができるまで待つ
	$('load-text').textContent = L('loadingTown');
	for (let i = 0; i < 300 && buildings.readyAround(startPos, 1500) < 1; i++) {
		$('load-fill').style.width = `${(85 + buildings.readyAround(startPos, 1500) * 15).toFixed(0)}%`;
		await new Promise((r) => setTimeout(r, 100));
	}

	await warmupShaders();

	$('loading').classList.add('hidden');
	$('title-buttons').classList.remove('hidden');
	state = 'title';
	if (sound.ctx) sound.playSong('title');
}

// ゲーム中に初めて出てくるもの (鬼・ジェットの炎・花火など) のシェーダーとテクスチャを
// 読み込み中に用意しておく。これをしないとスタート直後に数百ms〜数秒固まり、音も途切れる
async function warmupShaders() {
	const extra = oni.warmupObjects();
	extra.position.copy(startPos);
	scene.add(extra);
	// 隠れているものも含めて全部見える状態にする / 元に戻す (途中でゲームループが動かないよう同期的に使う)
	const showAll = () => {
		const hidden = [], culled = [];
		scene.traverse((o) => {
			if (!o.visible) { hidden.push(o); o.visible = true; }
			if (o.frustumCulled) { culled.push(o); o.frustumCulled = false; }
		});
		return () => {
			for (const o of culled) o.frustumCulled = true;
			for (const o of hidden) o.visible = false;
		};
	};
	try {
		let restore = showAll();
		const job = renderer.compileAsync(scene, camera);
		restore();
		await job;
		// 画面外のものも一度描いておく (シェーダーのリンクとテクスチャ転送が済む)。
		// 画面に直接描く (オフスクリーンに描くと色空間の違う別のシェーダーになる)。次のフレームで上書きされる
		restore = showAll();
		renderer.render(scene, camera);
		restore();
	} catch (e) {
		console.warn('warmup', e);
	}
	scene.remove(extra);
}

init().catch((e) => {
	console.error(e);
	$('load-text').textContent = L('loadFailed', e.message);
});

// デバッグ用
window.__kiyomizu = {
	debug, geoToWorld, glider, ads, terrain, camera, startGame, jump,
	get state() { return state; }, get flight() { return flight; }, get frames() { return frames; },
	buildings: () => buildings, balloons: () => balloons, fireworks, sound, oni, Vector3, prof, renderer, people: () => people, showa: () => showa, setEra,
};
