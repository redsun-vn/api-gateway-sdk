import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IUomUom {
    interface ICreateUomUom {
        shop_id?: number & tags.Type<'uint32'>;
        uom_category_id: number & tags.Type<'uint32'>;
        name: string;
        type: string;
        active?: boolean;
    }
    interface IUpdateUomUom {
        name?: string;
        type?: string;
        active?: boolean;
    }
    interface IDetailUomUomResponse extends BaseResponse {
        shop_id: string | number | null;
        uom_category_id: string | number | null;
        name: string;
        type: string;
        active: boolean | string;
    }
}
