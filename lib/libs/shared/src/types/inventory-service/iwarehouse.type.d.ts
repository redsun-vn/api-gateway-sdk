import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
import { IGroupWarehouse } from './igroup-warehouse.type';
export declare namespace IWarehouse {
    interface ICreateWarehouse {
        shop_id?: number & tags.Type<'uint32'>;
        branch_id: number & tags.Type<'uint32'>;
        group_warehouse_id: number & tags.Type<'uint32'>;
        name: string;
        abbreviation: string;
        country?: string;
        city?: string;
        state?: string;
        address?: string;
        latitude?: string;
        longitude?: string;
        sequence: number;
    }
    interface IUpdateWarehouse {
        name?: string;
        abbreviation?: string;
        country?: string;
        city?: string;
        state?: string;
        address?: string;
        latitude?: string;
        longitude?: string;
        sequence?: number;
    }
    interface IWarehouseResponse extends BaseResponse {
        shop_id: number | string | null;
        branch_id: number | string | null;
        view_location_id?: number | string | null;
        stock_location_id?: number | string | null;
        group_warehouse_id?: number | string | null;
        code: string;
        name: string;
        abbreviation?: string;
        country?: string | null;
        city?: string | null;
        state?: string | null;
        address?: string | null;
        latitude?: string | null;
        longitude?: string | null;
        sequence: number | string;
        viewLocation?: IStockLocation.IStockLocationResponse;
        stockLocation?: IStockLocation.IStockLocationResponse;
        groupWarehouse?: IGroupWarehouse.IGroupWarehouseResponse;
    }
}
