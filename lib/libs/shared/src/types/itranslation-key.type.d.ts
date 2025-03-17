import { BaseResponse } from './common.type';
import { ITranslations } from './itranslation.type';
export declare namespace ITranslationKey {
    interface ICreate {
        key: string;
        description?: string | null;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        key: string;
        description?: string | null;
        translations?: ITranslations.IResponse[];
    }
}
