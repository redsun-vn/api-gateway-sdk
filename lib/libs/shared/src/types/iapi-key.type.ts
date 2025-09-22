import { BaseResponse } from './common.type';
import { IShop } from './ishop';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IApiKey {
	export interface ICreate {
		name: string;
	}

	export interface IUpdate {
		active?: boolean;
		name?: string;
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		apiKey: string;
		name: string;
		active: boolean;
		shop?: IShop.IShopResponse;
	}

	export interface IAdminCreate {
		name: string;
	}

	export interface IAdminUpdate {
		active?: boolean;
		name?: string;
	}

	export interface IAdminResponse extends BaseResponse {
		apiKey: string;
		name: string;
		active: boolean;
	}
}
