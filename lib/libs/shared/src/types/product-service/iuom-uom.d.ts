import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { UomType } from '../../enum';
import { IUomCategory } from './iuom-category';
export declare namespace IUomUom {
    interface ICreateUomUom {
        shop_id?: number & tags.Type<'uint64'>;
        uom_category_id: number & tags.Type<'uint64'>;
        name: string;
        type: UomType;
        active?: boolean;
    }
    interface IUpdateUomUom {
        name?: string;
        type?: UomType;
        active?: boolean;
    }
    interface IDetailUomUomResponse extends BaseResponse {
        shop_id: string | number | null;
        uom_category_id?: string | number | null;
        name: string;
        type?: string;
        active?: boolean;
        uomCategory?: IUomCategory.IDetailUomCategoryResponse | null;
    }
}
