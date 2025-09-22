/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from './common.type';

export namespace IShippingMethod {
	export interface ICreate {
		name: string;
		code: string;
		active?: boolean;
		description?: string;
		icon?: string;
		attachment_id?: number;
		metadata?: string;
	}
	export type IUpdate = Omit<Partial<ICreate>, 'code'>;
	export interface IShippingMethodResponse extends BaseResponse {
		name: string;
		code: string;
		active: boolean;
		description?: null | string;
		icon?: string | null;
		attachment_id?: null | number;
		metadata?: null | string;
	}
}
