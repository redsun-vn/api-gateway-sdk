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
export declare enum TemplateCategoryType {
    TRANSACTION = "TRANSACTION",
    MARKETING = "MARKETING",
    NOTIFICATION = "NOTIFICATION",
    SYSTEM = "SYSTEM",
    REPORT = "REPORT",
    OTHER = "OTHER"
}
export declare enum TemplateStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    DRAFT = "draft",
    ARCHIVED = "archived"
}
export declare namespace IAdminTemplate {
    interface ICreate {
        name: string;
        description?: string;
        type: TemplateType;
        categoryType?: TemplateCategoryType;
        subject?: string;
        body?: string;
        variables?: object[];
        metadata?: object;
        isDefault?: boolean;
        status?: string;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        name: string;
        description?: string | null;
        type: string;
        categoryType?: string;
        subject?: string | null;
        body?: string | null;
        variables?: object[] | null;
        metadata?: any | null;
        isDefault: boolean;
        status: string;
    }
}
