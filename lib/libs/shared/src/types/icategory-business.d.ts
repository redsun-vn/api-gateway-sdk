import { BaseResponse } from './common.type';
import { IBusinessType } from './ibusiness-type';
export declare namespace ICategoryBusiness {
    interface ICreate {
        name: string;
        code: string;
        description?: string;
        icon?: string;
        metadata?: string;
        active?: boolean;
    }
    interface IUpdate {
        name?: string;
        description?: string;
        icon?: string;
        metadata?: string;
        code?: string;
        active?: boolean;
    }
    interface ICategoryBusinessResponse extends BaseResponse {
        name: string;
        code?: string | null;
        description?: null | string;
        icon?: null | string;
        metadata?: string | null;
        active?: boolean;
        businessTypes?: null | IBusinessType.IBusinessTypeResponse[];
    }
}
