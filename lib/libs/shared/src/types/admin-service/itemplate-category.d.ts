import { AdminBaseResponse as BaseResponse } from '../common.type';
export declare enum TemplateType {
    EMAIL = "EMAIL",
    SMS = "SMS",
    ZMS = "ZMS",
    RECEIPT = "RECEIPT",
    DEBT = "DEBT",
    NOTIFICATION = "NOTIFICATION",
    INVOICE = "INVOICE",
    CONTRACT = "CONTRACT",
    PRINT = "PRINT",
    OTHER = "OTHER"
}
export declare namespace IAdminTemplateCategory {
    interface ICreate {
        name: string;
        type: TemplateType;
        description?: string;
        sortOrder?: number;
        active?: boolean;
        companyId?: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResponse extends BaseResponse {
        name: string;
        type: string;
        description?: string | null;
        sortOrder: number;
        active: boolean;
    }
}
