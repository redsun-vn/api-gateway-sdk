import { AdminBaseResponse as BaseResponse } from '../common.type';
import { IAdminTemplateCategory, TemplateType } from './itemplate-category';
export declare namespace IAdminTemplate {
    interface ICreate {
        code: string;
        name: string;
        type: TemplateType;
        categoryId?: number | string;
        content?: string;
        variables?: object[];
        metadata?: object;
        isDefault?: boolean;
        active?: boolean;
        companyId?: string;
    }
    interface IUpdate extends Partial<ICreate> {
        changeNote?: string;
    }
    interface IResponse extends BaseResponse {
        code: string;
        name: string;
        type: string;
        categoryId?: number | null;
        category?: IAdminTemplateCategory.IResponse;
        content?: string | null;
        variables?: object[] | null;
        metadata?: object | null;
        currentVersion: number;
        isDefault: boolean;
        active: boolean;
    }
}
