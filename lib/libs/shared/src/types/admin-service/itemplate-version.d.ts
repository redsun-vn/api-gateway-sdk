import { AdminBaseResponse as BaseResponse } from '../common.type';
export declare namespace IAdminTemplateVersion {
    interface IResponse extends BaseResponse {
        templateId: number;
        version: number;
        content?: string | null;
        variables?: object[];
        metadata?: object;
        changeNote?: string | null;
    }
}
