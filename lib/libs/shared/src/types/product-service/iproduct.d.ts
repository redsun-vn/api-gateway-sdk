import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IVariant } from './ivariant';
import { ITax } from './itax';
import { IManufacturer } from './imanufacturer';
import { IAttribute } from './iattribute';
import { IProductImage } from './iproduct-image.type';
import { IProductPackage } from './iproduct-package';
import { ISelectionGroup } from './iselection-group';
import { IProductOption } from './iproduct-option';
export declare namespace IProduct {
    enum ProductType {
        NORMAL = "normal",
        COMBO = "combo",
        GIFT = "gift",
        VIRTUAL = "virtual",
        BUNDLED = "bundle"
    }
    interface ISalesChannel {
        id: string;
        name?: string;
        code?: string;
    }
    interface IReqCreateProduct {
        tax_id?: number & tags.Type<'uint32'>;
        product_brand_id?: number & tags.Type<'uint32'>;
        manufacturer_id?: number & tags.Type<'uint32'>;
        image_id?: number & tags.Type<'uint32'>;
        partner_id?: number & tags.Type<'uint32'>;
        categoryIds?: number[];
        tagIds?: number[];
        productOptionIds?: number[];
        selectionGroupIds?: number[];
        salesChannel?: ISalesChannel[];
        name: string;
        active?: boolean;
        needToCook?: boolean;
        barcode?: string;
        sku?: string;
        type?: ProductType;
        price?: number;
        salePrice?: number;
        originPrice?: number;
        icon?: string;
        description?: string;
        userId?: string;
    }
    interface ICreateProduct extends IReqCreateProduct {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateProduct {
        tax_id?: number & tags.Type<'uint32'>;
        shop_id?: number & tags.Type<'uint32'>;
        product_brand_id?: number & tags.Type<'uint32'>;
        manufacturer_id?: number & tags.Type<'uint32'>;
        image_id?: number & tags.Type<'uint32'>;
        partner_id?: number & tags.Type<'uint32'>;
        categoryIds?: number[];
        tagIds?: number[];
        productOptionIds?: number[];
        selectionGroupIds?: number[];
        salesChannel?: ISalesChannel[];
        name?: string;
        active?: boolean;
        needToCook?: boolean;
        type?: ProductType;
        price?: number;
        salePrice?: number;
        originPrice?: number;
        icon?: string;
        description?: string;
        userId?: string;
    }
    interface ITagReponse {
        id: string | number | null;
        name: string;
        [key: string]: string | string[] | boolean | number | undefined | null;
    }
    interface ICategoryReponse {
        id: string | number | null;
        name: string;
        [key: string]: string | string[] | boolean | number | undefined | null;
    }
    interface ICollectionReponse {
        id: string | number | null;
        name: string;
        [key: string]: string | string[] | boolean | number | undefined | null;
    }
    interface IProductResponse extends BaseResponse {
        tax_id?: string | number | null;
        shop_id: string | number | null;
        manufacturer_id?: string | number | null;
        product_brand_id?: string | number | null;
        image_id?: string | number | null;
        partner_id?: string | number | null;
        barcode?: string;
        sku?: string;
        name: string;
        active: boolean;
        needToCook?: boolean;
        type: string;
        icon?: string | null;
        lowLimit?: number | string | null;
        isFeature?: boolean;
        createdBy?: string | null;
        updatedBy?: string | null;
        totalInventory?: string | number | null;
        availableStock?: string | number | null;
        productSlug?: string | number | null;
        ordered?: number | string;
        liked?: number | string;
        price: string | number | null;
        originPrice: string | number | null;
        salePrice: string | number | null;
        description?: string | null;
        salesChannel?: ISalesChannel[] | null;
        categories?: ICategoryReponse[] | null;
        tags?: ITagReponse[] | null;
        selectionGroups?: ISelectionGroup.ISelectionGroupResponse[] | null;
        variants?: IVariant.IVariantResponse[] | null;
        productImages?: IProductImage.IProductImageResponse[] | null;
        productOptions?: IProductOption.IDetailProductOptionResponse[] | null;
        productAttributes?: IAttribute.IDetailAttributeResponse[] | null;
        tax?: ITax.IDetailTaxResponse | null;
        manufacturer?: IManufacturer.IDetailManufacturerResponse | null;
        productPackages?: IProductPackage.IDetailProductPackageResponse[] | null;
    }
}
