/* eslint-disable */
/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';

export namespace IPartnerCategory {
	export interface ICreate {
		name: string;
		isDefault?: boolean;
		active?: boolean;
		description?: string;
		image_id?: number;
	}
	export type IUpdate = Partial<ICreate>;

	export interface IResponse extends BaseResponse {
		shop_id: string | number;
		name: string;
		active: boolean;
		description?: string;
		isDefault?: boolean;
		image_id: number | null;
	}
}
