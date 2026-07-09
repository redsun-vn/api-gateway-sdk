import { BaseResponse } from '../common.type';
export declare namespace IStockReservation {
    interface IStockReservationResponse extends BaseResponse {
        shop_id: number | string | null;
        order_id: number | string | null;
        referentType?: string | null;
        variant_id: number | string | null;
        stock_location_id: number | string | null;
        stock_quantity_id: number | string | null;
        quantity: number | string;
        state: string;
    }
}
