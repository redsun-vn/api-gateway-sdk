import { tags } from 'typia';
import { AdminBaseResponse as BaseResponse } from '../common.type';
export declare namespace IAdminGroup {
    interface ICreate {
        name: string & tags.MinLength<3> & tags.MaxLength<50>;
        active?: boolean;
        permission: string[];
        parent_id?: number;
        companyId?: string;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        name: string;
        active: boolean;
        permission: string[];
        parent_id?: number | string | null;
    }
}
