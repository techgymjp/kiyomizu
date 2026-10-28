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

// ---------- 曲 ----------
// 陽音階 (D E G A B) を中心にした和風ポップ
const SONGS = {
	title: {
		bpm: 96, loop: true,
		tracks: [
			{ wave: 'triangle', gain: 0.22, notes: seq('D5:1 E5:.5 G5:.5 A5:1 G5:1 E5:1 D5:.5 E5:.5 G5:2 A5:1 B5:.5 A5:.5 G5:1 E5:1 D5:1 E5:1 D5:2') },
			{ wave: 'sine', gain: 0.2, notes: seq('D3:2 A3:2 G3:2 D3:2 G3:2 E3:2 A3:2 D3:2') },
			{ wave: 'pluck', gain: 0.12, notes: seq('A4:.5 D5:.5 A4:.5 D5:.5 '.repeat(8)) },
		],
	},
	start: {
		bpm: 150, loop: false,
		tracks: [
			{ wave: 'square', gain: 0.16, notes: seq('G4:.5 G4:.5 G4:.5 D5:1.5 -:.5 B4:.5 D5:.5 G5:3') },
			{ wave: 'triangle', gain: 0.25, notes: seq('G2:1 D3:1 G2:1 D3:1 G2:3') },
			{ wave: 'drum', gain: 0.35, notes: seq('K:1 S:1 K:1 S:.5 S:.5 K:3') },
		],
	},
	flight: {
		bpm: 138, loop: true,
		tracks: [
			{ wave: 'square', gain: 0.1, notes: seq(
				'D5:.5 E5:.5 G5:1 A5:.5 G5:.5 E5:1 D5:.5 E5:.5 G5:.5 A5:.5 B5:2 '
				+ 'A5:.5 B5:.5 D6:1 B5:.5 A5:.5 G5:1 A5:.5 G5:.5 E5:.5 D5:.5 E5:2 '
				+ 'D5:.5 E5:.5 G5:1 A5:.5 G5:.5 E5:1 G5:.5 A5:.5 B5:.5 D6:.5 E6:2 '
				+ 'D6:.5 B5:.5 A5:1 G5:.5 E5:.5 D5:1 E5:.5 G5:.5 A5:.5 E5:.5 D5:2',
			) },
			{ wave: 'triangle', gain: 0.28, notes: seq(
				('D3:.5 D3:.5 A3:.5 D3:.5 G2:.5 G2:.5 D3:.5 G2:.5 '.repeat(2)
				+ 'C3:.5 C3:.5 G3:.5 C3:.5 D3:.5 D3:.5 A3:.5 D3:.5 '.repeat(2)).repeat(2),
			) },
			{ wave: 'pluck', gain: 0.08, notes: seq(
				('F#4:.5 A4:.5 D5:.5 A4:.5 G4:.5 B4:.5 D5:.5 B4:.5 '.repeat(2)
				+ 'G4:.5 C5:.5 E5:.5 C5:.5 F#4:.5 A4:.5 D5:.5 A4:.5 '.repeat(2)).repeat(2),
			) },
			{ wave: 'drum', gain: 0.3, notes: seq('K:.5 H:.5 S:.5 H:.5 K:.5 K:.5 S:.5 H:.5 '.repeat(8)) },
		],
	},
	gameover: {
		bpm: 84, loop: false,
		tracks: [
			{ wave: 'triangle', gain: 0.25, notes: seq('A5:.5 G5:.5 E5:.5 D5:.5 C5:1 A4:.5 B4:.5 C5:.5 B4:.5 A4:3') },
			{ wave: 'sine', gain: 0.25, notes: seq('A3:2 F3:2 E3:2 A2:3') },
		],
	},
	ranking: {
		bpm: 160, loop: false,
		tracks: [
			{ wave: 'square', gain: 0.14, notes: seq(
				'C5:.5 E5:.5 G5:.5 C6:1 G5:.5 C6:1.5 -:.5 A5:.5 B5:.5 C6:.5 D6:.5 E6:.5 D6:.5 C6:.5 D6:.5 E6:1 G6:3',
			) },
			{ wave: 'triangle', gain: 0.22, notes: seq('C3:1 G3:1 C3:1 G3:1 F3:1 G3:1 A3:1 B3:1 C4:1 G3:1 C4:3') },
			{ wave: 'pluck', gain: 0.12, notes: seq('E5:.5 G5:.5 '.repeat(8) + 'E5:.5 G5:.5 C6:3') },
			{ wave: 'drum', gain: 0.32, notes: seq('K:1 S:1 K:1 S:1 K:.5 K:.5 S:1 K:.5 S:.5 S:.5 S:.5 K:1 S:.5 S:.5 K:3') },
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
		const ctx = new (window.AudioContext || window.webkitAudioContext)();
		this.ctx = ctx;
		this.master = ctx.createGain();
		this.master.gain.value = this.muted ? 0 : 0.8;
		this.master.connect(ctx.destination);
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
		if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.8, this.ctx.currentTime, 0.05);
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
		if (wave === 'drum') {
			if (n === 'K') this.tone(140, t, 0.25, { slideTo: 45, gain: gain * 2.2, bus });
			else if (n === 'S') this.burstNoise(t, 0.2, { type: 'bandpass', f: 2200, gain: gain * 1.2, decay: 0.04, bus });
			else this.burstNoise(t, 0.06, { type: 'highpass', f: 7000, gain: gain * 0.6, decay: 0.015, bus });
			return;
		}
		const f = freq(n);
		if (wave === 'pluck') {
			this.tone(f, t, Math.min(0.6, dur * 1.5), { wave: 'triangle', gain, attack: 0.002, bus });
			this.tone(f * 2, t, 0.12, { wave: 'sine', gain: gain * 0.4, attack: 0.002, bus });
			return;
		}
		const ctx = this.ctx;
		const o = ctx.createOscillator();
		o.type = wave;
		o.frequency.value = f;
		const g = ctx.createGain();
		const end = t + dur * 0.92;
		g.gain.setValueAtTime(0, t);
		g.gain.linearRampToValueAtTime(gain, t + 0.015);
		g.gain.setValueAtTime(gain * 0.8, Math.max(t + 0.02, end - 0.05));
		g.gain.linearRampToValueAtTime(0, end);
		o.connect(g).connect(bus);
		o.start(t);
		o.stop(end + 0.02);
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
