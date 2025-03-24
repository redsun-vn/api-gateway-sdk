import { BaseResponse } from './common.type';
export declare namespace ITranslationVersions {
    interface ICreate {
        translation_id: string | number;
        value: string;
        createdById?: number | string;
    }
    interface IUpdate {
        translation_id: string | number;
        value: string;
        updatedById?: number | string;
    }
    interface IResponse extends BaseResponse {
        translation_id: string | number;
        value: string;
    }
}
