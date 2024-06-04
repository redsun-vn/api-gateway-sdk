import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IAttribute } from './iattribute';
export declare namespace IProductOption {
    interface ICreateProductOption {
        shop_id?: number & tags.Type<'uint64'>;
        attribute_id: number & tags.Type<'uint64'>;
        active?: boolean;
        sequence?: number;
        name: string;
    }
    interface IUpdateProductOption extends Omit<Partial<ICreateProductOption>, 'shop_id' | 'attribute_id'> {
        id?: string;
    }
    interface IDetailProductOptionResponse extends BaseResponse {
        shop_id: number | string | null;
        attribute_id?: number | string | null;
        active?: boolean;
        name: string;
        sequence?: number | null | string;
        productAttribute?: IAttribute.IDetailAttributeResponse | null;
    }
}
