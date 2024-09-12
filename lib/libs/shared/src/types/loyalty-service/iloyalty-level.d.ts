import { BaseResponse } from '../common.type';
export declare namespace ILoyaltyLevel {
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        image_id?: number | string;
        name: number | string;
        totalPointRequire: number | string;
    }
    interface ICreate {
        name: number | string;
        image_id?: number | string;
        totalPointRequire: number | string;
    }
    type IUpdate = Partial<ICreate>;
}
