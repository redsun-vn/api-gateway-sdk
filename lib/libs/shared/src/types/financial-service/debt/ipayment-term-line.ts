import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
import {
	PAYMENT_TERM_LINE_DELAY_TYPE,
	PAYMENT_TERM_LINE_VALUE_TYPE,
} from '../../../enum';
/* eslint-disable @typescript-eslint/no-namespace */

export namespace IPaymentTermLine {
	export interface ICreateBase {
		value: PAYMENT_TERM_LINE_VALUE_TYPE;
		value_amount: number;
		delay_type: PAYMENT_TERM_LINE_DELAY_TYPE;
		delay_days: number;
	}
	export interface ICreate extends ICreateBase {
		term_id: number & tags.Type<'uint64'>;
	}

	export interface ICreateMultiple {
		lines: ICreateBase[];
	}

	export type IUpdate = Partial<ICreateBase>;

	export interface IResponse extends BaseResponse {
		term_id: number | string;
		value: PAYMENT_TERM_LINE_VALUE_TYPE;
		value_amount: number | string;
		delay_type: PAYMENT_TERM_LINE_DELAY_TYPE;
		delay_days: number | string;
	}
}
