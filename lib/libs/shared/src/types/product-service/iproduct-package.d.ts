import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IVariant } from './ivariant';
import { IProduct } from './iproduct';
export declare namespace IProductPackage {
    interface ICreateProductPackage {
        shop_id?: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
        description?: string | null;
        quantity: number;
        price?: number;
        unitPrice?: number;
        variant?: IVariant.IVariantResponse | null;
    }
    interface IUpdateProductPackage extends Omit<Partial<ICreateProductPackage>, 'shop_id' | 'product_id' | 'variant_id'> {
        id?: string;
    }
    interface IDetailProductPackageResponse extends BaseResponse {
        shop_id: number | string | null;
        variant_id?: string | number | null;
        product_id?: string | number | null;
        description?: string | null;
        quantity: number | string | null;
        price?: number | string | null;
        unitPrice?: number | string | null;
        variant?: IVariant.IVariantResponse | null;
        product?: IProduct.IProductResponse | null;
    }
}
