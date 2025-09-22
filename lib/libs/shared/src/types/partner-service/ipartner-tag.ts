/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';

export namespace IPartnerTag {
	export interface ICreate {
		name: string;
		partnerIds?: string[];
	}
	export type IUpdate = Partial<ICreate>;
	export interface IPartnerTagResponse extends BaseResponse {
		name: string;
		shop_id: number | string;
	}
}
