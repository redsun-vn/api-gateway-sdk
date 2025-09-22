/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';

export namespace IThemeCategory {
	export interface ICreate {
		name: string;
		isActive?: boolean;
	}

	export interface IUpdateReq extends Partial<ICreate> {}

	export interface IUpdate extends IUpdateReq {
		id: string;
	}

	export interface IResponse extends BaseResponse {
		name: string;
		isActive: boolean;
	}
}

export namespace IThemeTag {
	export interface ICreate {
		name: string;
		isActive?: boolean;
	}

	export interface IUpdateReq extends Partial<ICreate> {}

	export interface IUpdate extends IUpdateReq {
		id: string;
	}

	export interface IResponse extends BaseResponse {
		name: string;
		isActive: boolean;
	}
}
