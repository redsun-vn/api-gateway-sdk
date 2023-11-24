import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IStockLine {
    interface ICreateStockLine {
        shop_id?: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
        stocktake_line_id: number & tags.Type<'uint32'>;
        stock_lot_id: number & tags.Type<'uint32'>;
        barcode: string;
        qantity: number;
        staff_id?: string;
    }
    interface IUpdateStockLine {
        stock_lot_id?: number & tags.Type<'uint32'>;
        qantity?: number;
        staff_id?: string;
    }
    interface IStockLineResponse extends BaseResponse {
        shop_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        stocktake_line_id: number | string | null;
        stock_lot_id: number | string | null;
        staff_id: number | string | null;
        barcode: string;
        qantity: number | string;
        lot?: unknown | null;
    }
}
