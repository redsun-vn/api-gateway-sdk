/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from './common.type';

export namespace IPaymentMethod {
	export interface ICreate {
		name: string;
		code?: string & tags.MinLength<2> & tags.MaxLength<10>;
		active?: boolean;
		description?: string;
		icon?: string;
		attachment_id?: number | string;
		metadata?: string;
	}
	export interface IUpdate extends Partial<ICreate> {}
	export interface IPaymentMethodResponse extends BaseResponse {
		name: string;
		code: string;
		active: boolean;
		description?: null | string;
		icon?: string | null;
		attachment_id?: null | number | string;
		metadata?: null | string;
	}
}
