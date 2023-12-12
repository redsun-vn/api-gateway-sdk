import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
import { IStockPickingType } from './istock-picking-type.type';
export declare namespace IStockPicking {
    interface ICreateStockPicking {
        shop_id?: number & tags.Type<'uint32'>;
        location_src_id: number & tags.Type<'uint32'>;
        location_dest_id: number & tags.Type<'uint32'>;
        picking_type_id: number & tags.Type<'uint32'>;
        staff_id?: string;
        owner_id?: string;
        name: string;
        note: string;
        moveType: string;
        state?: string;
        priority?: number;
        dateScheduled: string;
        dateDeadline: string;
        dateDone: string;
        printed?: boolean;
    }
    interface IUpdateStockPicking {
        name?: string;
        note?: string;
        moveType?: string;
        state?: string;
        priority?: number;
        dateScheduled?: string;
        dateDeadline?: string;
        dateDone?: string;
        printed?: boolean;
    }
    interface IStockPickingResponse extends BaseResponse {
        shop_id: number | string | null;
        location_src_id: number | string | null;
        location_dest_id: number | string | null;
        picking_type_id: number | string | null;
        staff_id?: string;
        owner_id?: string;
        name: string;
        note?: string;
        moveType: string;
        state?: string;
        priority?: number | string;
        dateScheduled?: string | Date;
        dateDeadline?: string | Date;
        dateDone?: string | Date;
        printed?: boolean;
        pickingType?: IStockPickingType.IStockPickingTypeResponse;
        locationSrc?: IStockLocation.IStockLocationResponse;
        locationDest?: IStockLocation.IStockLocationResponse;
    }
}
