import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IWarehouse } from './iwarehouse.type';
export declare namespace IStockLocation {
    interface ICreateStockLocation {
        shop_id?: number & tags.Type<'uint32'>;
        warehouse_id: number & tags.Type<'uint32'>;
        parent_id?: number & tags.Type<'uint32'>;
        name: string;
        description?: string;
        active?: boolean;
        isReturnLocation?: boolean;
        isReplenishLocation?: boolean;
        locationType: string;
        parentPath?: string;
        parentFlattenIds?: string;
        cyclicInventoryFrequency?: number;
        lastStocktakeDate?: string;
        nextStocktakeDate?: string;
    }
    interface IUpdateStockLocation {
        name?: string;
        description?: string;
        active?: boolean;
        isReturnLocation?: boolean;
        isReplenishLocation?: boolean;
        locationType?: string;
        parentPath?: string;
        parentFlattenIds?: string;
        cyclicInventoryFrequency?: number;
        lastStocktakeDate?: string;
        nextStocktakeDate?: string;
    }
    interface IStockLocationResponse extends BaseResponse {
        shop_id: number | string | null;
        warehouse_id?: number | string | null;
        parent_id?: number | string | null;
        name: string;
        code?: string;
        description?: string;
        active: boolean;
        isReturnLocation: boolean;
        isReplenishLocation: boolean;
        locationType: string;
        parentPath: string;
        parentFlattenIds?: string | null | undefined;
        cyclicInventoryFrequency?: number | string;
        lastStocktakeDate?: string | null;
        nextStocktakeDate?: string | null;
        warehouse?: IWarehouse.IWarehouseResponse;
    }
}
