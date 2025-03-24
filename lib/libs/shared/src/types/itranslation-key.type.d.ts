import { BaseResponse } from './common.type';
import { ITranslations } from './itranslation.type';
export declare namespace ITranslationKey {
    interface ICreate {
        key: string;
        description?: string | null;
        createdById?: number | string;
    }
    interface IUpdate {
        key: string;
        description?: string | null;
        updatedById?: number | string;
    }
    interface IResponse extends BaseResponse {
        key: string;
        description?: string | null;
        translations?: ITranslations.IResponse[];
    }
}
