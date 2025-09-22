/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace IBankAccount {
	export interface ICreateBankAccount {
		shop_id?: number & tags.Type<'uint64'>;
		qr_image_id?: number & tags.Type<'uint64'>;
		bankName: string;
		accountName: string;
		accountNumber: string;
		bankAddress?: string;
		bankCountry?: string;
		active?: boolean;
		bankFullName?: string;
		bankCode?: string;
		bankBin?: string;
		bankSwiftCode?: string;
	}

	export interface IUpdateBankAccount {
		qr_image_id?: number & tags.Type<'uint64'>;
		bankName?: string;
		accountName?: string;
		accountNumber?: string;
		bankAddress?: string;
		bankCountry?: string;
		active?: boolean;
		bankFullName?: string;
		bankCode?: string;
		bankBin?: string;
		bankSwiftCode?: string;
	}

	export interface IBankAccountResponse extends BaseResponse {
		shop_id: number | string | null;
		qr_image_id: number | string | null;
		bankName: string;
		accountName: string;
		accountNumber: string;
		bankAddress?: string | null;
		bankCountry?: string | null;
		active: boolean;
		bankFullName?: string | null;
		bankCode?: string | null;
		bankBin?: string | null;
		bankSwiftCode?: string | null;
	}
}
