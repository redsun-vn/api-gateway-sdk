import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IProduct } from './iproduct';
import { IFile } from './ifile';
export declare namespace IProductImage {
    interface ICreateProductImage {
        shop_id?: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        image_id?: number & tags.Type<'uint32'>;
        description?: string | null;
        color?: string | null;
        aliasName?: string | null;
        isShow?: boolean;
    }
    interface IUpdateProductImage {
        id?: string;
        image_id?: number & tags.Type<'uint32'>;
        description?: string | null;
        color?: string | null;
        aliasName?: string | null;
        isShow?: boolean;
    }
    interface IProductImageResponse extends BaseResponse {
        shop_id: number | string | null;
        image_id?: string | number | null;
        product_id?: string | number | null;
        description?: string | null;
        color?: string | null;
        aliasName?: string | null;
        isShow?: boolean;
        product?: IProduct.IProductResponse | null;
        image?: IFile.IResponse | null;
    }
    interface IDeleteProductImage {
        id: string;
    }
}
