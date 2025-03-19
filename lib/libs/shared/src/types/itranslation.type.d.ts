/// <reference types="multer" />
import { BaseResponse, IQuery } from './common.type';
import { ILanguage } from './ilanguage.type';
import { INameSpace } from './inamespace.type';
import { ITranslationKey } from './itranslation-key.type';
import { ITranslationVersions } from './itranslation-versions.type';
export declare namespace ITranslations {
    interface ICreate {
        namespace_id: string | number;
        key_id: string | number;
        language_id: string | number;
        value: string;
    }
    interface IImport {
        body: string;
        query?: IQuery;
        file: Express.Multer.File;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
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
