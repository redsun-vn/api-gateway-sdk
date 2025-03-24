import { BaseResponse } from './common.type';
export declare namespace INameSpace {
    interface ICreate {
        code: string;
        name: string;
        description?: string;
        parent_id?: number | null;
        is_active?: boolean;
        createdById?: number | string;
    }
    interface IUpdate {
        code: string;
        name: string;
        description?: string;
        parent_id?: number | null;
        is_active?: boolean;
        updatedById?: number | string;
    }
    interface IResponse extends BaseResponse {
        code: string;
        name: string;
        description?: string | null;
        parent_id?: number | null;
        is_active?: boolean;
        parent?: IResponse | null;
    }
}
