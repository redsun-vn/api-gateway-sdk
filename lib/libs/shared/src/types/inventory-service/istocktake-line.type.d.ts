import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStocktake } from './istocktake.type';
import { IStockLocation } from './istock-location.type';
export declare namespace IStocktakeLine {
    interface ICreateStocktakeLine {
        shop_id?: number & tags.Type<'uint64'>;
        product_id: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        uom_uom_id: number & tags.Type<'uint64'>;
        stocktake_id: number & tags.Type<'uint64'>;
        stock_location_id: number & tags.Type<'uint64'>;
        barcode: string;
        qantity: number;
        inventoryQuantity: number;
        differentQuantity: number;
    }
    interface IUpdateStocktakeLine {
        qantity?: number;
        inventoryQuantity?: number;
        differentQuantity?: number;
    }
    interface IStocktakeLineResponse extends BaseResponse {
        shop_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        uom_uom_id: number | string | null;
        stocktake_id: number | string | null;
        stock_location_id: number | string | null;
        barcode: string;
        qantity: number | string;
        inventoryQuantity: number | string;
        differentQuantity: number | string;
        stocktake?: IStocktake.IStocktakeResponse;
        location?: IStockLocation.IStockLocationResponse;
    }
}
