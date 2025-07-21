import { AdminBaseResponse as BaseResponse } from '../common.type';
export declare namespace IAdminDepartment {
    interface ICreate {
        name: string;
        active: boolean;
        owner_id: string;
        parent_id?: string | number | null;
        description?: string;
        parent_flatten_ids?: string;
        role?: string;
        canUseRoleIds?: string[];
        companyId?: string;
    }
    type IUpdate = Omit<Partial<ICreate>, 'owner_id'>;
    interface IResponse extends BaseResponse {
        name: string;
        active: boolean;
        owner_id: string | number | null;
        parent_id: string | number | null;
        description: string | null;
        parent_flatten_ids: string | null;
        role: string;
        canUseRoleIds?: string[];
    }
}
