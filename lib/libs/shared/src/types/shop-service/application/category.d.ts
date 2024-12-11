import { BaseResponse } from '../../common.type';
export declare namespace IApplicationCategory {
    interface ICreate {
        name: string;
        description?: string;
        isActive?: boolean;
        slug?: string | null;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResponse extends BaseResponse {
        name: string;
        slug?: string | null;
        isActive: boolean;
        description?: string | null;
    }
}
