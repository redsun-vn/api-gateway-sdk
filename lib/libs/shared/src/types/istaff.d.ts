import { tags } from 'typia';
import { BaseProfileResponse, BaseResponse } from './common.type';
import { IStaffProfile } from './iprofile-staff';
import { IUserDevice } from './iuser-device';
import { IPosSession } from './ipos-session';
import { IGroup } from './igroup';
import { IBranch } from './ibranch';
export declare namespace IStaff {
    interface ICreate extends IStaffProfile.ICreate {
        password: string & tags.MinLength<6>;
        permission?: string[];
        groups?: string[];
        prefix_code?: string;
        branches?: string[];
        active?: boolean;
        department_id?: string;
    }
    interface ICreateRegister {
        password: string & tags.MinLength<6>;
        phone: string;
    }
    interface ICreate2 extends IStaffProfile.ICreate {
        permission?: string[];
        groups?: string[];
        branches?: string[];
        active?: boolean;
        shopId: string;
        userId: string;
    }
    interface IInvite {
        phone: string;
        shopName: string;
        shopId?: string;
        branchIds?: number[];
        groupIds?: number[];
    }
    interface IStaffResponse extends BaseResponse, BaseProfileResponse {
        shop_id: string | null;
        user_id: string;
        profile: IStaffProfile.IStaffProfileResponse | null;
        code: string;
        permission?: null | string[];
        groups?: null | IGroup.IGroupResponse[];
        active: boolean;
        devices?: null | IUserDevice.IUserDeviceResponse[];
        sessions?: null | IPosSession.IPosSessionResponse[];
        branches?: null | IBranch.IBranchResponse[];
        department_id?: number | string | null;
    }
    interface IRegisterResponse extends BaseResponse {
        user_id: string;
        code: string;
        active: boolean;
    }
    interface IUser {
        user_id?: string;
        user_ids?: string[];
    }
    interface IResetPassword {
        password: string;
    }
    interface IUpdatePassword {
        password: string & tags.MinLength<6>;
        newPassword: string & tags.MinLength<6>;
        confirmPassword: string & tags.MinLength<6>;
        username: string;
    }
    interface IUpdate extends IStaffProfile.IUpdate {
        password?: string & tags.MinLength<6>;
        permission?: string[];
        groups?: string[];
        branches?: string[];
        active?: boolean;
        department_id?: string;
    }
    interface IPermissionMapping {
        permission: string[];
    }
}
