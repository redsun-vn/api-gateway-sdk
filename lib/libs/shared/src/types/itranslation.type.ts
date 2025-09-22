/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse, IQuery } from './common.type';
import { ILanguage } from './ilanguage.type';
import { INameSpace } from './inamespace.type';
import { ITranslationKey } from './itranslation-key.type';
import { ITranslationVersions } from './itranslation-versions.type';

export namespace ITranslations {
	export interface ICreate {
		namespace_id: string | number;
		key_id: string | number;
		language_id: string | number;
		value: string;
		createdById?: number | string;
	}
	export interface IImport {
		body: string;
		query?: IQuery;
		file: Express.Multer.File;
	}
	export interface IUpdate {
		namespace_id: string | number;
		key_id: string | number;
		language_id: string | number;
		value: string;
		updatedById?: number | string;
	}
	export interface IResponse extends BaseResponse {
		namespace_id: string | number;
		key_id: string | number;
		language_id: string | number;
		value: string;
		translation_key?: null | ITranslationKey.IResponse;
		namespace?: null | INameSpace.IResponse;
		language?: null | ILanguage.ILanguageResponse;
		versions?: null | ITranslationVersions.IResponse[];
	}
}
