import { BaseResponse } from './common.type';
import { IBusinessType } from './ibusiness-type';
export declare namespace ICategoryBusiness {
    interface ICreate {
        name: string;
        description?: string;
        icon?: string;
        metadata?: string;
    }
    interface IUpdate {
        name?: string;
        description?: string;
        icon?: string;
        metadata?: string;
    }
    interface ICategoryBusinessResponse extends BaseResponse {
        name: string;
        description?: null | string;
        icon?: null | string;
        metadata?: string | null;
        businessTypes?: unknown | IBusinessType.IBusinessTypeResponse[];
    }
}
