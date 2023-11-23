import { tags } from 'typia';
import { BaseProfileResponse, BaseResponse } from './common.type';
import { IStaffProfile } from './iprofile-staff';
import { IUserDevice } from './iuser-device';
import { IPosSession } from './ipos-session';
import { IGroup } from './igroup';
export declare namespace IStaff {
    interface ICreate {
        username: string & tags.MinLength<4>;
        password: string;
        permission?: string[];
        groups?: string[];
        prefix_code?: string;
    }
    interface IStaffResponse extends BaseResponse, BaseProfileResponse {
        shop_id: string;
        user_id: string;
        profile: IStaffProfile.IStaffProfileResponse | null;
        code: string;
        permission?: null | string[];
        groups?: null | IGroup.IGroupResponse[];
        profileId: string;
        active: boolean;
        devices?: IUserDevice.IUserDeviceResponse[] | null;
        sessions?: unknown | IPosSession.IPosSessionResponse[];
    }
    interface IUser {
        user_id?: string;
        user_ids?: string[];
    }
    interface IResetPassword {
        password: string;
    }
    interface IUpdate {
        active?: boolean;
        permission?: string[];
        groups?: string[];
        branches?: string[];
    }
    interface IPermissionMapping {
        permission: string[];
    }
}
