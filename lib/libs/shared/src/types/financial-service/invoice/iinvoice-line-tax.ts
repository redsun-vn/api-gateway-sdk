/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../../common.type';

export namespace IInvoiceLineTax {
	export interface IInput {
		id?: string;
		name?: string;
		code: string;
		rate: number;
		ratePercentage: number;
	}
	export interface ICreate {
		invoice_line_id: number & tags.Type<'uint64'>;
		id?: string;
		name?: string;
		code: string;
		rate: number;
		ratePercentage: number;
	}

	export interface IUpdate {
		id: string;
		name?: string;
		code?: string;
		rate?: number;
		ratePercentage?: number;
	}

	export interface IResponse extends BaseResponse {
		invoice_line_id: number | string | null;
		name?: string;
		code: string;
		rate: number | string;
		ratePercentage: number | string;
	}
}
