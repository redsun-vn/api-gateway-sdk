/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace IPaymentGateway {
	export interface ICreatePaymentGateway {
		shop_id?: number & tags.Type<'uint64'>;
		name: string;
		abbreviation: string;
		code: string;
		rateFee: number;
		currency?: string;
		gatewayCountry?: string;
		formattedGateway: string;
		active?: boolean;
		international?: boolean;
	}

	export interface IUpdatePaymentGateway {
		name?: string;
		abbreviation?: string;
		code?: string;
		rateFee?: number;
		currency?: string;
		gatewayCountry?: string;
		formattedGateway?: string;
		active?: boolean;
		international?: boolean;
	}

	export interface IPaymentGatewayResponse extends BaseResponse {
		shop_id: number | string | null;
		name: string;
		abbreviation: string;
		code: string;
		rateFee: number | string;
		currency?: string;
		gatewayCountry?: string;
		formattedGateway: string;
		active?: boolean | string;
		international?: boolean | string;
	}
}
