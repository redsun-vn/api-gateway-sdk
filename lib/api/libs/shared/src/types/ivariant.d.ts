import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IStockQuantity } from './inventory-service';
import { IProduct } from './iproduct';
import { IUnit } from './iunit';
export declare namespace IVariant {
    interface IVariantStockInput {
        stock_location_id: number & tags.Type<'uint32'>;
        quantity: number;
    }
    interface IRefCreateUnit {
        uom_uom_id: number & tags.Type<'uint32'>;
        is_default: boolean;
        rounding: number;
        factor: number;
        conversion: number;
    }
    interface IRefUpdateUnit {
        id: string;
        uom_uom_id?: number & tags.Type<'uint32'>;
        is_default?: boolean;
        rounding?: number;
        factor?: number;
        conversion?: number;
    }
    interface IReqCreateVariant {
        image_id?: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        barcode: string;
        name: string;
        sku: string;
        active: boolean;
        icon?: string;
        price: number;
        originPrice: number;
        compareAtPrice?: number;
        availableForSale?: boolean;
        currentlyNotInStock?: boolean;
        isSaleOnline?: boolean;
        requiredShipping?: boolean;
        quantityAvailable?: number;
        totalInventory?: number;
        weight?: number;
        expiredAt?: string;
        userId?: string;
        unit: IRefCreateUnit;
        variantStocks?: IVariantStockInput[];
    }
    interface ICreateVariant extends IReqCreateVariant {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateVariant {
        id?: string;
        name?: string;
        active?: boolean;
        icon?: string;
        price?: number;
        originPrice?: number;
        compareAtPrice?: number;
        availableForSale?: boolean;
        currentlyNotInStock?: boolean;
        isSaleOnline?: boolean;
        requiredShipping?: boolean;
        quantityAvailable?: number;
        totalInventory?: number;
        weight?: number;
        expiredAt?: string;
        userId?: string;
        unit?: IRefUpdateUnit;
        variantStocks?: IVariantStockInput[];
    }
    interface IVariantResponse extends BaseResponse {
        name: string;
        shop_id: number | string | null;
        image_id: number | string | null;
        product_id: number | string | null;
        barcode: string;
        sku: string;
        active: boolean;
        icon: string;
        price: number | string | null;
        originPrice: number | string | null;
        compareAtPrice?: number | string | null;
        availableForSale: boolean;
        currentlyNotInStock: boolean;
        isSaleOnline: boolean;
        requiredShipping: boolean;
        quantityAvailable: number | string | null;
        totalInventory: number | string | null;
        weight: number | string | null;
        expiredAt: string | undefined | null;
        createdBy?: string | undefined | null;
        updatedBy?: string | undefined | null;
        unit: IUnit.IDetailUnitResponse;
        variantStocks?: IStockQuantity.IStockQuantityResponse[] | null;
        product?: IProduct.IProductResponse;
    }
    interface IDeleteVariant {
        id: string;
    }
}
