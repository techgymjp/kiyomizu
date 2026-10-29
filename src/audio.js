// WebAudio で合成する BGM と効果音 (外部音源なし)

const NOTE = { C: 0, 'C#': 1, D: 2, 'D#': 3, E: 4, F: 5, 'F#': 6, G: 7, 'G#': 8, A: 9, 'A#': 10, B: 11 };
function freq(name) {
	const m = /^([A-G]#?)(\d)$/.exec(name);
	return 440 * 2 ** ((NOTE[m[1]] + (Number(m[2]) + 1) * 12 - 69) / 12);
}

// "D5:1 E5:.5 -:.5" → [[音名|null, 拍], ...]
function seq(str) {
	return str.trim().split(/\s+/).map((t) => {
		const [n, b] = t.split(':');
		return [n === '-' ? null : n, Number(b)];
	});
}

// ---------- 曲 (雅楽風) ----------
// 平調 (E F# A B C# D) を中心に、笙・篳篥・龍笛・鞨鼓・太鼓・鉦鼓で演奏する
// 打楽器: T=太鼓 K=鞨鼓 R=鞨鼓の連打(来) G=鉦鼓
// 笙は和音名 (SHO_CHORDS) で指定
const SHO_CHORDS = {
	E: ['E5', 'F#5', 'B5', 'E6', 'F#6'],
	A: ['A4', 'B4', 'E5', 'A5', 'B5'],
	B: ['B4', 'C#5', 'F#5', 'B5', 'E6'],
	D: ['D5', 'E5', 'A5', 'D6'],
};
const SONGS = {
	title: {
		bpm: 60, loop: true,
		tracks: [
			{ wave: 'sho', gain: 0.05, notes: seq('E:8 A:8 B:8 E:8') },
			{ wave: 'hichiriki', gain: 0.11, notes: seq('E4:2 F#4:1 A4:1 B4:4 A4:2 B4:1 C#5:1 B4:4 A4:2 F#4:2 E4:4 F#4:2 A4:2 B4:4') },
			{ wave: 'ryuteki', gain: 0.05, notes: seq('-:.25 E5:1.75 F#5:1 A5:1 B5:4 A5:2 B5:1 C#6:1 B5:4 A5:2 F#5:2 E5:4 F#5:2 A5:2 B5:4') },
			{ wave: 'perc', gain: 0.5, notes: seq('T:4 K:2 K:2 R:4 T:4 G:2 K:2 R:4 T:4 G:4') },
		],
	},
	start: {
		bpm: 100, loop: false,
		tracks: [
			{ wave: 'sho', gain: 0.06, notes: seq('E:12') },
			{ wave: 'ryuteki', gain: 0.08, notes: seq('E5:1 F#5:1 A5:2 B5:2 -:1 E6:5') },
			{ wave: 'perc', gain: 0.6, notes: seq('T:2 G:1 T:1 R:2 T:2 G:1 G:1 T:2') },
		],
	},
	flight: {
		bpm: 108, loop: true,
		tracks: [
			{ wave: 'sho', gain: 0.045, notes: seq('B:8 A:8 E:8 B:8') },
			{ wave: 'hichiriki', gain: 0.1, notes: seq(
				'B4:1 A4:.5 B4:.5 C#5:1 E5:1 D5:1 C#5:1 B4:2 A4:1 B4:.5 A4:.5 F#4:1 A4:1 B4:4 '
				+ 'E5:1 F#5:1 E5:1 D5:1 C#5:2 B4:2 A4:1 B4:1 C#5:1 A4:1 B4:4',
			) },
			{ wave: 'ryuteki', gain: 0.045, notes: seq(
				'-:.25 B5:.75 A5:.5 B5:.5 C#6:1 E6:1 D6:1 C#6:1 B5:2 A5:1 B5:.5 A5:.5 F#5:1 A5:1 B5:4 '
				+ 'E6:1 F#6:1 E6:1 D6:1 C#6:2 B5:2 A5:1 B5:1 C#6:1 A5:1 B5:4',
			) },
			{ wave: 'perc', gain: 0.5, notes: seq('T:1 K:.5 K:.5 G:1 K:1 R:2 K:1 G:1 '.repeat(4)) },
		],
	},
	gameover: {
		bpm: 60, loop: false,
		tracks: [
			{ wave: 'sho', gain: 0.05, notes: seq('A:6 E:6') },
			{ wave: 'ryuteki', gain: 0.07, notes: seq('B5:2 A5:1 F#5:1 E5:4 -:1 F#4:3') },
			{ wave: 'perc', gain: 0.6, notes: seq('T:4 G:4 T:4') },
		],
	},
	ranking: {
		bpm: 132, loop: false,
		tracks: [
			{ wave: 'sho', gain: 0.06, notes: seq('E:8 A:8 E:8') },
			{ wave: 'hichiriki', gain: 0.09, notes: seq('E4:2 A4:2 B4:4 C#5:2 B4:2 E5:4 B4:4 E5:4') },
			{ wave: 'ryuteki', gain: 0.07, notes: seq('E5:.5 F#5:.5 A5:1 B5:1 E6:1 B5:.5 E6:.5 F#6:2 E6:2 B5:1 C#6:1 E6:2 F#6:4 E6:3 -:4') },
			{ wave: 'perc', gain: 0.6, notes: seq('R:2 T:1 G:1 R:2 T:1 G:1 T:1 K:.5 K:.5 T:1 K:.5 K:.5 R:4 T:2 G:2 T:2 G:2') },
		],
	},
};

export class Sound {
	constructor() {
		this.ctx = null;
		this.muted = false;
		this.song = null;
		this.varioTimer = 0;
		this.warnTimer = 0;
	}

	init() {
		if (this.ctx) {
			if (this.ctx.state === 'suspended') this.ctx.resume();
			return;
		}
		// スマホは音が途切れてプチプチ鳴らないようバッファを大きめに
		const mobile = matchMedia('(pointer: coarse)').matches;
		const AC = window.AudioContext || window.webkitAudioContext;
		let ctx;
		try { ctx = new AC({ latencyHint: mobile ? 'playback' : 'interactive' }); } catch { ctx = new AC(); }
		this.ctx = ctx;
		this.volume = mobile ? 0.5 : 0.8;
		this.master = ctx.createGain();
		this.master.gain.value = this.muted ? 0 : this.volume;
		// 音割れ防止: スマホのスピーカーで割れやすい低音を削り、最後にリミッターをかける
		const hp = ctx.createBiquadFilter();
		hp.type = 'highpass';
		hp.frequency.value = mobile ? 110 : 30;
		const limiter = ctx.createDynamicsCompressor();
		limiter.threshold.value = -12;
		limiter.knee.value = 6;
		limiter.ratio.value = 12;
		limiter.attack.value = 0.003;
		limiter.release.value = 0.25;
		this.master.connect(hp).connect(limiter).connect(ctx.destination);
		this.musicBus = ctx.createGain();
		this.musicBus.gain.value = 0.55;
		this.musicBus.connect(this.master);
		this.sfx = ctx.createGain();
		this.sfx.connect(this.master);

		// ノイズ
		this.noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
		const d = this.noise.getChannelData(0);
		for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;

		const loopNoise = (type, f) => {
			const src = ctx.createBufferSource();
			src.buffer = this.noise;
			src.loop = true;
			const filter = ctx.createBiquadFilter();
			filter.type = type;
			filter.frequency.value = f;
			const gain = ctx.createGain();
			gain.gain.value = 0;
			src.connect(filter).connect(gain).connect(this.sfx);
			src.start();
			return { filter, gain };
		};
		this.wind = loopNoise('bandpass', 500);
		this.wind.filter.Q.value = 0.7;
		this.jet = loopNoise('lowpass', 900);
		// ジェットのうなり
		const osc = ctx.createOscillator();
		osc.type = 'sawtooth';
		osc.frequency.value = 70;
		const og = ctx.createGain();
		og.gain.value = 0;
		const of = ctx.createBiquadFilter();
		of.type = 'lowpass';
		of.frequency.value = 400;
		osc.connect(of).connect(og).connect(this.sfx);
		osc.start();
		this.jetHum = { osc, gain: og };
		if (this.pendingSong) this.playSong(this.pendingSong);
	}

	setMuted(m) {
		this.muted = m;
		if (this.master) this.master.gain.setTargetAtTime(m ? 0 : this.volume, this.ctx.currentTime, 0.05);
	}

	// ---------- 音の部品 ----------
	tone(f, t, dur, { wave = 'sine', gain = 0.3, attack = 0.005, slideTo = null, bus = this.sfx } = {}) {
		const ctx = this.ctx;
		const o = ctx.createOscillator();
		o.type = wave;
		o.frequency.setValueAtTime(f, t);
		if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
		const g = ctx.createGain();
		g.gain.setValueAtTime(0, t);
		g.gain.linearRampToValueAtTime(gain, t + attack);
		g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
		o.connect(g).connect(bus);
		o.start(t);
		o.stop(t + dur + 0.05);
	}

	burstNoise(t, dur, { type = 'lowpass', f = 1200, gain = 0.5, decay = dur / 4, slideTo = null, bus = this.sfx, q = 1 } = {}) {
		const ctx = this.ctx;
		const src = ctx.createBufferSource();
		src.buffer = this.noise;
		const filter = ctx.createBiquadFilter();
		filter.type = type;
		filter.Q.value = q;
		filter.frequency.setValueAtTime(f, t);
		if (slideTo) filter.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
		const g = ctx.createGain();
		g.gain.setValueAtTime(gain, t);
		g.gain.setTargetAtTime(0, t, decay);
		src.connect(filter).connect(g).connect(bus);
		src.start(t, Math.random());
		src.stop(t + dur);
	}

	// ---------- BGM ----------
	playSong(name) {
		if (!this.ctx) {
			this.pendingSong = name;
			return;
		}
		this.stopSong();
		const song = SONGS[name];
		const beat = 60 / song.bpm;
		const length = Math.max(...song.tracks.map((tr) => tr.notes.reduce((a, n) => a + n[1], 0)));
		const state = { name, start: this.ctx.currentTime + 0.08, bar: 0, gain: this.ctx.createGain() };
		state.gain.connect(this.musicBus);
		const scheduleOnce = (offset) => {
			for (const tr of song.tracks) {
				let t = offset;
				for (const [n, b] of tr.notes) {
					if (n) this.playNote(tr.wave, n, t, b * beat, tr.gain, state.gain);
					t += b * beat;
				}
			}
		};
		scheduleOnce(state.start);
		if (song.loop) {
			// 1周分ずつ先回りして予約する
			state.timer = setInterval(() => {
				const next = state.start + (state.bar + 1) * length * beat;
				if (next - this.ctx.currentTime < 1.5) {
					state.bar++;
					scheduleOnce(next);
				}
			}, 300);
		}
		this.song = state;
	}

	playNote(wave, n, t, dur, gain, bus) {
		switch (wave) {
			case 'perc': return this.percussion(n, t, gain, bus);
			case 'sho': return this.sho(SHO_CHORDS[n], t, dur, gain, bus);
			case 'hichiriki': return this.reed(freq(n), t, dur, gain, bus);
			case 'ryuteki': return this.flute(freq(n), t, dur, gain, bus);
		}
	}

	// 笙: 和音をゆっくり膨らませて伸ばす
	sho(notes, t, dur, gain, bus) {
		const ctx = this.ctx;
		const g = ctx.createGain();
		const end = t + dur;
		g.gain.setValueAtTime(0.0001, t);
		g.gain.linearRampToValueAtTime(gain, t + Math.min(1.2, dur * 0.35));
		g.gain.setValueAtTime(gain, Math.max(t + 0.05, end - 0.4));
		g.gain.linearRampToValueAtTime(0.0001, end);
		const lp = ctx.createBiquadFilter();
		lp.type = 'lowpass';
		lp.frequency.value = 3200;
		g.connect(lp).connect(bus);
		for (const name of notes) {
			const f = freq(name);
			for (const [type, mul, det] of [['triangle', 1, -4], ['sine', 2, 3]]) {
				const o = ctx.createOscillator();
				o.type = type;
				o.frequency.value = f * mul;
				o.detune.value = det;
				const og = ctx.createGain();
				og.gain.value = mul === 1 ? 1 : 0.3;
				o.connect(og).connect(g);
				o.start(t);
				o.stop(end + 0.05);
			}
		}
	}

	// 篳篥: 鼻にかかったリード音。下からずり上げて入る (塩梅)
	reed(f, t, dur, gain, bus) {
		const ctx = this.ctx;
		const o = ctx.createOscillator();
		o.type = 'sawtooth';
		o.frequency.setValueAtTime(f * 0.92, t);
		o.frequency.exponentialRampToValueAtTime(f, t + Math.min(0.25, dur * 0.4));
		const vib = ctx.createOscillator();
		vib.frequency.value = 5;
		const vg = ctx.createGain();
		vg.gain.setValueAtTime(0, t);
		vg.gain.linearRampToValueAtTime(f * 0.012, t + dur);
		vib.connect(vg).connect(o.frequency);
		const bp = ctx.createBiquadFilter();
		bp.type = 'bandpass';
		bp.frequency.value = 1300;
		bp.Q.value = 1.4;
		const lp = ctx.createBiquadFilter();
		lp.type = 'lowpass';
		lp.frequency.value = 2600;
		const g = ctx.createGain();
		const end = t + dur * 0.97;
		g.gain.setValueAtTime(0.0001, t);
		g.gain.linearRampToValueAtTime(gain, t + 0.08);
		g.gain.linearRampToValueAtTime(gain * 1.25, t + dur * 0.6);
		g.gain.linearRampToValueAtTime(0.0001, end);
		o.connect(bp).connect(lp).connect(g).connect(bus);
		o.start(t);
		vib.start(t);
		o.stop(end + 0.05);
		vib.stop(end + 0.05);
	}

	// 龍笛: 息の混じった笛。少し上から落として入る
	flute(f, t, dur, gain, bus) {
		const ctx = this.ctx;
		const o = ctx.createOscillator();
		o.type = 'sine';
		o.frequency.setValueAtTime(f * 1.03, t);
		o.frequency.exponentialRampToValueAtTime(f, t + 0.12);
		const g = ctx.createGain();
		const end = t + dur * 0.95;
		g.gain.setValueAtTime(0.0001, t);
		g.gain.linearRampToValueAtTime(gain, t + 0.06);
		g.gain.setValueAtTime(gain, Math.max(t + 0.07, end - 0.1));
		g.gain.linearRampToValueAtTime(0.0001, end);
		o.connect(g).connect(bus);
		o.start(t);
		o.stop(end + 0.05);
		// 息の音
		this.burstNoise(t, dur, { type: 'bandpass', f, q: 8, gain: gain * 0.9, decay: dur * 0.5, bus });
	}

	// 打楽器
	percussion(n, t, gain, bus) {
		if (n === 'T') {
			// 太鼓: 低く長い響き
			this.tone(75, t, 1.4, { slideTo: 42, gain: gain * 1.6, bus });
			this.burstNoise(t, 0.3, { f: 300, gain: gain * 0.5, decay: 0.05, bus });
		} else if (n === 'K') {
			// 鞨鼓: 乾いた高い音
			this.tone(520, t, 0.12, { slideTo: 380, gain: gain * 0.5, bus });
			this.burstNoise(t, 0.06, { type: 'bandpass', f: 1800, gain: gain * 0.4, decay: 0.015, bus });
		} else if (n === 'R') {
			// 鞨鼓の連打: だんだん速く
			let x = t;
			for (let i = 0, gap = 0.16; i < 9; i++, gap *= 0.82) {
				this.tone(520, x, 0.08, { slideTo: 400, gain: gain * 0.35, bus });
				x += gap;
			}
		} else if (n === 'G') {
			// 鉦鼓: 金属的な響き
			this.tone(2150, t, 0.5, { gain: gain * 0.18, bus });
			this.tone(3370, t, 0.35, { gain: gain * 0.1, bus });
			this.tone(1280, t, 0.6, { gain: gain * 0.08, bus });
		}
	}

	stopSong(fade = 0.3) {
		if (!this.song) return;
		const s = this.song;
		clearInterval(s.timer);
		s.gain.gain.setTargetAtTime(0, this.ctx.currentTime, fade / 3);
		setTimeout(() => s.gain.disconnect(), fade * 1000 + 600);
		this.song = null;
	}

	// ---------- 効果音 ----------
	click() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		this.tone(880, t, 0.08, { wave: 'square', gain: 0.08 });
		this.tone(1320, t + 0.04, 0.08, { wave: 'square', gain: 0.06 });
	}

	jump() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		// 踏み切り + ひゅーっ
		this.burstNoise(t, 0.15, { f: 300, gain: 0.6, decay: 0.03 });
		this.burstNoise(t + 0.05, 1.2, { type: 'bandpass', f: 400, slideTo: 2500, gain: 0.35, decay: 0.5, q: 3 });
		this.tone(300, t + 0.05, 0.7, { wave: 'triangle', slideTo: 900, gain: 0.15 });
	}

	jetStart() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		this.burstNoise(t, 0.5, { f: 3000, slideTo: 500, gain: 0.6, decay: 0.15 });
		this.tone(120, t, 0.4, { wave: 'sawtooth', slideTo: 60, gain: 0.25 });
	}

	jetEmpty() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		for (let i = 0; i < 3; i++) this.burstNoise(t + i * 0.12, 0.08, { f: 600, gain: 0.4, decay: 0.02 });
		this.tone(200, t, 0.4, { wave: 'square', slideTo: 80, gain: 0.08 });
	}

	turboGet() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		[523, 659, 784, 1047, 1319].forEach((f, i) => this.tone(f, t + i * 0.05, 0.25, { wave: 'square', gain: 0.07 }));
	}

	pop() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		this.burstNoise(t, 0.3, { f: 5000, gain: 1.2, decay: 0.03 });
		this.tone(1200, t, 0.1, { slideTo: 300, gain: 0.3 });
		// チャイム
		[880, 1318.5, 1760, 2093].forEach((f, i) => this.tone(f, t + 0.1 + i * 0.08, 0.6, { wave: 'triangle', gain: 0.18 }));
	}

	// 花火: 打ち上げの笛 → ドーン → パチパチ
	firework(delay = 0) {
		if (!this.ctx) return;
		const t = this.ctx.currentTime + delay;
		this.tone(700, t, 0.9, { wave: 'sine', slideTo: 1800, gain: 0.08, attack: 0.05 });
		this.burstNoise(t + 0.9, 1.5, { f: 900, slideTo: 80, gain: 1.4, decay: 0.25 });
		this.tone(90, t + 0.9, 0.8, { slideTo: 40, gain: 0.6 });
		for (let i = 0; i < 14; i++) {
			this.burstNoise(t + 1.1 + Math.random() * 0.9, 0.05, { type: 'highpass', f: 4000, gain: 0.25 * Math.random() + 0.1, decay: 0.01 });
		}
	}

	stall() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		this.tone(1000, t, 0.12, { wave: 'square', gain: 0.1 });
		this.tone(1000, t + 0.18, 0.12, { wave: 'square', gain: 0.1 });
	}

	groundWarning() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		this.tone(520, t, 0.18, { wave: 'sawtooth', gain: 0.08 });
		this.tone(390, t + 0.2, 0.18, { wave: 'sawtooth', gain: 0.08 });
	}

	thermalEnter() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		[660, 880, 1100].forEach((f, i) => this.tone(f, t + i * 0.06, 0.3, { wave: 'sine', gain: 0.1 }));
	}

	crash() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		this.burstNoise(t, 1.2, { f: 500, gain: 1.3, decay: 0.2 });
		this.tone(160, t, 0.6, { wave: 'square', slideTo: 40, gain: 0.25 });
		this.burstNoise(t + 0.15, 0.6, { type: 'bandpass', f: 1800, gain: 0.4, decay: 0.08 });
		// ぴよぴよ
		for (let i = 0; i < 4; i++) this.tone(1500 + (i % 2) * 300, t + 0.6 + i * 0.14, 0.12, { wave: 'sine', gain: 0.08 });
	}

	// 鬼の笑い声「ガッハッハ」
	oniLaugh() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		for (let i = 0; i < 4; i++) {
			const at = t + i * 0.22;
			this.tone(150 - i * 8, at, 0.18, { wave: 'sawtooth', slideTo: 95, gain: 0.22, attack: 0.01 });
			this.burstNoise(at, 0.15, { type: 'bandpass', f: 700, gain: 0.3, decay: 0.05, q: 2 });
		}
		this.tone(70, t, 1.2, { slideTo: 40, gain: 0.5 });
	}

	// 鬼が近いときの心臓の音 (ドクン)
	heartbeat() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		this.tone(60, t, 0.18, { slideTo: 40, gain: 0.6 });
		this.tone(55, t + 0.16, 0.2, { slideTo: 38, gain: 0.45 });
	}

	countdown(final = false) {
		if (!this.ctx) return;
		this.tone(final ? 1320 : 660, this.ctx.currentTime, final ? 0.5 : 0.15, { wave: 'square', gain: 0.1 });
	}

	cheer() {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		// 人だかりの歓声
		this.burstNoise(t, 1.6, { type: 'bandpass', f: 1200, gain: 0.25, decay: 0.6, q: 0.6 });
		for (let i = 0; i < 6; i++) this.tone(600 + Math.random() * 500, t + Math.random() * 0.6, 0.3, { wave: 'triangle', slideTo: 900 + Math.random() * 400, gain: 0.03 });
	}

	// ---------- 毎フレーム ----------
	update(dt, { speed = 0, jetting = false, active = false, vario = 0, agl = 999, stalled = false } = {}) {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		const w = active ? Math.min(0.5, speed / 110) : 0;
		this.wind.gain.gain.setTargetAtTime(w, t, 0.2);
		this.wind.filter.frequency.setTargetAtTime(300 + speed * 18, t, 0.2);
		const j = active && jetting;
		this.jet.gain.gain.setTargetAtTime(j ? 0.6 : 0, t, 0.08);
		this.jetHum.gain.gain.setTargetAtTime(j ? 0.12 : 0, t, 0.08);
		this.jetHum.osc.frequency.setTargetAtTime(60 + speed * 0.8, t, 0.2);
		if (!active) return;

		// バリオメーター: 上昇中はピッ ピッ (上昇が強いほど高く速く)
		this.varioTimer -= dt;
		if (vario > 0.4 && this.varioTimer <= 0) {
			this.tone(600 + vario * 90, t, 0.08, { wave: 'sine', gain: 0.07 });
			this.varioTimer = Math.max(0.12, 0.45 - vario * 0.05);
		}
		this.warnTimer -= dt;
		if (this.warnTimer <= 0) {
			if (stalled) {
				this.stall();
				this.warnTimer = 0.6;
			} else if (agl < 25 && vario < -0.5) {
				this.groundWarning();
				this.warnTimer = 0.8;
			}
		}
	}
}
