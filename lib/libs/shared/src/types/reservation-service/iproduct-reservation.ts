/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';

export namespace IProductReservation {
	export interface ICreate {
		product_id: number;
		reservation_id: number;
		quantity: number;
		objectBody?: Record<string, unknown>;
	}
	export interface IUpdate extends Partial<ICreate> {}
	export interface IProductReservationResponse extends BaseResponse {
		product_id: number | string;
		reservation_id: number | string;
		quantity: number | string | null;
		objectBody?: Record<string, unknown> | null;
	}
}
