/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
import { IGroupWarehouse } from './igroup-warehouse.type';

export namespace IWarehouse {
	export interface ICreateWarehouse {
		shop_id?: number & tags.Type<'uint64'>;
		branch_id: number & tags.Type<'uint64'>;
		group_warehouse_id: number & tags.Type<'uint64'>;
		name: string;
		abbreviation: string;
		country?: string;
		province?: string;
		state?: string;
		district?: string;
		ward?: string;
		address?: string;
		latitude?: string;
		longitude?: string;
		sequence: number;
	}

	export interface IUpdateWarehouse {
		name?: string;
		abbreviation?: string;
		country?: string;
		province?: string;
		state?: string;
		district?: string;
		ward?: string;
		address?: string;
		latitude?: string;
		longitude?: string;
		sequence?: number;
	}

	export interface IWarehouseResponse extends BaseResponse {
		shop_id: number | string | null;
		branch_id: number | string | null;
		view_location_id?: number | string | null;
		stock_location_id?: number | string | null;
		group_warehouse_id?: number | string | null;
		code: string;
		name: string;
		abbreviation?: string;
		country?: string | null;
		province?: string | null;
		state?: string | null;
		district?: string | null;
		ward?: string | null;
		address?: string | null;
		latitude?: string | null;
		longitude?: string | null;
		sequence: number | string;
		viewLocation?: IStockLocation.IStockLocationResponse;
		stockLocation?: IStockLocation.IStockLocationResponse;
		groupWarehouse?: IGroupWarehouse.IGroupWarehouseResponse;
	}
}
