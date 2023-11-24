import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IWarehouse } from './iwarehouse.type';
import { IStockLocation } from './istock-location.type';
export declare namespace IStockMove {
    interface ICreateStockMove {
        shop_id?: number & tags.Type<'uint32'>;
        partner_id: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
        uom_uom_id: number & tags.Type<'uint32'>;
        warehouse_id: number & tags.Type<'uint32'>;
        location_src_id: number & tags.Type<'uint32'>;
        location_dest_id: number & tags.Type<'uint32'>;
        picking_id: number & tags.Type<'uint32'>;
        picking_type_id: number & tags.Type<'uint32'>;
        name: string;
        barcode: string;
        note?: string;
        internalReference?: string;
        sequence?: number;
        priority?: number;
        dateScheduled: string;
        dateDeadline: string;
        state?: string;
        inventoryQuantity: number;
        transferQuantity: number;
        requestTransferQuantity: number;
        receiveQuantity: number;
        weight?: number;
        origin?: number;
    }
    interface IUpdateStockMove {
        name?: string;
        note?: string;
        internalReference?: string;
        sequence?: number;
        priority?: number;
        dateScheduled?: string;
        dateDeadline?: string;
        state?: string;
        inventoryQuantity?: number;
        transferQuantity?: number;
        requestTransferQuantity?: number;
        receiveQuantity?: number;
        weight?: number;
        origin?: number;
    }
    interface IStockMoveResponse extends BaseResponse {
        shop_id: number | string | null;
        partner_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        uom_uom_id: number | string | null;
        location_src_id?: number | string | null;
        location_dest_id?: number | string | null;
        picking_id?: number | string | null;
        picking_type_id?: number | string | null;
        name: string;
        barcode: string;
        note: string;
        internalReference: string;
        sequence: string | number;
        priority: string | number;
        dateScheduled: string | Date;
        dateDeadline: string | Date;
        state?: string;
        inventoryQuantity: number | string;
        transferQuantity: number | string;
        requestTransferQuantity: number | string;
        receiveQuantity: number | string;
        weight?: number | string;
        origin?: number | string;
        picking?: unknown;
        pickingType?: unknown;
        warehouse?: IWarehouse.IWarehouseResponse;
        locationSrc?: IStockLocation.IStockLocationResponse;
        locationDest?: IStockLocation.IStockLocationResponse;
    }
}
