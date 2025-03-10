import { BaseResponse } from './common.type';
export declare namespace ILanguage {
    interface ICreate {
        code: string;
        name: string;
        is_default?: boolean;
    }
    interface IUpdate {
        code: string;
        name: string;
        is_default?: boolean;
    }
    interface ILanguageResponse extends BaseResponse {
        code: string;
        name: string;
        is_default?: boolean;
    }
}
