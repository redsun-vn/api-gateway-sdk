import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
export declare namespace IStockQuantity {
    interface ICreateStockQuantity {
        shop_id?: number & tags.Type<'uint32'>;
        product_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
        uom_uom_id: number & tags.Type<'uint32'>;
        partner_id?: (number & tags.Type<'uint32'>) | (string & tags.Format<'uuid'>);
        stock_location_id: number & tags.Type<'uint32'>;
        inventoryQuantity: number;
        availableQuantity: number;
        lastStocktakeQuantity?: number;
        lastStocktakeDate?: string;
    }
    interface IUpdateStockQuantity {
        quantity?: number;
        inventoryQuantity?: number;
        partner_id?: (number & tags.Type<'uint32'>) | (string & tags.Format<'uuid'>);
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
        lastStocktakeDate?: string | Date | null;
        stockLocation?: IStockLocation.IStockLocationResponse;
    }
}
