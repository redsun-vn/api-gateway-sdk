import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IRecurrencePeriodConfig } from './irecurrence-period-config';
export declare namespace IVariantPeriodPricing {
    interface ICreate {
        product_id: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        period_id: number & tags.Type<'uint64'>;
        price: number;
        sale_price?: number;
    }
    interface IUpdate {
        product_id?: number & tags.Type<'uint64'>;
        variant_id?: number & tags.Type<'uint64'>;
        period_id?: number & tags.Type<'uint64'>;
        price?: number;
        sale_price?: number;
    }
    interface IResponse extends BaseResponse {
        product_id: number | string;
        variant_id: number | string;
        period_id: number | string;
        price: number | string;
        sale_price?: number | string;
        period?: IRecurrencePeriodConfig.IResponse | null;
    }
}
