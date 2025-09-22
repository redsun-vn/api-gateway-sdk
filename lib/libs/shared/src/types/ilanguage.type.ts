/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from './common.type';
export namespace ILanguage {
	export interface ICreate {
		code: string;
		name: string;
		is_default?: boolean;
		createdById?: number | string;
	}
	export interface IUpdate {
		code: string;
		name: string;
		is_default?: boolean;
		updatedById?: number | string;
	}

	export interface ILanguageResponse extends BaseResponse {
		code: string;
		name: string;
		is_default?: boolean;
	}
}
