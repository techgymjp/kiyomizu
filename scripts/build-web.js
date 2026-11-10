// Android アプリに同梱する Web ファイルを www/ に作る (Vite でビルド)
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'www');
// APP_BUILD=1: Web 版だけの部分 (Google Play へのリンクなど) を取り除く (vite.config.js)
execSync('npx vite build --outDir www --emptyOutDir', { cwd: root, stdio: 'inherit', env: { ...process.env, APP_BUILD: '1' } });
// 取り除けているかを確かめる。残っていたらビルドを止める
const leftovers = [];
const scan = (dir) => {
	for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, f.name);
		if (f.isDirectory()) scan(p);
		else if (/\.(html|js|css)$/.test(f.name)) {
			const text = fs.readFileSync(p, 'utf8');
			for (const word of ['play.google.com', 'web-only', 'store-link', '__kiyomizu']) if (text.includes(word)) leftovers.push(`${path.relative(out, p)}: ${word}`);
		}
	}
};
scan(out);
if (leftovers.length) {
	console.error(`Web 版だけの部分がアプリのビルドに残っています:\n${leftovers.join('\n')}`);
	process.exit(1);
}
// Google Play 用のビルドでは本番の広告を使う
const mode = process.env.ADMOB_MODE === 'production' ? 'production' : 'test';
fs.writeFileSync(path.join(out, 'ads-config.js'), `// ビルド時に生成\nwindow.AD_MODE = '${mode}';\n`);
// タイトル画面に出すバージョン（CI では VERSION_NAME / VERSION_CODE を使う）
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const version = process.env.VERSION_CODE
	? `v${process.env.VERSION_NAME || pkg.version} (build ${process.env.VERSION_CODE})`
	: 'dev';
fs.writeFileSync(path.join(out, 'build-info.js'), `// ビルド時に生成\nwindow.APP_VERSION = '${version}';\n`);
console.log(`built web assets into www/ (ads: ${mode}, version: ${version})`);
