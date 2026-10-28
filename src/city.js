// PLATEAU (国土交通省) 京都市 3D都市モデル(建築物) の 3D Tiles を読み込む
import { Group } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { TilesRenderer } from '3d-tiles-renderer';
import { GLTFExtensionsPlugin } from '3d-tiles-renderer/plugins';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
import { BufferGeometry, Mesh, MeshLambertMaterial } from 'three';
import { ecefToWorld } from './geo.js';

BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
Mesh.prototype.raycast = acceleratedRaycast;

const BASE = 'https://assets.cms.plateau.reearth.io/assets/';

// 2025年度版 京都市 建築物モデル (区ごと)
export const WARDS = [
	{ name: '東山区', lod2: '25/dd4c50-5342-4a0b-ac51-05ffb138b8b5/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26105_higashiyama-ku_lod2', lod1: 'ce/6e26ee-9c98-4df7-bc06-4ea5049162c3/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26105_higashiyama-ku_lod1' },
	{ name: '下京区', lod2: 'f0/2ed501-5480-4ccb-8293-9469a3856f9a/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26106_shimogyo-ku_lod2', lod1: '64/f8be59-d43b-47fe-a7f0-ce936ae5bc8e/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26106_shimogyo-ku_lod1' },
	{ name: '中京区', lod2: '04/eaac56-936e-49e2-a91b-0db31a6ed192/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26104_nakagyo-ku_lod2', lod1: '65/c601e9-7ba9-42f2-8400-bd1ec5282421/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26104_nakagyo-ku_lod1' },
	{ name: '上京区', lod2: '71/0af6ab-875e-4c69-bb5e-9e06096e6fcb/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26102_kamigyo-ku_lod2', lod1: '7f/4d517a-10cc-4489-b1b2-5c754caa0561/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26102_kamigyo-ku_lod1' },
	{ name: '左京区', lod2: '96/d17b9d-5527-4610-90c8-9e9c44d500c3/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26103_sakyo-ku_lod2', lod1: '95/ec9c15-9c08-4c97-b073-029636f84818/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26103_sakyo-ku_lod1' },
	{ name: '北区', lod2: '7a/918715-89fb-4f45-a48a-a77ee6288577/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26101_kita-ku_lod2', lod1: 'e7/2aaaf0-1ab3-40e8-af5b-db3310fb4f15/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26101_kita-ku_lod1' },
	{ name: '南区', lod2: '1c/596e87-af58-4394-a4e7-ef429ba5732c/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26107_minami-ku_lod2', lod1: 'af/70c122-184c-46e7-8200-056f326851a9/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26107_minami-ku_lod1' },
	{ name: '右京区', lod2: '64/cf6354-e5ff-4ee4-84d6-1751734da17c/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26108_ukyo-ku_lod2', lod1: '1c/369350-e66e-4526-bdb0-ff014a15460e/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26108_ukyo-ku_lod1' },
	{ name: '伏見区', lod2: '6c/10f912-836b-483d-a6b2-881e298d7006/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26109_fushimi-ku_lod2', lod1: 'd2/d06236-cb09-4229-a086-469dac391966/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26109_fushimi-ku_lod1' },
	{ name: '山科区', lod1: 'ac/8c8272-b229-42b9-8091-fcace8039948/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26110_yamashina-ku_lod1' },
	{ name: '西京区', lod1: 'e4/bab58f-04c7-4673-a6c0-e36f58f5237f/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26111_nishikyo-ku_lod1' },
];

export class City {
	constructor(scene, camera, renderer, { quality = 'high' } = {}) {
		this.group = new Group();
		this.group.name = 'city';
		this.group.matrixAutoUpdate = false;
		this.group.matrix.copy(ecefToWorld);
		this.group.updateMatrixWorld(true);
		scene.add(this.group);

		this.camera = camera;
		this.renderer = renderer;
		this.tiles = [];

		const draco = new DRACOLoader();
		// Google が配信している Draco デコーダ
		draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

		for (const ward of WARDS) {
			const path = (quality === 'high' && ward.lod2) ? ward.lod2 : ward.lod1;
			const tiles = new TilesRenderer(`${BASE}${path}/tileset.json`);
			tiles.registerPlugin(new GLTFExtensionsPlugin({ dracoLoader: draco, rtc: true }));
			tiles.errorTarget = quality === 'high' ? 10 : 20;
			tiles.lruCache.minSize = 300;
			tiles.lruCache.maxSize = 1200;
			tiles.setCamera(camera);
			tiles.setResolutionFromRenderer(camera, renderer);
			tiles.addEventListener('load-model', ({ scene: model }) => {
				model.traverse((o) => {
					if (o.isMesh) {
						o.geometry.computeBoundsTree();
						// PLATEAU の材質は金属度が高く環境マップ無しでは暗いので Lambert に置き換える
						const old = o.material;
						o.material = new MeshLambertMaterial({ map: old.map, color: 0xe8e2d6 });
						// 壁面写真は暗めなので明るく補正
						if (old.map) o.material.color.setScalar(1.7);
						old.dispose();
					}
				});
			});
			tiles.addEventListener('dispose-model', ({ scene: model }) => {
				model.traverse((o) => o.isMesh && o.geometry.disposeBoundsTree?.());
			});
			this.group.add(tiles.group);
			this.tiles.push(tiles);
		}
	}

	update() {
		for (const t of this.tiles) {
			t.setResolutionFromRenderer(this.camera, this.renderer);
			t.update();
		}
	}

	// 建物への衝突判定に使う
	raycast(raycaster) {
		raycaster.firstHitOnly = true;
		let best = null;
		for (const t of this.tiles) {
			const hits = raycaster.intersectObject(t.group, true);
			if (hits.length && (!best || hits[0].distance < best.distance)) best = hits[0];
		}
		return best;
	}

	loading() {
		let n = 0;
		for (const t of this.tiles) n += t.stats.downloading + t.stats.parsing;
		return n;
	}
}
