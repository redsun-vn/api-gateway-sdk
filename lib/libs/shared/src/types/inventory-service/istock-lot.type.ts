/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IWarehouse } from './iwarehouse.type';
import { IStockQuantity } from './istock-quantity.type';

export namespace IStockLot {
	export interface ICreateStockLot {
		shop_id?: number & tags.Type<'uint64'>;
		warehouse_id: number & tags.Type<'uint64'>;
		stock_quantity_id: number & tags.Type<'uint64'>;
		partner_id: number & tags.Type<'uint64'>;
		product_id: number & tags.Type<'uint64'>;
		variant_id: number & tags.Type<'uint64'>;
		name: string;
		state: string;
		note?: string;
		internalReference?: string;
		cost?: number;
		quantity?: number;
		originQuantity?: number;
		expiredAt: string & tags.Format<'date-time'>;
		warehouseAt: string & tags.Format<'date-time'>;
	}

	export interface IUpdateStockLot {
		name?: string;
		note?: string;
		internalReference?: string;
		quantity?: number;
		originQuantity?: number;
		cost?: number;
		expiredAt?: string & tags.Format<'date-time'>;
		warehouseAt?: string & tags.Format<'date-time'>;
	}

	export interface IStockLotResponse extends BaseResponse {
		shop_id: number | string | null;
		warehouse_id?: number | string | null;
		stock_quantity_id?: number | string | null;
		partner_id: number | string | null;
		product_id: number | string | null;
		variant_id: number | string | null;
		name: string;
		state: string;
		note?: string;
		internalReference?: string;
		cost?: number | string;
		quantity?: number | string;
		originQuantity?: number | string;
		expiredAt: string | null;
		warehouseAt: string | null;
		warehouse?: IWarehouse.IWarehouseResponse | null;
		stockQuantity?: IStockQuantity.IStockQuantityResponse | null;
	}
}
