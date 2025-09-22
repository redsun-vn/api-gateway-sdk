/* eslint-disable @typescript-eslint/no-namespace */

import { AdminBaseResponse as BaseResponse } from '../common.type';

export namespace INotify {
	export interface ICreate {
		active?: boolean;
		message?: string;
		isMaintance?: boolean;
		htmlContent?: string;
		startDate?: string;
		endDate?: string;
		isUpdateVersionApp?: boolean;
		companyId?: string;
	}

	export interface IUpdate extends ICreate {}

	export interface IResponse extends BaseResponse {
		active: boolean;
		isMaintance: boolean;
		isUpdateVersionApp?: boolean;
		htmlContent: string | null;
		message: string | null;
		startDate: string | null;
		endDate: string | null;
	}
}
