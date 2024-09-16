import { BaseResponse } from '../common.type';
export declare namespace ILoyaltyLevel {
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        image_id?: number | string;
        name: number | string;
        limitDiscount: boolean;
        discount: number;
        maxDiscount: number;
        totalPointRequire: number | string;
    }
    interface ICreate {
        name: number | string;
        image_id?: number | string;
        limitDiscount?: boolean;
        discount?: number;
        maxDiscount?: number;
        totalPointRequire: number | string;
    }
    type IUpdate = Partial<ICreate>;
}
