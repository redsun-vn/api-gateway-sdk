import { BaseResponse } from '../common.type';
export declare namespace ILoyaltyConfig {
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        active: boolean;
        isAutoApply: boolean;
        pointConversionRate: number;
        moneyConversionRate: number;
    }
    interface ICreate {
        active?: boolean;
        isAutoApply?: boolean;
        pointConversionRate?: number;
        moneyConversionRate?: number;
    }
    type IUpdate = Partial<ICreate>;
}
