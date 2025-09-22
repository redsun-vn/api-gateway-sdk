/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { IBankAccount } from './ibank-account.type';
import { ICheckout } from './icheckout.type';
import { IPayment } from './ipayment.type';
import { BaseResponse } from '../common.type';

export namespace IPaymentLink {
	export interface IPaymentLinkCreate {
		shop_id?: number & tags.Type<'uint64'>;
		order_id: number & tags.Type<'uint64'>;
		bank_account_id?: number & tags.Type<'uint64'>;
		checkout_id: number & tags.Type<'uint64'>;
		payment_id: number & tags.Type<'uint64'>;
		expiredAt: string;
		type: string; // vnpayqr || bank
		content?: string;
	}
	export interface IPaymentLinkUpdate {
		expiredAt?: string;
		bank_account_id?: number & tags.Type<'uint64'>;
	}

	export interface IUpdatePaymentResponse {
		paymentCode: string;
	}

	export interface IPaymentLinkResponse extends BaseResponse {
		shop_id: number | string;
		order_id: number | string;
		bank_account_id?: number | string | null;
		checkout_id: number | string;
		payment_id?: number | string | null;
		type?: string | null; // vnpayqr || bank
		content?: string | null;
		code: string;
		expiredAt?: string | null;
		checkout?: ICheckout.ICheckoutResponse;
		bankAccount?: IBankAccount.IBankAccountResponse | null;
		payment?: IPayment.IPaymentResponse;
	}
}
