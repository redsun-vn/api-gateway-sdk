/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace ITax {
	export interface ICreateTax {
		shop_id?: number & tags.Type<'uint64'>;
		name?: string;
		code: string;
		description?: string | null;
		rate: number;
		ratePercentage: number & tags.Type<'int32'>;
		active?: boolean;
	}

	export interface IUpdateTax {
		name?: string;
		code?: string;
		description?: string | null;
		rate?: number;
		ratePercentage?: number & tags.Type<'int32'>;
		active?: boolean;
	}

	export interface IDetailTaxResponse extends BaseResponse {
		shop_id: number | string | null;
		code: string;
		name?: string | null;
		description?: string | null;
		rate: number | string;
		ratePercentage: number | string;
		active?: boolean;
	}
}
