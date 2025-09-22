import { tags } from 'typia';
import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IApplicationController {
	export interface ICreate {
		name: string;
		path: string;
		description?: string;
		isActive?: boolean;
		appId?: number;
		categoryControllerId?: number & tags.Type<'uint64'>;
	}

	export interface IUpdate extends Partial<ICreate> {}

	export interface IResponse extends BaseResponse {
		name: string;
		path: string;
		description?: string | null;
		appId?: number | string | null;
		isActive: boolean;
		categoryControllerId?: number | string | null;
	}
}
