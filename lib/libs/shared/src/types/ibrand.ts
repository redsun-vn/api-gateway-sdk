/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from './common.type';

export namespace IBrand {
	export interface ICreate {
		attachment_id?: number & tags.Type<'uint64'>;
		description?: string;
		slogan?: string;
		// shop_id: string;
	}

	export interface IUpdate extends Partial<ICreate> {}
	export interface IBrandResponse extends BaseResponse {
		slogan?: null | string;
		attachment_id?: null | string;
		description?: null | string;
		shop_id: string;
	}
}
