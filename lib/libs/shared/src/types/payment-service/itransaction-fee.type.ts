/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ITransaction } from './itransaction.type';
import { TransactionFeeType } from '../../enum';

export namespace ITransactionFee {
	export interface ICreateTransactionFee {
		shop_id?: number & tags.Type<'uint64'>;
		transaction_id: number & tags.Type<'uint64'>;
		name: string;
		amount: number;
		flatFee: number;
		ratePercentage: number;
		taxAmount: number;
		flatFeeName: string;
		rateName: string;
		type?: TransactionFeeType;
	}

	export interface IUpdateTransactionFee {
		name?: string;
		amount?: number;
		flatFee?: number;
		ratePercentage?: number;
		taxAmount?: number;
		flatFeeName?: string;
		rateName?: string;
		type?: TransactionFeeType;
	}

	export interface ITransactionFeeResponse extends BaseResponse {
		shop_id: number | string | null;
		transaction_id?: number | string | null;
		name: string;
		amount: number | string;
		flatFee: number | string;
		ratePercentage: number | string;
		taxAmount: number | string;
		flatFeeName: string;
		rateName: string;
		type: string;
		transaction?: ITransaction.ITransactionResponse;
	}
}
