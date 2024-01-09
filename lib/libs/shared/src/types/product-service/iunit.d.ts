import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IUomUom } from './iuom-uom';
import { IVariant } from './ivariant';
export declare namespace IUnit {
    interface ICreateUnit {
        shop_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        uom_uom_id: number & tags.Type<'uint32'>;
        is_default: boolean;
        rounding: number;
        factor: number;
        conversion: number;
    }
    interface IUpdateUnit {
        is_default?: boolean;
        rounding?: number;
        factor?: number;
        conversion?: number;
    }
    interface IDetailUnitResponse extends BaseResponse {
        shop_id: string | number | null;
        product_id: string | number | null;
        variant_id?: string | number | null;
        uom_uom_id?: string | number | null;
        isDefault?: boolean | string;
        rounding?: number | string;
        factor?: number | string;
        conversion?: number | string;
        uomUom?: IUomUom.IDetailUomUomResponse;
        variant?: IVariant.IVariantResponse;
    }
}
