import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
export declare namespace IStockQuantity {
    interface ICreateStockQuantity {
        shop_id?: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        varient_id: number & tags.Type<'uint32'>;
        uom_uom_id: number & tags.Type<'uint32'>;
        stock_location_id: number & tags.Type<'uint32'>;
        lot_id: number & tags.Type<'uint32'>;
        quantity: number;
        availableQuantity: number;
        lastStocktakeQuantity?: number;
        lastStocktakeDate?: string;
    }
    interface IUpdateStockQuantity {
        quantity?: number;
        availableQuantity?: number;
        lastStocktakeQuantity?: number;
        lastStocktakeDate?: string;
    }
    interface IStockQuantityResponse extends BaseResponse {
        shop_id: number | string | null;
        product_id: number | string | null;
        varient_id: number | string | null;
        uom_uom_id: number | string | null;
        stock_location_id: number | string | null;
        lot_id: number | string | null;
        quantity: number | string;
        availableQuantity: number | string;
        lastStocktakeQuantity?: number | string;
        lastStocktakeDate?: string | Date;
        location?: IStockLocation.IStockLocationResponse;
    }
}
