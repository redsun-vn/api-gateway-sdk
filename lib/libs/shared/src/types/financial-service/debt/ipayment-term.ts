import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
import { IPaymentTermLine } from './ipayment-term-line';
/* eslint-disable @typescript-eslint/no-namespace */

export namespace IPaymentTerm {
	export interface ICreate {
		shop_id: number & tags.Type<'uint64'>;
		active: boolean;
		name: string;
		due_days?: number;
		early_discount?: boolean;
		discount_percentage?: number;
		penalty_rate?: number;
		description?: string;
		lines?: IPaymentTermLine.ICreateBase[];
	}

	export type IUpdate = Omit<Partial<ICreate>, 'shop_id' | 'lines'>;

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		active: boolean;
		name: string;
		due_days: number | string | null;
		early_discount: boolean;
		discount_percentage: number | string | null;
		penalty_rate: number | string | null;
		description: string | null;
		lines?: IPaymentTermLine.IResponse[];
	}
}
