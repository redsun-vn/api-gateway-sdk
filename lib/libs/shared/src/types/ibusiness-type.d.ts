import { BaseResponse } from './common.type';
export declare namespace IBusinessType {
    interface ICreate {
        name: string;
        active?: boolean;
        description?: string;
        icon?: string;
        metadata?: string;
        category_business_id: string;
        code: string;
    }
    interface IUpdate {
        name?: string;
        active?: boolean;
        description?: string;
        icon?: string;
        metadata?: string;
        code?: string;
    }
    interface IBusinessTypeResponse extends BaseResponse {
        name: string;
        description?: null | string;
        category_business_id: string;
        icon?: null | string;
        metadata?: string | null;
        active: boolean;
        code: string | null;
    }
}
