import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IWarehouse } from './iwarehouse.type';
export declare namespace IStockLot {
    interface ICreateStockLot {
        shop_id?: number & tags.Type<'uint32'>;
        warehouse_id: number & tags.Type<'uint32'>;
        name: string;
        note?: string;
        internalReference?: string;
        maxVolumn: number;
    }
    interface IUpdateStockLot {
        name?: string;
        note?: string;
        internalReference?: string;
        maxVolumn?: number;
    }
    interface IStockLotResponse extends BaseResponse {
        shop_id: number | string | null;
        warehouse_id?: number | string | null;
        name: string;
        note?: string;
        internalReference?: string;
        maxVolumn: number | string;
        warehouse: IWarehouse.IWarehouseResponse;
    }
}
