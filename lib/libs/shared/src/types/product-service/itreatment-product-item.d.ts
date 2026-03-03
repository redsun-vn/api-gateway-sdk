import { tags } from 'typia';
import { TreatmentProductItemType } from '../../enum/treatment';
import { BaseResponse } from '../common.type';
export declare namespace ITreatmentProductItem {
    interface ICreate {
        treatment_config_id: number & tags.Type<'uint64'>;
        step_id?: number | null;
        product_id: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        quantity: number;
        item_type: TreatmentProductItemType;
        shop_id: number & tags.Type<'uint64'>;
    }
    interface ICreateRequest extends Omit<ITreatmentProductItem.ICreate, 'treatment_config_id' | 'shop_id'> {
        step_id?: number | null;
        product_id: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        quantity: number;
        item_type: TreatmentProductItemType;
    }
    interface IUpdate {
        quantity?: number;
        item_type?: TreatmentProductItemType;
        step_id?: number | null;
    }
    interface IResponse extends BaseResponse {
        treatment_config_id: number | string;
        step_id: number | string | null;
        product_id: number | string;
        variant_id: number | string;
        quantity: number;
        item_type: TreatmentProductItemType;
        shop_id: number | string;
    }
}
