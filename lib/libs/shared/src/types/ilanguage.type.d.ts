import { BaseResponse } from './common.type';
export declare namespace ILanguage {
    interface ICreate {
        code: string;
        name: string;
        is_default?: boolean;
        createdById?: number | string;
    }
    interface IUpdate {
        code: string;
        name: string;
        is_default?: boolean;
        updatedById?: number | string;
    }
    interface ILanguageResponse extends BaseResponse {
        code: string;
        name: string;
        is_default?: boolean;
    }
}
