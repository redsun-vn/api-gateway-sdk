/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLot } from './istock-lot.type';

export namespace IStockLine {
	export interface ICreateStockLine {
		shop_id?: number & tags.Type<'uint64'>;
		product_id: number & tags.Type<'uint64'>;
		variant_id: number & tags.Type<'uint64'>;
		stocktake_line_id: number & tags.Type<'uint64'>;
		stock_lot_id: number & tags.Type<'uint64'>;
		barcode: string;
		qantity: number;
		staff_id?: string;
	}

	export interface IUpdateStockLine {
		stock_lot_id?: number & tags.Type<'uint64'>;
		qantity?: number;
		staff_id?: string;
	}

	export interface IStockLineResponse extends BaseResponse {
		shop_id: number | string | null;
		product_id: number | string | null;
		variant_id: number | string | null;
		stocktake_line_id: number | string | null;
		stock_lot_id: number | string | null;
		staff_id: number | string | null;
		barcode: string;
		qantity: number | string;
		lot?: IStockLot.IStockLotResponse | null;
	}
}
