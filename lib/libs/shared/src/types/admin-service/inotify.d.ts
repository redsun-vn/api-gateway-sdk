import { AdminBaseResponse as BaseResponse } from '../common.type';
export declare namespace INotify {
    interface ICreate {
        active?: boolean;
        message?: string;
        isMaintance?: boolean;
        htmlContent?: string;
        startDate?: string;
        endDate?: string;
        isUpdateVersionApp?: boolean;
        companyId?: string;
    }
    interface IUpdate extends ICreate {
    }
    interface IResponse extends BaseResponse {
        active: boolean;
        isMaintance: boolean;
        isUpdateVersionApp?: boolean;
        htmlContent: string | null;
        message: string | null;
        startDate: string | null;
        endDate: string | null;
    }
}
