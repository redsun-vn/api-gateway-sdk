/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';

export namespace IWallet {
	export interface ICreate {
		active?: boolean;
		partner_id: string | number;
		opt: string;
	}

	export interface IUpdate {
		active?: boolean;
	}

	export interface ISendOTP {
		partner_id: string;
	}

	export interface IResponse extends BaseResponse {
		active?: boolean | null;
		shop_id?: string | number | null;
		totalAmount: number;
		uuid: string;
	}
}
