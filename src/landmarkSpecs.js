// 名所の建物を実物に似せて作るための定義
// lat/lon の位置にある PLATEAU の建物の外形に合わせて形を作る (向き・大きさは実物どおり)。
// 外形が見つからない、または合わない場合は free の寸法 (幅 w・奥行 d・高さ h・向き deg) で建てる。
// kind: hall(本堂) / shrine(社殿) / gate(楼門・三門) / pagoda(塔) / kinkaku / ginkaku / tower
// roof: gray(瓦) / hiwada(檜皮葺) / green(緑青の銅板・緑釉瓦)   wall: wood / vermilion / white
export const LANDMARK_SPECS = [
	{ name: '清水寺 本堂', lat: 34.99482, lon: 135.78500, kind: 'hall', roof: 'hiwada', wall: 'wood' },
	{ name: '清水寺 仁王門', lat: 34.99600, lon: 135.78365, kind: 'gate', wall: 'vermilion', free: { w: 10, d: 5, h: 14, deg: 0 } },
	{ name: '清水寺 三重塔', lat: 34.99507, lon: 135.78383, kind: 'pagoda', tiers: 3, wall: 'vermilion', free: { w: 6, h: 31, deg: 0 } },
	{ name: '八坂の塔', lat: 34.99855, lon: 135.77924, kind: 'pagoda', tiers: 5, wall: 'wood', free: { w: 6.4, h: 46, deg: 0 } },
	{ name: '八坂神社 西楼門', lat: 35.00363, lon: 135.77795, kind: 'gate', wall: 'vermilion', free: { w: 10, d: 6, h: 12, deg: 0 } },
	{ name: '八坂神社 本殿', lat: 35.00370, lon: 135.77880, kind: 'shrine', roof: 'hiwada' },
	{ name: '知恩院 三門', lat: 35.00470, lon: 135.78130, kind: 'gate', wall: 'wood', free: { w: 50, d: 17, h: 24, deg: 0 } },
	{ name: '知恩院 御影堂', lat: 35.00553, lon: 135.78329, kind: 'hall', roof: 'gray', wall: 'wood' },
	{ name: '南禅寺 三門', lat: 35.01110, lon: 135.79300, kind: 'gate', wall: 'wood', free: { w: 27, d: 12, h: 22, deg: 0 } },
	{ name: '南禅寺 法堂', lat: 35.01128, lon: 135.79414, kind: 'hall', roof: 'gray', wall: 'wood' },
	{ name: '平安神宮 大極殿', lat: 35.01600, lon: 135.78245, kind: 'shrine', roof: 'green' },
	{ name: '平安神宮 応天門', lat: 35.01490, lon: 135.78245, kind: 'gate', wall: 'vermilion', roof: 'green', free: { w: 30, d: 12, h: 18, deg: 0 } },
	{ name: '銀閣寺', lat: 35.02701, lon: 135.79817, kind: 'ginkaku', free: { w: 8, d: 7, h: 9, deg: 0 } },
	{ name: '金閣寺', lat: 35.03937, lon: 135.72924, kind: 'kinkaku', free: { w: 15, d: 12, h: 12.5, deg: 0 } },
	{ name: '三十三間堂', lat: 34.98790, lon: 135.77170, kind: 'hall', roof: 'gray', wall: 'vermilion' },
	{ name: '東寺 五重塔', lat: 34.97988, lon: 135.74872, kind: 'pagoda', tiers: 5, wall: 'wood', free: { w: 9.5, h: 55, deg: 0 } },
	{ name: '東寺 金堂', lat: 34.98095, lon: 135.74705, kind: 'hall', roof: 'gray', wall: 'wood' },
	{ name: '東本願寺 御影堂', lat: 34.99110, lon: 135.75820, kind: 'hall', roof: 'gray', wall: 'wood' },
	{ name: '西本願寺 御影堂', lat: 34.99170, lon: 135.75160, kind: 'hall', roof: 'gray', wall: 'wood' },
	{ name: '伏見稲荷 楼門', lat: 34.96707, lon: 135.77190, kind: 'gate', wall: 'vermilion', free: { w: 13, d: 7, h: 15, deg: 0 } },
	{ name: '伏見稲荷 本殿', lat: 34.96720, lon: 135.77280, kind: 'shrine', roof: 'hiwada' },
	{ name: '北野天満宮', lat: 35.03124, lon: 135.73514, kind: 'shrine', roof: 'hiwada' },
	{ name: '下鴨神社 楼門', lat: 35.03899, lon: 135.77297, kind: 'gate', wall: 'vermilion', roof: 'hiwada', free: { w: 12, d: 7, h: 13, deg: 0 } },
	{ name: '上賀茂神社', lat: 35.06000, lon: 135.75250, kind: 'shrine', roof: 'hiwada' },
	{ name: '二条城 二の丸御殿', lat: 35.01420, lon: 135.74820, kind: 'hall', roof: 'gray', wall: 'white' },
	{ name: '京都御所 紫宸殿', lat: 35.02537, lon: 135.76216, kind: 'hall', roof: 'hiwada', wall: 'white' },
	{ name: '東福寺 三門', lat: 34.97707, lon: 135.77240, kind: 'gate', wall: 'vermilion' },
	{ name: '天龍寺', lat: 35.01570, lon: 135.67380, kind: 'hall', roof: 'gray', wall: 'white' },
	{ name: '仁和寺 五重塔', lat: 35.03024, lon: 135.71439, kind: 'pagoda', tiers: 5, wall: 'wood', free: { w: 6, h: 36, deg: 0 } },
	{ name: '醍醐寺 五重塔', lat: 34.94968, lon: 135.82103, kind: 'pagoda', tiers: 5, wall: 'vermilion', free: { w: 6.6, h: 38, deg: 0 } },
	{ name: '京都タワー', lat: 34.98756, lon: 135.75928, kind: 'tower' },
	{ name: '大徳寺', lat: 35.04400, lon: 135.74600, kind: 'hall', roof: 'gray', wall: 'wood' },
	{ name: '龍安寺', lat: 35.03448, lon: 135.71825, kind: 'hall', roof: 'hiwada', wall: 'white' },
];

// 建物以外の名所の目印 (大鳥居・千本鳥居・渡月橋)
export const TORII = [{ name: '平安神宮 大鳥居', lat: 35.01224, lon: 135.78226, width: 18, height: 24, deg: 90 }];

export const SENBON_TORII = [
	[34.96745, 135.77370], [34.96770, 135.77480], [34.96800, 135.77560], [34.96760, 135.77640], [34.96700, 135.77700],
	[34.96640, 135.77780], [34.96560, 135.77850], [34.96450, 135.77950], [34.96400, 135.78100], [34.96380, 135.78300],
];

export const TOGETSUKYO = { from: [35.01392, 135.67766], to: [35.01258, 135.67782], width: 11 };
