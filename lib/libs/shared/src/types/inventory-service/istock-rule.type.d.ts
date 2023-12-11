import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
import { IStockPickingType } from './istock-picking-type.type';
import { IWarehouse } from './iwarehouse.type';
export declare namespace IStockRule {
    interface ICreateStockRule {
        shop_id?: number & tags.Type<'uint32'>;
        location_src_id: number & tags.Type<'uint32'>;
        location_dest_id: number & tags.Type<'uint32'>;
        picking_type_id: number & tags.Type<'uint32'>;
        warehouse_id: number & tags.Type<'uint32'>;
        sequence: number;
        active?: boolean;
    }
    interface IUpdateStockRule {
        shop_id?: number & tags.Type<'uint32'>;
        sequence?: number;
        active?: boolean;
    }
    interface IStockRuleResponse extends BaseResponse {
        shop_id: number | string | null;
        location_src_id?: number | string | null;
        location_dest_id?: number | string | null;
        picking_type_id?: number | string | null;
        warehouse_id?: number | string | null;
        name: string;
        sequence: number | string;
        active?: boolean | string;
        warehouse?: IWarehouse.IWarehouseResponse;
        locationDest?: IStockLocation.IStockLocationResponse;
        locationSrc?: IStockLocation.IStockLocationResponse;
        pickingType?: IStockPickingType.IStockPickingTypeResponse;
    }
}
