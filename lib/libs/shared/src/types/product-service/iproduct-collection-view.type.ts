/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';

export namespace IProductCollectionView {
	export interface IFilterById {
		shop_id: number & tags.Type<'uint64'>;
		id: string;
	}

	export interface IFilterByCollectionIds {
		shop_id: number & tags.Type<'uint64'>;
		collectionIds: string;
	}

	export interface IProductCollectionViewResponse {
		shop_id: number | string | null;
		collection_id: number | string | null;
		product_id?: number | string | null;
		condition_referent_id?: number | string | null;
		collectionName: string;
		referentType?: string | null;
		conditionValue?: string | null;
	}
}
