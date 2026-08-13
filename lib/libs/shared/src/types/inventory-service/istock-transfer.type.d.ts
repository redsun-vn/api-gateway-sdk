import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { StockTransferState } from '../../enum/inventory.state';
import { IWarehouse } from './iwarehouse.type';
export declare namespace IStockTransfer {
    interface ICreateStockTransferLine {
        product_id: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        uom_uom_id: number & tags.Type<'uint64'>;
        stock_lot_id?: number & tags.Type<'uint64'>;
        barcode?: string;
        quantity: number;
    }
    interface ICreateStockTransfer {
        shop_id?: number & tags.Type<'uint64'>;
        staff_id?: number & tags.Type<'uint64'>;
        src_warehouse_id: number & tags.Type<'uint64'>;
        src_location_id: number & tags.Type<'uint64'>;
        dest_warehouse_id: number & tags.Type<'uint64'>;
        dest_location_id: number & tags.Type<'uint64'>;
        code?: string;
        name: string;
        note?: string;
        transferDate: string;
        expectedDate?: string;
        lines: ICreateStockTransferLine[];
    }
    interface IUpdateStockTransfer {
        id: string;
        name?: string;
        note?: string;
        transferDate?: string;
        expectedDate?: string;
    }
    interface ISendLine {
        id: string;
        sentQuantity: number;
    }
    interface ISendStockTransfer {
        id: string;
        staff_id?: number & tags.Type<'uint64'>;
        lines: ISendLine[];
    }
    interface IReceiveLine {
        id: string;
        receivedQuantity: number;
    }
    interface IReceiveStockTransfer {
        id: string;
        staff_id?: number & tags.Type<'uint64'>;
        lines: IReceiveLine[];
    }
    interface IStockTransferLineResponse extends BaseResponse {
        shop_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        uom_uom_id: number | string | null;
        stock_transfer_id: number | string | null;
        stock_lot_id: number | string | null;
        barcode: string;
        quantity: number | string;
        sentQuantity: number | string;
        receivedQuantity: number | string;
    }
    interface IStockTransferResponse extends BaseResponse {
        shop_id: number | string | null;
        staff_id: number | string | null;
        src_warehouse_id: number | string | null;
        src_location_id: number | string | null;
        dest_warehouse_id: number | string | null;
        dest_location_id: number | string | null;
        transit_location_id: number | string | null;
        picking_out_id: number | string | null;
        picking_in_id: number | string | null;
        code: string;
        name: string;
        note: string;
        totalLine: number | string;
        state: StockTransferState;
        transferDate: Date | string;
        expectedDate: Date | string | null;
        srcWarehouse?: IWarehouse.IWarehouseResponse | null;
        destWarehouse?: IWarehouse.IWarehouseResponse | null;
        lines?: IStockTransferLineResponse[];
    }
}
