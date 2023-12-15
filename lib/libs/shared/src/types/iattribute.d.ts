import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IProduct } from './iproduct';
export declare namespace IAttribute {
    interface IOptionInput {
        id?: string | number | null;
        name: string;
        active?: boolean;
    }
    interface ICreateAttribute {
        shop_id?: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        active?: boolean;
        name: string;
        options?: IOptionInput[];
    }
    interface IUpdateAttribute {
        id?: string;
        active?: boolean;
        name?: string;
        options?: IOptionInput[];
    }
    interface IOptionResponse extends BaseResponse {
        shop_id: string | number | null;
        name?: string;
        active?: boolean;
    }
    interface IDetailAttributeResponse extends BaseResponse {
        shop_id: string | number | null;
        product_id?: string | number | null;
        name?: string;
        active?: boolean;
        options?: IOptionResponse[];
        product?: IProduct.IProductResponse;
    }
}
