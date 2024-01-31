import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IWarehouse } from './iwarehouse.type';
import { IStockLocation } from './istock-location.type';
export declare namespace IStocktake {
    interface ICreateStocktake {
        shop_id?: number & tags.Type<'uint32'>;
        warehouse_id: number & tags.Type<'uint32'>;
        stock_location_id: number & tags.Type<'uint32'>;
        code: string;
        name: string;
        note?: string;
        totalLine: number;
        type: string;
        status: string;
        stocktakeDate: string;
    }
    interface IUpdateStocktake {
        name?: string;
        note?: string;
        totalLine?: number;
        type?: string;
        status?: string;
        stocktakeDate?: string;
    }
    interface IStocktakeResponse extends BaseResponse {
        shop_id: number | string | null;
        warehouse_id: number | string | null;
        stock_location_id: number | string | null;
        code: string;
        name: string;
        note?: string;
        totalLine?: number | string;
        type: string;
        status: string;
        stocktakeDate: string | null;
        warehouse?: IWarehouse.IWarehouseResponse;
        location?: IStockLocation.IStockLocationResponse;
    }
}
