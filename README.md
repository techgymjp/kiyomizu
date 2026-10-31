# 清水の舞台から飛び降りるつもり

清水の舞台からハングライダーで飛び降りて、3D で再現した京都の空を飛び回る WEB ゲームです。

**遊ぶ:** https://techgymjp.github.io/kiyomizu/

日本語と英語に対応しています (ブラウザの言語で自動切り替え。タイトル画面の「言語 / Language」でも変更できます)。

## ルール

- 清水寺の舞台からスタートする **鬼ごっこ**。京都の名所のまわりを鬼が20匹徘徊していて、450m 以内に近づくと見つかって追いかけてきます (600m 離れると見失う)。捕まったら負け。アドバルーンを1個割るごとに、まだ割っていない名所の見張りの鬼が1匹増え (最大62匹)、時間がたつと速くなります。
- 名所のアドバルーンを **全部割ったらクリア**。地面か建物に降りてもゲーム終了。
- 舞台は紅葉シーズンの秋晴れの京都。街路樹も色づいています。名所には和服の観光客や舞妓さん、たまにお侍さんが歩いていて、近くを飛ぶと立ち止まって見上げます。
- 名所の建物 (清水寺・八坂の塔・金閣と鏡湖池・銀閣・平安神宮・東寺五重塔・千本鳥居・渡月橋 など) は実物に似せて作り込んであります。
- **今昔タイムスリップ**: 飛んでいる途中でも T キー (スマホは「時代」ボタン) で現代 ⇔ 昭和初期を切り替えられます。昭和初期は終戦直後の空中写真に色をつけた地表と木造の低い町並みで、京都タワーは無く、市電が走り、木の電柱・銭湯の煙突・屋上のアドバルーン・二代目京都駅があり、モボ・モガ・学生・人力車が行き交います。
- BGM は現代が雅楽風 (笙・篳篥・龍笛・鞨鼓・太鼓・鉦鼓)、昭和初期が流行歌風 (クラリネット・アコーディオン・ウッドベース・ブラシのドラム)。
- 右上のワイプには、前方から自分を映した映像が常に表示されます。
- 京都の観光名所 42 か所 (鞍馬寺・貴船神社を含む) にアドバルーンが色々な高さで浮かんでいます。割るとチェックポイント通過、花火が上がってターボ +1。
- ターボは最初 1 つ。好きなタイミングで使えます（押している間だけ噴射、1つ 5 秒）。
- 光の粒が昇る場所は上昇気流。中で旋回すると高度を稼げます。
- **チェックポイント数**と**飛行距離**で競います（ランキングはブラウザに保存）。

## 操作

| キー | 操作 |
| --- | --- |
| ↑ / W | 機首上げ（上昇・減速） |
| ↓ / S | 機首下げ（下降・加速） |
| ← → / A D | 旋回 |
| Space / Shift | ターボ噴射 |
| C | 視点切替（後方視点 / パイロット目線） |
| T | 時代の切り替え（現代 ⇔ 昭和初期） |
| M | 音の ON/OFF |
| P / Esc | 一時停止 |

スマホではスティックとターボ・視点・時代のボタンで操作できます。

## 使用データ（すべて無料・実データ）

| データ | 提供元 | 用途 |
| --- | --- | --- |
| 3D 都市モデル 京都市 建築物 (LOD1, 3D Tiles, 2025年度) | [国土交通省 Project PLATEAU](https://www.mlit.go.jp/plateau/) | 京都市街の建物の外形・高さ |
| 標高タイル (dem_png) | [国土地理院 地理院タイル](https://maps.gsi.go.jp/development/ichiran.html) | 地形 |
| 全国最新写真（シームレス） | 国土地理院 地理院タイル | 地表の空中写真 |
| 淡色地図 | 国土地理院 地理院タイル | ミニマップ |
| 米軍撮影空中写真 (1945〜1950年) | 国土地理院 地理院タイル | 昭和初期モードの地表 |
| ベクトルタイル (道路中心線) | 国土地理院 地理院タイル | 街路樹の配置 |

建物は PLATEAU のデータから外形・高さ・種別だけを取り出した軽量データ（`public/buildings/`）を同梱し、
ゲーム内で瓦屋根・壁・窓をつけて描き直しています。地形・空中写真は国土地理院の配信サーバーから直接読み込みます。
PLATEAU のデータは [PLATEAU Policy](https://www.mlit.go.jp/plateau/site-policy/)、地理院タイルは[国土地理院コンテンツ利用規約](https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html)に従い出典を表示しています。

## Android アプリ

[Capacitor](https://capacitorjs.com/) でゲームのファイルをアプリに同梱し、Android アプリにしています。
構成は techgymjp/jet-fighter の `docs/ANDROID_PORTING.md` と同じです(techgymjp/jackal の広告のしくみを使っています)。
建物などのデータはアプリに入っていますが、地形と空中写真は遊びながら国土地理院から読み込むので、インターネット接続が必要です。

- パッケージ名: `jp.techgym.kiyomizu`(ホーム画面の名前: 清水ダイブ / Kiyomizu Dive)
- 縦画面固定・全画面・プレイ中は画面を消さない
- 戻るボタン: 飛行中は一時停止(一時停止中なら再開)、遊び方・ランキングはタイトルへ、タイトル・結果画面ではアプリを終了
- 別アプリに切り替えると自動で一時停止して音を止める
- シェアは Android の共有メニュー
- 遊び方は、キーではなく画面のボタンで説明する
- 広告(AdMob)
  - バナー: タイトル・遊び方・一時停止・結果の画面の下中央(飛行中は操作ボタンと重なるので出さない)
  - 全画面広告(インタースティシャル): 「飛び降りる」「もう一度飛び降りる」「タイトル」(結果・一時停止から)、遊び方の「OK」、一時停止からの「再開」のたびに毎回
  - リワード広告(チート): ぶつかったり鬼に捕まったりしたら「広告を見て続きから飛ぶ」(1 ゲーム 3 回まで)。
    失敗の様子を見届けられるよう 2.5 秒後に出し、6 秒で自動的に結果画面へ。見終わると約 4 秒前の場所の少し上から飛び直し、
    追いかけていた鬼は持ち場に戻る(5 秒間は見つからない)。使った回数は結果画面とシェア文に「コンティニューN回」と出る
  - EU など同意が必要な地域ではタイトル画面に「広告の設定」
- タイトル画面にバージョン(ビルド番号)とプライバシーポリシーへのリンク

ビルドは GitHub Actions(`.github/workflows/android.yml`)で行います。

1. `npm ci` → `npm run build:app`(Vite で `www/` に書き出し、`ads-config.js` と `build-info.js` を生成)→ `npx cap sync android` → `./gradlew assembleDebug`
2. 既定ブランチなら、Release `android-latest` の `kiyomizu.apk` を差し替え(動作確認用・テスト広告)
   - リリース画面: https://github.com/techgymjp/kiyomizu/releases/tag/android-latest
   - APK 直接: https://github.com/techgymjp/kiyomizu/releases/latest/download/kiyomizu.apk
3. GitHub Secrets に署名鍵(`ANDROID_KEYSTORE_BASE64` / `ANDROID_KEYSTORE_PASSWORD` / `ANDROID_KEY_ALIAS` / `ANDROID_KEY_PASSWORD`)があれば、本番広告で署名付き AAB を作り Artifact に上げる

![動作確認用 APK のリリース画面の QR コード](docs/apk-qr.png)

AdMob のアプリ ID は `android/app/src/main/res/values/strings.xml` の `admob_app_id`(いまは Google のテスト用)、本番の広告ユニット ID は `src/ads.js` の `UNITS.android.production` にあります。
動作確認用 APK はどれもテスト広告、Google Play 用の AAB は本番の広告です(広告ユニット ID が空の種類は出さない)。

手元で試すとき: `npm install` → `npm run android:sync` → `npm run android:open`(Android Studio が必要)。
アイコンと起動画面は `assets/` の元画像から `npx @capacitor/assets generate --android` で生成しています。
ストア用の画像と紹介文は `docs/store/` にあります。

## ライセンス

このリポジトリの内容の著作権はテックジム株式会社に帰属します(All rights reserved)。許可なく複製・改変・再配布すること、
Web サイトやアプリ(Google Play など)として公開・販売すること、名前・アイコン・画像を使うことを禁止します。
テックジムの受講生が学習目的で複製・改変することは許可しますが、アプリストアでの公開・広告の掲載・販売などの商用利用は禁止し、著作権表示を残してください。
three.js などのライブラリと、国土地理院・PLATEAU のデータは、それぞれのライセンス・利用規約に従います。詳しくは `LICENSE` を見てください。

## 開発

```bash
npm install
npm run dev
```

`main`（または `claude/funny-maxwell-44oft1`）ブランチへの push で GitHub Actions がビルドし、`gh-pages` ブランチへ公開します。

### 構成

- `src/main.js` — ゲームループ・状態管理・HUD・ミニマップ
- `src/terrain.js` — 地理院タイルから地形メッシュを生成（近くは高解像度写真に差し替え）
- `tools/build-buildings.mjs` — PLATEAU の 3D Tiles から軽量な建物データを生成（`node tools/build-buildings.mjs`）
- `src/buildings.js` / `src/buildingMesh.js` / `src/atlas.js` — 建物データの読み込み・屋根や壁の生成・テクスチャ・衝突判定
- `tools/build-trees.mjs` — 道路中心線から街路樹の配置データを生成（`public/trees/`）
- `src/landmarkSpecs.js` / `src/props.js` — 名所の建物の定義、大鳥居・千本鳥居・渡月橋
- `src/oni.js` — 鬼ごっこの鬼
- `src/showa.js` — 昭和初期の町並み (市電・電柱・銭湯の煙突・屋上のアドバルーン・二代目京都駅)
- `src/people.js` — 名所を歩く人 (観光客・舞妓さん・お侍さん / 昭和はモボ・モガ・学生・人力車)
- `src/audio.js` — BGM と効果音 (WebAudio で合成)
- `src/glider.js` — ハングライダーとパイロットのモデル、飛行モデル（滑空比・失速・ジェット）
- `src/balloons.js` — アドバルーンと上昇気流
- `src/spots.js` — チェックポイント（観光名所）と上昇気流の位置
- `src/geo.js` — 緯度経度 ⇔ ワールド座標の変換（WGS84、ジオイド高補正）
- `src/i18n.js` — 日本語 / 英語の文章
- `src/ads.js` — AdMob 広告 (Android アプリのみ)
- `android/` / `capacitor.config.json` / `scripts/build-web.js` — Android アプリ
