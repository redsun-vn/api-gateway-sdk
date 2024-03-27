import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IUomUom } from './iuom-uom';
export declare namespace IUomCategory {
    interface ICreateUomCategory {
        shop_id?: number & tags.Type<'uint64'>;
        name: string;
    }
    interface IUpdateUomCategory {
        name?: string;
    }
    interface IDetailUomCategoryResponse extends BaseResponse {
        name: string;
        shop_id: string | number | null;
        uomUoms?: IUomUom.IDetailUomUomResponse[] | null;
    }
}
