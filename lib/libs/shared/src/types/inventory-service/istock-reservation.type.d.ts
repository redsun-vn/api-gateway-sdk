import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IStockReservation {
    interface IFindAllQuery {
        page?: number & tags.Type<'uint32'>;
        limit?: number & tags.Type<'uint32'>;
        order_id?: number & tags.Type<'uint32'>;
        variant_id?: number & tags.Type<'uint32'>;
        state?: string;
    }
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
