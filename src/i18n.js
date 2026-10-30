// 日本語 / 英語の切り替え
// 言語は保存した設定 → ブラウザの言語 の順に決める。ページ内の文章は data-i18n の要素を差し替える

const saved = (() => {
	try {
		return localStorage.getItem('kiyomizu-lang');
	} catch {
		return null;
	}
})();
export const lang = saved === 'ja' || saved === 'en'
	? saved
	: (navigator.languages?.[0] ?? navigator.language ?? 'ja').toLowerCase().startsWith('ja') ? 'ja' : 'en';

// ゲーム中に出る文章
const STR = {
	ja: {
		start: '🎌 清水の舞台 🎌\nターボ ×1 で出発！',
		hintTouch: '画面をタップで飛び降りる！',
		hintKey: 'スペースキーで飛び降りる！',
		jump: 'とうっ！\n清水の舞台から\n飛び降りた！',
		visited: (list) => `通過: ${list.join(' → ')}`,
		noBalloons: 'アドバルーンは割れなかった…',
		save: '記録する',
		saved: '記録しました',
		anonymous: '名無しの参拝者',
		share: (km, n) => `清水の舞台から飛び降りるつもりで、紅葉の京都の空を ${km}km 飛んでアドバルーンを ${n} 個割った！🎈`,
		hashtag: '清水の舞台から飛び降りるつもり',
		noRecords: 'まだ記録がありません',
		chasing: (n) => (n > 1 ? ` ・追跡中×${n}` : ' ・追跡中'),
		toShowa: '⏳ 昭和初期へ\nタイムスリップ！',
		toNow: '⏳ 現代に\nもどってきた！',
		landed: ['着陸！', '地面に降り立ちました。'],
		roof: ['屋根に着地！', '建物の屋根に降り立ちました。'],
		crash: ['ドーン！', '建物にぶつかってしまいました。'],
		outside: ['京都の外へ…', '京都盆地を飛び出してしまいました。'],
		clear: ['🏯 全制覇！ 🏯', '京都の名所をすべてめぐりました！ 鬼からも逃げ切った！'],
		caught: ['つかまった！', '鬼に捕まってしまいました… 👹'],
		checkpoint: (name) => `🎆 チェックポイント！ 🎆\n${name}\nターボ +1 🚀`,
		moreOni: (n) => `\n👹 見張りの鬼が増えた！ (${n}匹)`,
		spawned: (n) => `👹 鬼が${n}匹、京都を徘徊中…\n見つからないように！`,
		foundMany: (n) => `👹 鬼${n}匹に見つかった！`,
		found: '👹 鬼に見つかった！\n逃げろ〜！',
		noTurbo: 'ターボ切れ！',
		thermal: '✨ 上昇気流！',
		loadingTown: '紅葉の京都の街並みを組み立て中…',
		loadFailed: (m) => `読み込みに失敗しました: ${m}`,
	},
	en: {
		start: '🎌 The Kiyomizu Stage 🎌\nStarting with Turbo ×1!',
		hintTouch: 'Tap the screen to jump!',
		hintKey: 'Press Space to jump!',
		jump: 'Here goes!\nLeaping off the\nKiyomizu stage!',
		visited: (list) => `Visited: ${list.join(' → ')}`,
		noBalloons: 'No balloons popped…',
		save: 'Save',
		saved: 'Saved',
		anonymous: 'Nameless Pilgrim',
		share: (km, n) => `I took the plunge from the Kiyomizu stage, flew ${km} km over autumn Kyoto and popped ${n} balloons! 🎈`,
		hashtag: 'KiyomizuDive',
		noRecords: 'No records yet',
		chasing: (n) => (n > 1 ? ` ・Chasing ×${n}` : ' ・Chasing'),
		toShowa: '⏳ Time slip to\nthe early Showa era!',
		toNow: '⏳ Back to\nthe present!',
		landed: ['Landed!', 'You touched down on the ground.'],
		roof: ['Roof landing!', 'You landed on a rooftop.'],
		crash: ['Bang!', 'You crashed into a building.'],
		outside: ['Out of Kyoto…', 'You flew out of the Kyoto basin.'],
		clear: ['🏯 All clear! 🏯', 'You visited every sight in Kyoto and escaped the oni!'],
		caught: ['Caught!', 'The oni got you… 👹'],
		checkpoint: (name) => `🎆 Checkpoint! 🎆\n${name}\nTurbo +1 🚀`,
		moreOni: (n) => `\n👹 Another oni is on watch! (${n})`,
		spawned: (n) => `👹 ${n} oni are roaming Kyoto…\nDon't get spotted!`,
		foundMany: (n) => `👹 ${n} oni spotted you!`,
		found: '👹 An oni spotted you!\nRun!',
		noTurbo: 'Out of turbo!',
		thermal: '✨ Thermal!',
		loadingTown: 'Building the autumn streets of Kyoto…',
		loadFailed: (m) => `Failed to load: ${m}`,
	},
};

// L('key', ...引数) で文章を返す
export function L(key, ...args) {
	const v = STR[lang][key] ?? STR.ja[key];
	return typeof v === 'function' ? v(...args) : v;
}

// 観光名所の名前
export function spotName(spot) {
	return lang === 'en' && spot.en ? spot.en : spot.name;
}

// index.html の data-i18n="キー" の要素を英語に差し替える (日本語は HTML のまま)
const HTML_EN = {
	l1: 'Take the plunge from',
	l2: [...'KIYOMIZU'].map((c) => `<b>${c}</b>`).join(''),
	lead: 'Hang-glide off the Kiyomizu stage!<br />Play <b>oni tag</b> 👹 in the autumn skies of Kyoto.<br />Escape the oni and pop every ad balloon over the sights! 🎈',
	loading: 'Loading the terrain of Kyoto…',
	start: '🪂 Jump!',
	ranking: '🏆 Ranking',
	howto: '❓ How to play',
	quality: 'Graphics',
	qLow: 'Light (no shadows, recommended)',
	qHigh: 'Pretty (shadows, heavy)',
	era: 'Era',
	eraNow: 'Today',
	eraShowa: 'Early Showa',
	lang: 'Language',
	mute: 'Mute',
	credit: 'Terrain & aerial photos: <a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">GSI Tiles (Geospatial Information Authority of Japan)</a> / Buildings: based on <a href="https://www.mlit.go.jp/plateau/" target="_blank" rel="noopener">MLIT Project PLATEAU</a> (Kyoto City 3D city model)',
	creditHud: 'Terrain & photos: GSI Japan / Buildings: based on MLIT Project PLATEAU',
	height: 'Height',
	speed: 'Speed',
	climb: 'Climb',
	alt: 'Alt.',
	wipe: '● Front cam',
	oni: '👹 Oni',
	turbo: '🚀 Turbo',
	turboKeys: 'Space / Shift: boost ・ T: era',
	stall: '⚠ Stall! Press ↓ to dive!',
	touchJet: '🚀<br />Turbo',
	touchCam: 'View',
	touchEra: 'Era',
	howtoTitle: '❓ How to play',
	howtoList: [
		['👹', '<b>Oni tag!</b> 20 oni roam around the sights of Kyoto. Get close and they spot you and give chase. If they catch you, you lose. Each balloon you pop adds another oni, and they get faster over time'],
		['🎯', 'Pop the ad balloons over the sights to pass checkpoints! Fireworks go up and you get <b>Turbo +1</b>. Pop them all to clear the game'],
		['↑ ↓', '↑ to climb, ↓ to dive (speed up)'],
		['← →', 'Turn left / right'],
		['Space', 'Turbo boost (while held). You start with <b>1</b> and get more from balloons'],
		['C', 'Switch view (chase cam ⇔ pilot view)'],
		['T', 'Time slip between <b>today ⇔ early Showa</b> mid-flight! See streetcars, bathhouse chimneys and the old Kyoto Station (on phones: the "Era" button)'],
		['M / P', 'Sound on/off / Pause'],
		['✨', 'Where sparkles rise there is a <b>thermal</b>. Circle inside it to gain height'],
		['⚠', 'Touch the ground or a building and the game ends. Fly too slowly and you stall!'],
		['📱', 'On phones, steer with the stick at the bottom left and boost with the button on the right'],
	].map(([k, v]) => `<li><span class="key">${k}</span><span>${v}</span></li>`).join(''),
	ok: 'OK!',
	rankingTitle: '🏆 Ranking <small>(this device)</small>',
	rankingHead: '<tr><th>#</th><th>Name</th><th>🎈</th><th>Distance</th><th>Date</th></tr>',
	close: 'Close',
	rankBanner: '🎉 Rank #<span id="rank-no">1</span>! 🎉',
	cp: '🎈 Checkpoints',
	dist: '📏 Distance',
	time: '⏱ Time',
	retry: '🪂 Jump again',
	share: '𝕏 Share',
	toTitle: '🏠 Title',
	pause: '⏸ Paused',
	resume: 'Resume (P)',
};

export function applyStatic() {
	document.documentElement.lang = lang;
	if (lang === 'ja') return;
	document.title = 'Take the Plunge from Kiyomizu';
	for (const el of document.querySelectorAll('[data-i18n]')) {
		const v = HTML_EN[el.dataset.i18n];
		if (v !== undefined) el.innerHTML = v;
	}
	for (const el of document.querySelectorAll('[data-i18n-placeholder]')) {
		el.placeholder = 'Name';
	}
	document.body.classList.add('lang-en');
}
