import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IProduct {
    enum ProductType {
        NORMAL = "normal",
        COMBO = "combo",
        GIFT = "gift",
        VIRTUAL = "virtual",
        BUNDLED = "bundle"
    }
    interface IReqCreateProduct {
        tax_id?: number & tags.Type<'uint32'>;
        brand_id?: number & tags.Type<'uint32'>;
        manufacturer_id?: number & tags.Type<'uint32'>;
        image_id?: number & tags.Type<'uint32'>;
        categoryIds?: number[];
        collectionIds?: number[];
        tagIds?: number[];
        name: string;
        active?: boolean;
        barcode?: string;
        sku?: string;
        type?: ProductType;
        price?: number;
        salePrice?: number;
        originPrice?: number;
        icon?: string;
        userId?: string;
    }
    interface ICreateProduct extends IReqCreateProduct {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateProduct {
        tax_id?: number & tags.Type<'uint32'>;
        shop_id?: number & tags.Type<'uint32'>;
        brand_id?: number & tags.Type<'uint32'>;
        manufacturer_id?: number & tags.Type<'uint32'>;
        image_id?: number & tags.Type<'uint32'>;
        categoryIds?: number[];
        collectionIds?: number[];
        tagIds?: number[];
        name?: string;
        active?: boolean;
        type?: ProductType;
        price?: number;
        salePrice?: number;
        originPrice?: number;
        icon?: string;
        userId?: string;
    }
    interface ITagReponse {
        id: string | number | null;
        name: string;
    }
    interface ICategoryReponse {
        id: string | number | null;
        name: string;
    }
    interface ICollectionReponse {
        id: string | number | null;
        name: string;
    }
    interface IProductResponse extends BaseResponse {
        tax_id: string | number | null;
        shop_id: string | number | null;
        manufacturer_id: string | number | null;
        brand_id: string | number | null;
        image_id: string | number | null;
        barcode?: string;
        sku?: string;
        name: string;
        active: boolean;
        type: string;
        icon?: string;
        lowLimit: number | string | null;
        isFeature: boolean;
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
        totalInventory: string | number | null;
        availableStock: string | number | null;
        productSlug: string | number | null;
        ordered: number;
        liked: number;
        price: string | number | null;
        originPrice: string | number | null;
        salePrice: string | number | null;
        categories: ICategoryReponse[];
        collections: ICollectionReponse[];
        tags: ITagReponse[];
    }
}
