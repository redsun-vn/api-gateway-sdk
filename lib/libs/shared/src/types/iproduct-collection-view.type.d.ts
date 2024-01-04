import { tags } from 'typia';
export declare namespace IProductCollectionView {
    interface IFilterById {
        shop_id: number & tags.Type<'uint32'>;
        id: string;
    }
    interface IFilterByCollectionIds {
        shop_id: number & tags.Type<'uint32'>;
        collectionIds: string;
    }
    interface IProductCollectionViewResponse {
        shop_id: number | string | null;
        collection_id: number | string | null;
        product_id?: number | string | null;
        condition_referent_id?: number | string | null;
        collectionName: string;
        referentType?: string | null;
        conditionValue?: string | null;
    }
}
