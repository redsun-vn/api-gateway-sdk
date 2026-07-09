import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
export declare namespace IStockQuantity {
    interface ICreateStockQuantity {
        shop_id?: number & tags.Type<'uint64'>;
        product_id: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        uom_uom_id: number & tags.Type<'uint64'>;
        partner_id?: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
        stock_location_id: number & tags.Type<'uint64'>;
        inventoryQuantity: number;
        availableQuantity: number;
        lastStocktakeQuantity?: number;
        lastStocktakeDate?: string;
    }
    interface IUpdateStockQuantity {
        inventoryQuantity?: number;
        partner_id?: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
        lastStocktakeQuantity?: number;
        lastStocktakeDate?: string;
    }
    interface IStockQuantityResponse extends BaseResponse {
        shop_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        uom_uom_id: number | string | null;
        stock_location_id?: number | string | null;
        inventoryQuantity: number | string;
        availableQuantity: number | string;
        lastStocktakeQuantity?: number | string;
        lastStocktakeDate?: string | null;
        stockLocation?: IStockLocation.IStockLocationResponse;
    }
}
