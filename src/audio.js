// WebAudio で合成する効果音 (外部音源なし)
export class Sound {
	constructor() {
		this.ctx = null;
		this.muted = false;
	}

	init() {
		if (this.ctx) return;
		const ctx = new (window.AudioContext || window.webkitAudioContext)();
		this.ctx = ctx;
		this.master = ctx.createGain();
		this.master.gain.value = this.muted ? 0 : 0.8;
		this.master.connect(ctx.destination);

		// 風切り音: フィルタしたホワイトノイズ
		const noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
		const d = noise.getChannelData(0);
		for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
		const make = (type, freq) => {
			const src = ctx.createBufferSource();
			src.buffer = noise;
			src.loop = true;
			const filter = ctx.createBiquadFilter();
			filter.type = type;
			filter.frequency.value = freq;
			const gain = ctx.createGain();
			gain.gain.value = 0;
			src.connect(filter).connect(gain).connect(this.master);
			src.start();
			return { filter, gain };
		};
		this.wind = make('bandpass', 500);
		this.wind.filter.Q.value = 0.7;
		this.jet = make('lowpass', 900);
	}

	setMuted(m) {
		this.muted = m;
		if (this.master) this.master.gain.value = m ? 0 : 0.8;
	}

	update(speed, jetting, active) {
		if (!this.ctx) return;
		const t = this.ctx.currentTime;
		const w = active ? Math.min(0.5, speed / 120) : 0;
		this.wind.gain.gain.setTargetAtTime(w, t, 0.2);
		this.wind.filter.frequency.setTargetAtTime(300 + speed * 15, t, 0.2);
		this.jet.gain.gain.setTargetAtTime(active && jetting ? 0.7 : 0, t, 0.08);
	}

	pop() {
		if (!this.ctx) return;
		const ctx = this.ctx, t = ctx.currentTime;
		// 破裂音
		const buf = ctx.createBuffer(1, ctx.sampleRate * 0.25, ctx.sampleRate);
		const d = buf.getChannelData(0);
		for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.03));
		const src = ctx.createBufferSource();
		src.buffer = buf;
		const g = ctx.createGain();
		g.gain.value = 1.2;
		src.connect(g).connect(this.master);
		src.start(t);
		// チャイム
		[880, 1318.5, 1760].forEach((f, i) => {
			const o = ctx.createOscillator();
			o.type = 'triangle';
			o.frequency.value = f;
			const og = ctx.createGain();
			og.gain.setValueAtTime(0, t + 0.08 + i * 0.09);
			og.gain.linearRampToValueAtTime(0.25, t + 0.1 + i * 0.09);
			og.gain.exponentialRampToValueAtTime(0.001, t + 0.7 + i * 0.09);
			o.connect(og).connect(this.master);
			o.start(t + 0.08 + i * 0.09);
			o.stop(t + 0.8 + i * 0.09);
		});
	}

	crash() {
		if (!this.ctx) return;
		const ctx = this.ctx, t = ctx.currentTime;
		const buf = ctx.createBuffer(1, ctx.sampleRate * 0.8, ctx.sampleRate);
		const d = buf.getChannelData(0);
		for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.15));
		const src = ctx.createBufferSource();
		src.buffer = buf;
		const f = ctx.createBiquadFilter();
		f.type = 'lowpass';
		f.frequency.value = 400;
		src.connect(f).connect(this.master);
		src.start(t);
	}
}
