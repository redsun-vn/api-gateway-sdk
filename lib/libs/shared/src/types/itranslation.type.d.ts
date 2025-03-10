import { BaseResponse } from './common.type';
export declare namespace ITranslations {
    interface ICreate {
        namespace_id: string;
        key_id: string;
        language_id: string;
        value: string;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        namespace_id: string;
        key_id: string;
        language_id: string;
        value: string;
    }
}
