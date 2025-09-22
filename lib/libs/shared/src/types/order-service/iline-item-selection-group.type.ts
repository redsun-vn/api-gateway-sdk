/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace ILineItemSelectionGroup {
	export interface IInputLineItemSelectionGroup {
		id?: string;
		group_id: number & tags.Type<'uint64'>;
		selection_id: number & tags.Type<'uint64'>;
		name?: string;
		price: number;
	}

	export interface ICreateLineItemSelectionGroup {
		shop_id?: number & tags.Type<'uint64'>;
		line_item_id: number & tags.Type<'uint64'>;
		group_id: number & tags.Type<'uint64'>;
		selection_id: number & tags.Type<'uint64'>;
		name?: string;
		price: number;
	}

	export interface ICreateLineItemSelectionGroupKafka
		extends ICreateLineItemSelectionGroup {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateLineItemSelectionGroup {
		id?: string;
		group_id?: number & tags.Type<'uint64'>;
		selection_id?: number & tags.Type<'uint64'>;
		name?: string;
		price?: number;
	}

	export interface IDetailLineItemSelectionGroupResponse extends BaseResponse {
		shop_id: number | string | null;
		line_item_id: number | string | null;
		group_id?: number | string | null;
		selection_id?: number | string | null;
		name?: string;
		price: number | string;
	}
}
