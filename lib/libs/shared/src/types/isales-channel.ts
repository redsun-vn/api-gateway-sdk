/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from './common.type';

export namespace ISalesChannel {
	export interface ICreate {
		name: string;
		code: string;
		active?: boolean;
		description?: string;
		icon?: string;
		attachment_id?: number;
		warehouse_id?: number;
		metadata?: string;
	}
	export type IUpdate = Omit<Partial<ICreate>, 'code'>;

	export interface ISalesChannelResponse extends BaseResponse {
		name?: string;
		code?: string;
		active?: boolean;
		description?: string | null;
		icon?: string | null;
		attachment_id?: string | number | null;
		warehouse_id?: string | number | null;
		metadata?: string | null;
	}
}
