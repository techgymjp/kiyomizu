# 清水の舞台から飛び降りるつもり

清水の舞台からハングライダーで飛び降りて、3D で再現した京都の空を飛び回る WEB ゲームです。

**遊ぶ:** https://techgymjp.github.io/kiyomizu/

## ルール

- 清水寺の舞台からスタート。地面か建物に降りたらゲーム終了。
- 京都の観光名所 40 か所にアドバルーンが色々な高さで浮かんでいます。割るとチェックポイント通過＆ジェット燃料 +5 秒。
- ジェットは好きなタイミングで使えます（押している間だけ噴射）。
- 光の粒が昇る場所は上昇気流。中で旋回すると高度を稼げます。
- **チェックポイント数**と**飛行距離**で競います（ランキングはブラウザに保存）。

## 操作

| キー | 操作 |
| --- | --- |
| ↑ / W | 機首上げ（上昇・減速） |
| ↓ / S | 機首下げ（下降・加速） |
| ← → / A D | 旋回 |
| Space / Shift | ジェット噴射 |
| C | 視点切替（パイロット目線 / 後方） |
| M | 音の ON/OFF |
| P / Esc | 一時停止 |

スマホではスティックと JET ボタンで操作できます。

## 使用データ（すべて無料・実データ）

| データ | 提供元 | 用途 |
| --- | --- | --- |
| 3D 都市モデル 京都市 建築物 (LOD1/LOD2, 3D Tiles, 2025年度) | [国土交通省 Project PLATEAU](https://www.mlit.go.jp/plateau/) | 京都市街の建物 |
| 標高タイル (dem_png) | [国土地理院 地理院タイル](https://maps.gsi.go.jp/development/ichiran.html) | 地形 |
| 全国最新写真（シームレス） | 国土地理院 地理院タイル | 地表の空中写真 |
| 淡色地図 | 国土地理院 地理院タイル | ミニマップ |

データはすべてブラウザから各提供元の配信サーバーへ直接読み込んでいます。
PLATEAU のデータは [PLATEAU Policy](https://www.mlit.go.jp/plateau/site-policy/)、地理院タイルは[国土地理院コンテンツ利用規約](https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html)に従い出典を表示しています。

## 開発

```bash
npm install
npm run dev
```

`main` ブランチへの push で GitHub Actions がビルドし、`gh-pages` ブランチへ公開します。

### 構成

- `src/main.js` — ゲームループ・状態管理・HUD・ミニマップ
- `src/terrain.js` — 地理院タイルから地形メッシュを生成（近くは高解像度写真に差し替え）
- `src/city.js` — PLATEAU 3D Tiles の読み込み（[3d-tiles-renderer](https://github.com/NASA-AMMOS/3DTilesRendererJS)）と建物との衝突判定
- `src/glider.js` — ハングライダーの飛行モデル（滑空比・失速・ジェット）
- `src/balloons.js` — アドバルーンと上昇気流
- `src/spots.js` — チェックポイント（観光名所）と上昇気流の位置
- `src/geo.js` — 緯度経度 ⇔ ワールド座標の変換（WGS84、ジオイド高補正）
