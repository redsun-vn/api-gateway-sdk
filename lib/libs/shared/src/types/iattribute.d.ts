import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IAttribute {
    interface IOption {
        id?: string | number | null;
        name?: string;
        shop_id?: number & tags.Type<'uint32'>;
        active?: boolean;
    }
    interface IReqCreateAttribute {
        product_id: number & tags.Type<'uint32'>;
        active?: boolean;
        name: string;
        options?: IOption[];
        userId?: string;
    }
    interface ICreateAttribute extends IReqCreateAttribute {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateAttribute {
        id?: string;
        active?: boolean;
        name?: string;
        options?: IOption[];
        userId?: string;
    }
    interface IDetailAttributeResponse extends BaseResponse {
        shop_id: string | number | null;
        product_id: string | number | null;
        name?: string;
        active?: boolean;
        options?: IOption[];
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
    }
}
