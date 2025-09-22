/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';

export namespace IReservationConfig {
	export interface ICreate {
		product_ids?: string[];
		staff_ids?: string[];
	}
	export interface IUpdate extends Partial<ICreate> {}
	export interface IReservationConfigResponse extends BaseResponse {
		shop_id: number | string;
		product_ids?: string[] | null;
		staff_ids?: string[] | null;
	}
}
