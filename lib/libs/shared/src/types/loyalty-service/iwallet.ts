/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';

export namespace IWallet {
	export interface ICreate {
		partner_id: string;
		active?: boolean;
	}

	export interface ICreateFromAdminShop extends ICreate {}

	export interface ICreateFromPOSShop extends ICreate {
		otp: string;
	}

	export interface IUpdate {
		active?: boolean;
	}

	export interface ISendOTP {
		partner_id: string;
	}

	export interface IPartner {
		display_name?: string;
	}

	export interface IResponse extends BaseResponse {
		active?: boolean | null;
		shop_id?: string | number | null;
		totalAmount: string | number | null;
		uuid: string;
		partner: IPartner;
	}
}
