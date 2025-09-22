/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace ILineItemTaxLine {
	export interface IInputLineItemTaxLine {
		id?: string;
		name?: string;
		code: string;
		rate: number;
		ratePercentage: number;
	}

	export interface ICreateLineItemTaxLine {
		shop_id?: number & tags.Type<'uint64'>;
		line_item_id: number & tags.Type<'uint64'>;
		name: string;
		code: string;
		rate: number;
		ratePercentage: number;
		userId?: string;
	}

	export interface ICreateLineItemTaxLineKafka extends ICreateLineItemTaxLine {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateLineItemTaxLine {
		name?: string;
		code?: string;
		rate?: number;
		ratePercentage?: number;
		userId?: string;
	}

	export interface IDetailLineItemTaxLineResponse extends BaseResponse {
		shop_id?: number | string | null;
		line_item_id?: number | string | null;
		name: string;
		code: string;
		rate: number | string;
		ratePercentage: number | string;
	}
}
