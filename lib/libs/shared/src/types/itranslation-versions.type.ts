/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from './common.type';

export namespace ITranslationVersions {
	export interface ICreate {
		translation_id: string | number;
		value: string;
		createdById?: number | string;
	}
	export interface IUpdate {
		translation_id: string | number;
		value: string;
		updatedById?: number | string;
	}

	export interface IResponse extends BaseResponse {
		translation_id: string | number;
		value: string;
	}
}
