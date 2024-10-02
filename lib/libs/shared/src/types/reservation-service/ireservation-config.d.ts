import { BaseResponse } from '../common.type';
export declare namespace IReservationConfig {
    interface ICreate {
        product_ids?: string[];
        staff_ids?: string[];
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IReservationConfigResponse extends BaseResponse {
        shop_id: number | string;
        product_ids?: string[] | null;
        staff_ids?: string[] | null;
    }
}
