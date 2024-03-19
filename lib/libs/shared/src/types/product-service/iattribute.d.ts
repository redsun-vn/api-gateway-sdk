import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IProductOption } from './iproduct-option';
export declare namespace IAttribute {
    interface IOptionInput {
        id?: string | number | null;
        name: string;
        active?: boolean;
    }
    interface ICreateAttribute {
        shop_id?: number & tags.Type<'uint64'>;
        active?: boolean;
        name: string;
        options?: IOptionInput[];
    }
    interface IUpdateAttribute {
        id?: string;
        active?: boolean;
        name?: string;
    }
    interface IDetailAttributeResponse extends BaseResponse {
        shop_id: string | number | null;
        name?: string;
        active?: boolean;
        options?: IProductOption.IDetailProductOptionResponse[] | null;
    }
}
