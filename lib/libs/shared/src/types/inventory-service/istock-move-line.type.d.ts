import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
import { IStockMove } from './istock-move.type';
import { IStockPicking } from './istock-picking.type';
import { IStockPickingType } from './istock-picking-type.type';
export declare namespace IStockMoveLine {
    interface ICreateStockMoveLine {
        shop_id?: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
        uom_uom_id: number & tags.Type<'uint32'>;
        stock_move_id: number & tags.Type<'uint32'>;
        location_src_id: number & tags.Type<'uint32'>;
        location_dest_id: number & tags.Type<'uint32'>;
        picking_id: number & tags.Type<'uint32'>;
        picking_type_id: number & tags.Type<'uint32'>;
        staff_id?: string;
        barcode: string;
        note: string;
        description: string;
        dateScheduled: string;
        state?: string;
        transferQuantity: number;
        requestTransferQuantity: number;
        receiveQuantity: number;
    }
    interface IUpdateStockMoveLine {
        picking_id?: number & tags.Type<'uint32'>;
        picking_type_id?: number & tags.Type<'uint32'>;
        note?: string;
        description?: string;
        dateScheduled?: string;
        state?: string;
        transferQuantity?: number;
        requestTransferQuantity?: number;
        receiveQuantity?: number;
    }
    interface IStockMoveLineResponse extends BaseResponse {
        shop_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        uom_uom_id: number | string | null;
        stock_move_id?: number | string | null;
        location_src_id?: number | string | null;
        location_dest_id?: number | string | null;
        picking_id?: number | string | null;
        picking_type_id?: number | string | null;
        staff_id: string;
        barcode: string;
        note: string;
        description: string | Date;
        dateScheduled: string | Date;
        state?: string;
        transferQuantity: number | string;
        requestTransferQuantity: number | string;
        receiveQuantity: number | string;
        stockMove?: IStockMove.IStockMoveResponse | null;
        picking?: IStockPicking.IStockPickingResponse | null;
        pickingType?: IStockPickingType.IStockPickingTypeResponse | null;
        locationSrc?: IStockLocation.IStockLocationResponse | null;
        locationDest?: IStockLocation.IStockLocationResponse | null;
    }
}
