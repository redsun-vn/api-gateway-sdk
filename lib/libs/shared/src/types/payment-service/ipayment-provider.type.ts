/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';

export namespace IPaymentProvider {
	export interface IVietQRCreate {
		paymentId: number & tags.Type<'uint64'>;
		bankId: string;
		addInfo: string;
		accountName: string;
		accountNumber: string;
	}

	export interface IVietQRResponse {
		qrCode: string;
	}
}
