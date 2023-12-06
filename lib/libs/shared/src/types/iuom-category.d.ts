import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IUomCategory {
    interface ICreateUomCategory {
        shop_id?: number & tags.Type<'uint32'>;
        name: string;
    }
    interface IUpdateUomCategory {
        name?: string;
    }
    interface IDetailUomCategoryResponse extends BaseResponse {
        name: string;
        shop_id: string | number | null;
    }
}
