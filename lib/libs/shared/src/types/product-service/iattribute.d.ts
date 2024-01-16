import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IAttribute {
    interface IOptionInput {
        id?: string | number | null;
        name: string;
        active?: boolean;
    }
    interface ICreateAttribute {
        shop_id?: number & tags.Type<'uint32'>;
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
        productAttribute?: IDetailAttributeResponse | null;
    }
    interface IDetailAttributeResponse extends BaseResponse {
        shop_id: string | number | null;
        name?: string;
        active?: boolean;
        options?: IOptionResponse[];
    }
}
