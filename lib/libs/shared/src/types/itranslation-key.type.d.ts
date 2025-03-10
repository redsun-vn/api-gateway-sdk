import { BaseResponse } from './common.type';
export declare namespace ITranslationKey {
    interface ICreate {
        key: string;
        description: string;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        key: string;
        description: string;
    }
}
