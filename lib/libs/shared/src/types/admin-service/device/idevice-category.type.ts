/* eslint-disable @typescript-eslint/no-namespace */
import { AdminBaseResponse as BaseResponse } from '../../common.type';

export namespace IDeviceCategory {
	export interface ICreate {
		name: string;
		description?: string;
		active?: boolean;
		companyId?: string;
	}

	export interface IUpdate {
		name?: string;
		description?: string;
		active?: boolean;
		companyId?: string;
	}

	export interface IResponse extends BaseResponse {
		name: string;
		description?: string | null;
		active: boolean;
	}
}
