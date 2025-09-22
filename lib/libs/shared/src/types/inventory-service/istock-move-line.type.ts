/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockLocation } from './istock-location.type';
import { IStockMove } from './istock-move.type';
import { IStockPicking } from './istock-picking.type';
import { IStockPickingType } from './istock-picking-type.type';

export namespace IStockMoveLine {
	export interface ICreateStockMoveLine {
		shop_id?: number & tags.Type<'uint64'>;
		product_id: number & tags.Type<'uint64'>;
		variant_id: number & tags.Type<'uint64'>;
		uom_uom_id: number & tags.Type<'uint64'>;
		stock_move_id: number & tags.Type<'uint64'>;
		location_src_id: number & tags.Type<'uint64'>;
		location_dest_id: number & tags.Type<'uint64'>;
		picking_id: number & tags.Type<'uint64'>;
		picking_type_id: number & tags.Type<'uint64'>;
		staff_id?: string;
		barcode: string;
		note: string;
		description: string;
		dateScheduled: string;
		state?: string;
		transferQuantity: number;
		requestTransferQuantity: number;
		receiveQuantity: number;
	}

	export interface IUpdateStockMoveLine {
		picking_id?: number & tags.Type<'uint64'>;
		picking_type_id?: number & tags.Type<'uint64'>;
		note?: string;
		description?: string;
		dateScheduled?: string;
		state?: string;
		transferQuantity?: number;
		requestTransferQuantity?: number;
		receiveQuantity?: number;
	}

	export interface IStockMoveLineResponse extends BaseResponse {
		shop_id: number | string | null;
		product_id: number | string | null;
		variant_id: number | string | null;
		uom_uom_id: number | string | null;
		stock_move_id?: number | string | null;
		location_src_id?: number | string | null;
		location_dest_id?: number | string | null;
		picking_id?: number | string | null;
		picking_type_id?: number | string | null;
		staff_id: string;
		barcode: string;
		note?: string | null;
		description?: string | null;
		dateScheduled: string | null;
		state?: string;
		transferQuantity: number | string;
		requestTransferQuantity: number | string;
		receiveQuantity: number | string;
		stockMove?: IStockMove.IStockMoveResponse | null;
		picking?: IStockPicking.IStockPickingResponse | null;
		pickingType?: IStockPickingType.IStockPickingTypeResponse | null;
		locationSrc?: IStockLocation.IStockLocationResponse | null;
		locationDest?: IStockLocation.IStockLocationResponse | null;
	}
}
