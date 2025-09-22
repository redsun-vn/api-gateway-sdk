/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from './common.type';
import { ITranslations } from './itranslation.type';

export namespace ITranslationKey {
	export interface ICreate {
		key: string;
		description?: string | null;
		createdById?: number | string;
	}
	export interface IUpdate {
		key: string;
		description?: string | null;
		updatedById?: number | string;
	}

	export interface IResponse extends BaseResponse {
		key: string;
		description?: string | null;
		translations?: ITranslations.IResponse[];
	}
}
