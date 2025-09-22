import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IApplicationCategory {
	export interface ICreate {
		name: string;
		description?: string;
		isActive?: boolean;
		slug?: string | null;
	}

	export interface IUpdate extends Partial<ICreate> {}

	export interface IResponse extends BaseResponse {
		name: string;
		slug?: string | null;
		isActive: boolean;
		description?: string | null;
	}
}
