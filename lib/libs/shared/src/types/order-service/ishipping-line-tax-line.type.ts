/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace IShippingLineTaxLine {
	export interface ICreateShippingLineTaxLine {
		shipping_line_id: number & tags.Type<'uint64'>;
		name: string;
		code: string;
		rate: number;
		ratePercentage: number;
		userId?: string;
	}

	export interface ICreateShippingLineTaxLineKafka
		extends ICreateShippingLineTaxLine {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateShippingLineTaxLine {
		name?: string;
		code?: string;
		rate?: number;
		ratePercentage?: number;
		userId?: string;
	}

	export interface IDetailShippingLineTaxLineResponse extends BaseResponse {
		shop_id: number | string | null;
		shipping_line_id: number | string | null;
		name: string;
		code: string;
		rate: number | string;
		ratePercentage: number | string;
	}
}
