/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { KDSState } from '../../enum';

export namespace IKDSItem {
	export interface IInputItem {
		shop_id: number & tags.Type<'uint64'>;
		branch_id: number & tags.Type<'uint64'>;
		created_by_id: number & tags.Type<'uint64'>;
		updated_by_id: number & tags.Type<'uint64'>;
		product_id: number & tags.Type<'uint64'>;
		variant_id: number & tags.Type<'uint64'>;
		table_id?: number & tags.Type<'uint64'>;
		uom_uom_id?: number & tags.Type<'uint64'>;
		order_code?: string;
		order_uuid?: string & tags.Format<'uuid'>;
		line_item_uuid?: string & tags.Format<'uuid'>;
		uuid?: string | null;
		variantTitle?: string | null;
		title?: string | null;
		state?: KDSState | null;
		isPrioritize?: boolean;
		note?: string | null;
		quantity: number;
		processedAt?: (string & tags.Format<'date-time'>) | null;
		completedAt?: (string & tags.Format<'date-time'>) | null;
		sequenece?: number;
		recallReason?: string;
		returnReason?: string;
	}

	export interface IUpdateItem extends Partial<IInputItem> {
		id?: string;
	}

	export interface IDetailItemResponse extends BaseResponse {
		shop_id: number | string;
		branch_id: number | string;
		created_by_id: number | string;
		updated_by_id: number | string;
		product_id: number | string;
		variant_id: number | string;
		table_id?: number | string | null;
		uom_uom_id?: number | string | null;
		order_code?: string | null;
		order_uuid?: string | null;
		line_item_uuid?: string | null;
		uuid?: string | null;
		variantTitle?: string | null;
		title?: string | null;
		state?: string | null;
		isPrioritize?: boolean;
		note?: string | null;
		quantity: number | string;
		processedAt?: string | null;
		completedAt?: string | null;
		sequenece?: number | string;
		recallReason?: string | null;
		returnReason?: string | null;
	}
}
