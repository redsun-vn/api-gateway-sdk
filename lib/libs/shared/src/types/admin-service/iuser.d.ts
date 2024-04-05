import { tags } from 'typia';
import { IAdminGroup } from './igroup';
import { BaseResponse } from '../common.type';
export declare namespace IAdminUser {
    interface ICreate {
        email: string & tags.Format<'email'>;
        name: string;
        active?: boolean;
        password: string & tags.MinLength<6>;
        groups?: string[];
        isTwoFactorAuthenticationEnabled?: boolean;
        createdById?: number | string;
        permissions?: string[];
    }
    interface IUpdate {
        email?: string & tags.Format<'email'>;
        name?: string;
        active?: boolean;
        groups?: string[];
        permissions?: string[];
        updatedById?: number | string;
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
        permissions?: null | string[];
        isTwoFactorAuthenticationEnabled: boolean;
        twoFactorAuthenticationSecret?: string | null;
    }
    interface IResponseWithoutSecret extends BaseResponse {
        name: string;
        groups?: null | IAdminGroup.IResponse[];
        active: boolean;
        email: string;
        permissions?: null | string[];
        isTwoFactorAuthenticationEnabled: boolean;
    }
}
