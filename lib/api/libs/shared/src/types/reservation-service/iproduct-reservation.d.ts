import { BaseResponse } from '../common.type';
export declare namespace IProductReservation {
    interface ICreate {
        product_id: number;
        reservation_id: number;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IProductReservationResponse extends BaseResponse {
        product_id: number | string;
        reservation_id: number | string;
    }
}
