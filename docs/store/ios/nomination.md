# App Store のノミネート(フィーチャー候補の推薦)文(下書き)

App Store Connect →「アプリ」→ 清水ダイブ →「ノミネート」→「ノミネートを作成」で入力します。
Apple の編集チームは世界中にいるので、説明は英語で書きます(日本語訳は確認用)。

| 欄 | 入力内容 |
| --- | --- |
| 名前(社内向けの管理名) | `Kiyomizu Dive - iOS launch` |
| タイプ | アプリのローンチ(App Launch) |
| 公開日 | App Store で公開した日(1.0.1 なら、その公開予定日) |
| 国または地域 | 日本を中心に、すべての国と地域(日本語・英語に対応) |
| 補足資料の URL | https://techgym.jp/column/claude-code-game-kiyomizu/ (ゲームの紹介記事) |

---

## 説明(英語。そのまま貼る)

```
Take the Plunge from Kiyomizu turns a famous Japanese saying, "jump off the stage of Kiyomizu" (take a bold leap), into a game: players hang-glide off the real stage of Kiyomizu-dera over Kyoto in autumn colors.

The whole Kyoto basin is rebuilt in 3D from open data: real terrain and aerial photos from Japan's Geospatial Information Authority and over 500,000 buildings from MLIT's Project PLATEAU, plus hand-made landmarks such as pagodas, temples and Kyoto Tower.

The goal is to pop ad balloons over 42 famous sights while playing tag with oni, ogres from Japanese folklore. Thermals and turbo boosts help them escape.

A single tap on the "Era" button time-slips the city to the early Showa era: old aerial photos, streetcars, the former Kyoto Station and townspeople in period dress, with Showa-style music.

Free, in Japanese and English, it is a playful way to explore Kyoto's geography and history, perfect for the autumn foliage season.
```

## 日本語訳(確認用)

清水の舞台から飛び降りるつもりは、「清水の舞台から飛び降りる(思い切って決断する)」という有名なことわざをゲームにしたものです。
本物の清水寺の舞台からハングライダーで飛び降り、紅葉の京都の空を飛びます。

京都盆地全体を、オープンデータから 3D で再現しました。国土地理院の本物の地形と空中写真、国土交通省 PLATEAU の 50 万棟以上の建物に、塔・寺・京都タワーなどの名所を手作りのモデルで加えています。

目標は、鬼(日本の昔話の妖怪)と鬼ごっこをしながら、42 か所の名所のアドバルーンを割ること。上昇気流とターボで逃げ切ります。

「時代」ボタンをひと押しすると、町が昭和初期にタイムスリップします。昔の空中写真、市電、二代目京都駅、当時の服装の町の人。BGM も昭和風に変わります。

無料で日本語と英語に対応。京都の地理と歴史を遊びながら楽しめ、紅葉の季節にぴったりです。

---

## メモ

- ノミネートは、公開の 3 か月〜2 週間前に出すのがよいとされています(すでに公開済みのアプリでも、アップデートや季節の話題で出せます)
- 京都の紅葉は 11 月中旬〜12 月上旬が見ごろなので、「紅葉の季節」は今の時期に合う話題です
- 事実と合っているかの根拠: 建物数 512,579 棟(`public/buildings/` を数えた値)、名所 42 か所(`src/spots.js`)、日本語・英語(`src/i18n.js`)
