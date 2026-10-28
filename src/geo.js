// 座標系ユーティリティ
// ワールド座標: 清水寺を原点とした局所座標 (x=東, y=上, z=南, 単位 m)
// 高さは標高(ジオイド高を差し引いた正標高)基準。
import { Matrix4, Vector3, MathUtils } from 'three';
import { WGS84_ELLIPSOID } from '3d-tiles-renderer';

// 京都付近のジオイド高 (国土地理院 ジオイド計算サービスより 37.46m)
export const GEOID_HEIGHT = 37.46;

// 清水の舞台
export const ORIGIN = { lat: 34.99482, lon: 135.78500 };

const enuToEcef = new Matrix4();
WGS84_ELLIPSOID.getEastNorthUpFrame(
	ORIGIN.lat * MathUtils.DEG2RAD,
	ORIGIN.lon * MathUtils.DEG2RAD,
	GEOID_HEIGHT,
	enuToEcef,
);

// ENU (x東, y北, z上) → three.js (x東, y上, z南)
const enuToWorld = new Matrix4().makeRotationX(-Math.PI / 2);

export const ecefToWorld = new Matrix4().copy(enuToWorld).multiply(enuToEcef.clone().invert());
export const worldToEcef = ecefToWorld.clone().invert();

const _v = new Vector3();
const _carto = {};

// 緯度経度(度) と 標高(m) → ワールド座標
export function geoToWorld(lat, lon, height, target = new Vector3()) {
	WGS84_ELLIPSOID.getCartographicToPosition(
		lat * MathUtils.DEG2RAD,
		lon * MathUtils.DEG2RAD,
		height + GEOID_HEIGHT,
		target,
	);
	return target.applyMatrix4(ecefToWorld);
}

// ワールド座標 → { lat, lon (度), height (標高 m) }
export function worldToGeo(pos, target = {}) {
	_v.copy(pos).applyMatrix4(worldToEcef);
	WGS84_ELLIPSOID.getPositionToCartographic(_v, _carto);
	target.lat = _carto.lat * MathUtils.RAD2DEG;
	target.lon = _carto.lon * MathUtils.RAD2DEG;
	target.height = _carto.height - GEOID_HEIGHT;
	return target;
}

// Web メルカトル タイル座標
export function lonToTileX(lon, z) {
	return (lon + 180) / 360 * 2 ** z;
}

export function latToTileY(lat, z) {
	const r = lat * MathUtils.DEG2RAD;
	return (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * 2 ** z;
}

export function tileXToLon(x, z) {
	return x / 2 ** z * 360 - 180;
}

export function tileYToLat(y, z) {
	const n = Math.PI - 2 * Math.PI * y / 2 ** z;
	return MathUtils.RAD2DEG * Math.atan(Math.sinh(n));
}
