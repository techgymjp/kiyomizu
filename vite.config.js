import { defineConfig } from 'vite';

// アプリ用のビルド (npm run build:app。APP_BUILD=1) では、Web 版だけの部分 (Google Play へのリンク・デバッグ用の入口) を取り除く。
// 目印: HTML は <!-- web-only --> … <!-- /web-only -->、JS は // web-only:start … // web-only:end、CSS は /* web-only:start */ … /* web-only:end */
// アプリの中で隠すのではなく、最初から入れない (App Store の審査で「審査中に隠した機能」と見られないように)
const APP_BUILD = process.env.APP_BUILD === '1';
const stripCode = (code) => code
	.replace(/[ \t]*\/\/ web-only:start[\s\S]*?\/\/ web-only:end[^\n]*\n?/g, '')
	.replace(/[ \t]*\/\* web-only:start \*\/[\s\S]*?\/\* web-only:end \*\/[^\n]*\n?/g, '');

const stripWebOnly = {
	name: 'strip-web-only',
	enforce: 'pre',
	transform(code, id) {
		if (!APP_BUILD || !/\.(js|css)$/.test(id.split('?')[0]) || !code.includes('web-only:start')) return null;
		return { code: stripCode(code), map: null };
	},
	transformIndexHtml: {
		order: 'pre',
		handler: (html) => (APP_BUILD ? html.replace(/[ \t]*<!-- web-only -->[\s\S]*?<!-- \/web-only -->[^\n]*\n?/g, '') : html),
	},
};

export default defineConfig({
	base: './',
	plugins: [stripWebOnly],
	build: { chunkSizeWarningLimit: 2000 },
});
