import { BaseResponse } from './common.type';
import { IBusinessType } from './ibusiness-type';
export declare namespace ICategoryBusiness {
    interface ICreate {
        name: string;
        code: string;
        description?: string;
        icon?: string;
        metadata?: Record<string, unknown>;
        active?: boolean;
        default_theme_uuid?: string;
    }
    interface IUpdate {
        name?: string;
        description?: string;
        icon?: string;
        metadata?: Record<string, unknown>;
        code?: string;
        active?: boolean;
        default_theme_uuid?: string | null;
    }
    interface ICategoryBusinessResponse extends BaseResponse {
        name: string;
        code?: string | null;
        description?: null | string;
        icon?: null | string;
        metadata?: Record<string, unknown> | null;
        active?: boolean;
        default_theme_uuid?: string | null;
        businessTypes?: null | IBusinessType.IBusinessTypeResponse[];
    }
}
