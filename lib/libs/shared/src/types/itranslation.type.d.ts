/// <reference types="multer" />
import { BaseResponse, IQuery } from './common.type';
import { ILanguage } from './ilanguage.type';
import { INameSpace } from './inamespace.type';
import { ITranslationImport } from './itranslation-import.type';
import { ITranslationKey } from './itranslation-key.type';
export declare namespace ITranslations {
    interface ICreate {
        namespace_id: string | number;
        key_id: string | number;
        language_id: string | number;
        value: string;
    }
    interface IImport {
        body: ITranslationImport.ImportDto;
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
    }
}
