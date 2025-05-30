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
        social_insurance?: boolean;
        social_insurance_code?: string;
        health_insurance_code?: string;
        start_date?: string;
        end_date?: string;
        id_card?: string;
        tax_code?: string;
        bank_account?: string;
        bank_name?: string;
        bank_branch?: string;
        position?: string;
    }
    interface ICreateRegister {
        first_name?: null | string;
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
        social_insurance?: boolean;
        social_insurance_code?: string | null;
        health_insurance_code?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        id_card?: string | null;
        tax_code?: string | null;
        bank_account?: string | null;
        bank_name?: string | null;
        bank_branch?: string | null;
        position?: string | null;
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
        permission?: string[] | null;
        groups?: string[] | null;
        branches?: string[] | null;
        active?: boolean;
        department_id?: string | null;
        social_insurance?: boolean;
        social_insurance_code?: string;
        health_insurance_code?: string;
        start_date?: string;
        end_date?: string;
        id_card?: string;
        tax_code?: string;
        bank_account?: string;
        bank_name?: string;
        bank_branch?: string;
        position?: string;
    }
    interface IPermissionMapping {
        permission: string[];
    }
}
