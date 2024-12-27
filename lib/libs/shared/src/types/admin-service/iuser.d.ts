import { tags } from 'typia';
import { IAdminGroup } from './igroup';
import { BaseResponse } from '../common.type';
import { ADMIN_USER_ROLE } from '../../enum';
import { IAdminDepartment } from './iadmin-department.type';
export declare namespace IAdminUser {
    interface ICreate {
        email: string & tags.Format<'email'>;
        name: string;
        code?: string;
        active?: boolean;
        password: string & tags.MinLength<6>;
        groups?: string[];
        isTwoFactorAuthenticationEnabled?: boolean;
        createdById?: number | string;
        permissions?: string[];
        role?: ADMIN_USER_ROLE;
        parentId?: number;
        departmentId?: number | null;
    }
    interface IUpdate {
        email?: string & tags.Format<'email'>;
        name?: string;
        active?: boolean;
        groups?: string[];
        permissions?: string[];
        updatedById?: number | string;
        role?: ADMIN_USER_ROLE;
        parentId?: number;
        departmentId?: number | null;
    }
    interface IUpdatePassword {
        password: string & tags.MinLength<6>;
        newPassword: string & tags.MinLength<6>;
        confirmPassword: string & tags.MinLength<6>;
    }
    interface IResponse extends BaseResponse {
        name: string;
        groups?: null | IAdminGroup.IResponse[];
        active: boolean;
        email: string;
        code?: string | null;
        permissions?: null | string[];
        isTwoFactorAuthenticationEnabled: boolean;
        twoFactorAuthenticationSecret?: string | null;
        role?: ADMIN_USER_ROLE;
        parent_id?: number | string | null;
        parent?: null | IResponse;
        children?: null | IResponse[];
        departmentId?: number | string | null;
        department?: null | IAdminDepartment.IResponse;
    }
    interface IResponseWithoutSecret extends BaseResponse {
        name: string;
        groups?: null | IAdminGroup.IResponse[];
        active: boolean;
        email: string;
        code?: string | null;
        permissions?: null | string[];
        isTwoFactorAuthenticationEnabled: boolean;
        role?: ADMIN_USER_ROLE;
        parent_id?: number | string | null;
        parent?: null | IResponseWithoutSecret;
        children?: null | IResponseWithoutSecret[];
        departmentId?: number | string | null;
        department?: null | IAdminDepartment.IResponse;
    }
}
