import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IWarehouse } from './iwarehouse.type';
import { IStockQuantity } from './istock-quantity.type';
export declare namespace IStockLot {
    interface ICreateStockLot {
        shop_id?: number & tags.Type<'uint32'>;
        warehouse_id: number & tags.Type<'uint32'>;
        stock_quantity_id: number & tags.Type<'uint32'>;
        partner_id: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
        name: string;
        state: string;
        note?: string;
        internalReference?: string;
        cost?: number;
        quantity?: number;
        originQuantity?: number;
        expiredAt: Date;
        warehouseAt: Date;
    }
    interface IUpdateStockLot {
        name?: string;
        note?: string;
        internalReference?: string;
        quantity?: number;
        originQuantity?: number;
        cost?: number;
        expiredAt?: Date;
        warehouseAt?: Date;
    }
    interface IStockLotResponse extends BaseResponse {
        shop_id: number | string | null;
        warehouse_id?: number | string | null;
        stock_quantity_id?: number | string | null;
        partner_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        name: string;
        state: string;
        note?: string;
        internalReference?: string;
        cost?: number | string;
        quantity?: number | string;
        originQuantity?: number | string;
        expiredAt: Date | string | null;
        warehouseAt: Date | string | null;
        warehouse?: IWarehouse.IWarehouseResponse | null;
        stockQuantity?: IStockQuantity.IStockQuantityResponse | null;
    }
}
