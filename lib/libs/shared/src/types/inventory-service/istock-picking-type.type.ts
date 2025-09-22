/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
import { IWarehouse } from './iwarehouse.type';

export namespace IStockPickingType {
	export interface ICreateStockPickingType {
		shop_id?: number & tags.Type<'uint64'>;
		warehouse_id: number & tags.Type<'uint64'>;
		default_location_src_id?: number & tags.Type<'uint64'>;
		default_location_dest_id?: number & tags.Type<'uint64'>;
		return_picking_type_id?: number & tags.Type<'uint64'>;
		name: string;
		sequence?: number;
		type: string;
		active?: boolean;
		printable?: boolean;
		countPickingDraf?: number;
		countPickingReady?: number;
		countPickingWaiting?: number;
		countPickingLate?: number;
	}

	export interface IUpdateStockPickingType {
		name?: string;
		sequence?: number;
		type?: string;
		active?: boolean;
		printable?: boolean;
		countPickingDraf?: number;
		countPickingReady?: number;
		countPickingWaiting?: number;
		countPickingLate?: number;
	}

	export interface IStockPickingTypeResponse extends BaseResponse {
		shop_id: number | string | null;
		warehouse_id?: number | string | null;
		default_location_src_id?: number | string | null;
		default_location_dest_id?: number | string | null;
		return_picking_type_id?: number | string | null;
		name: string;
		sequence?: number | string;
		type: string;
		active?: boolean | string;
		printable?: boolean | string;
		countPickingDraf?: number | string;
		countPickingReady?: number | string;
		countPickingWaiting?: number | string;
		countPickingLate?: number | string;
		defaultLocationSrc?: IStockLocation.IStockLocationResponse | null;
		defaultLocationDest?: IStockLocation.IStockLocationResponse | null;
		warehouse?: IWarehouse.IWarehouseResponse | null;
	}
}
