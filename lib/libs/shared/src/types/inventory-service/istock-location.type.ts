/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IWarehouse } from './iwarehouse.type';
import { StockLocationType } from '../../enum';

export namespace IStockLocation {
	export interface ICreateStockLocation {
		shop_id?: number & tags.Type<'uint64'>;
		warehouse_id: number & tags.Type<'uint64'>;
		parent_id?: number & tags.Type<'uint64'>;
		name: string;
		description?: string;
		active?: boolean;
		isReturnLocation?: boolean;
		isReplenishLocation?: boolean;
		locationType: StockLocationType;
		parentPath?: string;
		parentFlattenIds?: string;
		cyclicInventoryFrequency?: number;
		lastStocktakeDate?: string & tags.Format<'date-time'>;
		nextStocktakeDate?: string & tags.Format<'date-time'>;
	}

	export interface IUpdateStockLocation {
		name?: string;
		description?: string;
		active?: boolean;
		isReturnLocation?: boolean;
		isReplenishLocation?: boolean;
		locationType?: StockLocationType;
		parentPath?: string;
		parentFlattenIds?: string;
		cyclicInventoryFrequency?: number;
		lastStocktakeDate?: string & tags.Format<'date-time'>;
		nextStocktakeDate?: string & tags.Format<'date-time'>;
	}

	export interface IStockLocationResponse extends BaseResponse {
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
		parentFlattenIds?: string | null;
		cyclicInventoryFrequency?: number | string;
		lastStocktakeDate?: string | null;
		nextStocktakeDate?: string | null;
		warehouse?: IWarehouse.IWarehouseResponse | null;
	}
}
