import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
import { IStockPickingType } from './istock-picking-type.type';
import { StockPickingMoveType, StockPickingState, StockReferentType } from '../../enum';
export declare namespace IStockPicking {
    interface ICreateStockPicking {
        shop_id?: number & tags.Type<'uint32'>;
        location_src_id: number & tags.Type<'uint32'>;
        location_dest_id: number & tags.Type<'uint32'>;
        picking_type_id: number & tags.Type<'uint32'>;
        picking_address_id?: number & tags.Type<'uint32'>;
        updated_by?: (number & tags.Type<'uint32'>) | (string & tags.Format<'uuid'>);
        staff_id: (number & tags.Type<'uint32'>) | (string & tags.Format<'uuid'>);
        owner_id?: (number & tags.Type<'uint32'>) | (string & tags.Format<'uuid'>);
        partner_id?: (number & tags.Type<'uint32'>) | (string & tags.Format<'uuid'>);
        referent_id?: number & tags.Type<'uint32'>;
        referentType?: StockReferentType | null;
        name: string;
        note: string;
        moveType: StockPickingMoveType;
        state?: StockPickingState;
        priority?: number;
        dateScheduled: string;
        dateDeadline: string;
        dateDone: string;
        printed?: boolean;
    }
    interface IUpdateStockPicking extends Omit<Partial<ICreateStockPicking>, 'shop_id' | 'picking_type_id'> {
    }
    interface IStockPickingResponse extends BaseResponse {
        shop_id: number | string | null;
        location_src_id: number | string | null;
        location_dest_id: number | string | null;
        picking_type_id: number | string | null;
        picking_address_id?: number | string | null;
        partner_id?: number | string | null;
        updated_by?: number | string | null;
        staff_id?: number | string | null;
        owner_id?: number | string | null;
        referentType?: string | null;
        referent_id?: number | string | null;
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
