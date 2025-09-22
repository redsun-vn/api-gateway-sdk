/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IWarehouse } from './iwarehouse.type';
import { IStockLocation } from './istock-location.type';

export namespace IStocktake {
	export interface ICreateStocktake {
		shop_id?: number & tags.Type<'uint64'>;
		warehouse_id: number & tags.Type<'uint64'>;
		stock_location_id: number & tags.Type<'uint64'>;
		code: string;
		name: string;
		note?: string;
		totalLine: number;
		type: string;
		status: string;
		stocktakeDate: string;
	}

	export interface IUpdateStocktake {
		name?: string;
		note?: string;
		totalLine?: number;
		type?: string;
		status?: string;
		stocktakeDate?: string;
	}

	export interface IStocktakeResponse extends BaseResponse {
		shop_id: number | string | null;
		warehouse_id: number | string | null;
		stock_location_id: number | string | null;
		code: string;
		name: string;
		note?: string;
		totalLine?: number | string;
		type: string;
		status: string;
		stocktakeDate: string | null;
		warehouse?: IWarehouse.IWarehouseResponse;
		location?: IStockLocation.IStockLocationResponse;
	}
}
