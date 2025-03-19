import { BaseResponse } from './common.type';
export declare namespace INameSpace {
    interface ICreate {
        code: string;
        name: string;
        description?: string;
        parent_id?: number | null;
        is_active?: boolean;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        code: string;
        name: string;
        description?: string | null;
        parent_id?: number | null;
        is_active?: boolean;
        parent?: IResponse | null;
    }
}
