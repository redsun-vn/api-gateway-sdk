/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IWarehouse } from './iwarehouse.type';
import { IStockLocation } from './istock-location.type';
import { IStockPicking } from './istock-picking.type';
import { IStockPickingType } from './istock-picking-type.type';
import { StockMoveState, StockReferentType } from '../../enum';
import { IStockQuantity } from './istock-quantity.type';
import { IStockMoveLine } from './istock-move-line.type';

export namespace IStockMove {
	export interface ICreateStockMove {
		shop_id?: number & tags.Type<'uint64'>;
		partner_id?:
			| (number & tags.Type<'uint64'>)
			| (string & tags.Format<'uuid'>);
		updated_by?:
			| (number & tags.Type<'uint64'>)
			| (string & tags.Format<'uuid'>);
		product_id: number & tags.Type<'uint64'>;
		variant_id: number & tags.Type<'uint64'>;
		uom_uom_id: number & tags.Type<'uint64'>;
		warehouse_id: number & tags.Type<'uint64'>;
		location_src_id: number & tags.Type<'uint64'>;
		location_dest_id: number & tags.Type<'uint64'>;
		picking_id?: number & tags.Type<'uint64'>;
		picking_type_id: number & tags.Type<'uint64'>;
		stock_quantity_id: number & tags.Type<'uint64'>;
		name: string;
		barcode?: string;
		note?: string;
		internalReference?: StockReferentType;
		sequence?: number;
		priority?: number;
		dateScheduled: string & tags.Format<'date-time'>;
		dateDeadline?: (string & tags.Format<'date-time'>) | null;
		state?: StockMoveState;
		inventoryQuantity: number;
		transferQuantity: number;
		requestTransferQuantity: number;
		receiveQuantity: number;
		weight?: number;
		origin?: number;
	}

	export interface IUpdateStockMove
		extends Omit<
			Partial<ICreateStockMove>,
			'shop_id' | 'partner_id' | 'warehouse_id' | 'product_id' | 'variant_id'
		> {}

	export interface IStockMoveResponse extends BaseResponse {
		shop_id: number | string | null;
		partner_id?: number | string | null;
		updated_by?: number | string | null;
		product_id: number | string | null;
		variant_id: number | string | null;
		uom_uom_id: number | string | null;
		warehouse_id?: number | string | null;
		location_src_id?: number | string | null;
		location_dest_id?: number | string | null;
		picking_id?: number | string | null;
		picking_type_id?: number | string | null;
		stock_quantity_id?: number | string | null;
		name: string;
		barcode?: string | null;
		note?: string | null;
		internalReference?: string | null;
		sequence?: string | number;
		priority?: string | number;
		dateScheduled: string;
		dateDeadline?: string | null;
		state?: string;
		inventoryQuantity: number | string;
		transferQuantity: number | string;
		requestTransferQuantity: number | string;
		receiveQuantity: number | string;
		weight?: number | string;
		origin?: number | string;
		picking?: IStockPicking.IStockPickingResponse | null;
		pickingType?: IStockPickingType.IStockPickingTypeResponse | null;
		warehouse?: IWarehouse.IWarehouseResponse;
		locationSrc?: IStockLocation.IStockLocationResponse;
		locationDest?: IStockLocation.IStockLocationResponse;
		stockQuantity?: IStockQuantity.IStockQuantityResponse | null;
		stockMoveLines?: IStockMoveLine.IStockMoveLineResponse[] | null;
	}
}
