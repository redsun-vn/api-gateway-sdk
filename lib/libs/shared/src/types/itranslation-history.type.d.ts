import { BaseResponse } from './common.type';
export declare namespace ITranslationHistory {
    interface ICreate {
        translation_id: string;
        value: string;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        translation_id: string;
        value: string;
    }
}
