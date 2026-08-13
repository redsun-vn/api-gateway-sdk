import { tags } from 'typia';
import { BaseProfileResponse, BaseResponse, IQuery } from './common.type';
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
        manager_id?: string;
    }
    interface ICreateRegister {
        first_name?: null | string;
        password: string & tags.MinLength<6>;
        phone: string;
        shop_id?: string;
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
        shop_id: number | string | null;
        user_id?: string | null;
        profile: IStaffProfile.IStaffProfileResponse | null;
        code: string;
        permission?: null | string[];
        groups?: null | IGroup.IGroupResponse[];
        active: boolean;
        devices?: null | IUserDevice.IUserDeviceResponse[];
        sessions?: null | IPosSession.IPosSessionResponse[];
        branches?: null | IBranch.IBranchResponse[];
        department_id?: number | string | null;
        manager_id?: string | null;
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
        account_status?: TAccountStatus;
        date_of_birth?: string | null;
        gender?: string | null;
        nationality?: string | null;
        ethnicity?: string | null;
        marital_status?: string | null;
        permanent_address?: string | null;
        id_card_issued_date?: string | null;
        id_card_issued_place?: string | null;
        dependents_count?: number | null;
        employment_type?: string | null;
        contract_type?: string | null;
        contract_number?: string | null;
        contract_start_date?: string | null;
        contract_end_date?: string | null;
        probation_end_date?: string | null;
        emergency_contact_name?: string | null;
        emergency_contact_phone?: string | null;
        emergency_contact_relation?: string | null;
        education_level?: string | null;
        major?: string | null;
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
    interface IMyShopStatus {
        hasShop: boolean;
        activeShopIds: string[];
        ownedShopIds: string[];
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
    interface IUpdateManager {
        manager_id: string | null;
    }
    interface IUpdate extends IStaffProfile.IUpdate {
        password?: string & tags.MinLength<6>;
        permission?: string[] | null;
        groups?: string[] | null;
        branches?: string[] | null;
        active?: boolean;
        department_id?: string | null;
        manager_id?: string | null;
        social_insurance?: boolean;
        social_insurance_code?: string;
        health_insurance_code?: string;
        start_date?: string | null;
        end_date?: string | null;
        id_card?: string;
        tax_code?: string;
        bank_account?: string;
        bank_name?: string;
        bank_branch?: string;
        position?: string;
        date_of_birth?: string | null;
        gender?: string | null;
        nationality?: string | null;
        ethnicity?: string | null;
        marital_status?: string | null;
        permanent_address?: string | null;
        id_card_issued_date?: string | null;
        id_card_issued_place?: string | null;
        dependents_count?: number | null;
        employment_type?: string | null;
        contract_type?: string | null;
        contract_number?: string | null;
        contract_start_date?: string | null;
        contract_end_date?: string | null;
        probation_end_date?: string | null;
        emergency_contact_name?: string | null;
        emergency_contact_phone?: string | null;
        emergency_contact_relation?: string | null;
        education_level?: string | null;
        major?: string | null;
    }
    interface IPermissionMapping {
        permission: string[];
    }
    type TAccountStatus = 'NONE' | 'ACTIVE' | 'DISABLED';
    interface IStaffListQuery extends IQuery {
        include_hr_only?: boolean;
    }
    interface IFindByPhoneQuery {
        phone: string;
    }
    interface IHrProfileCreate extends IStaffProfile.ICreate {
        phone: string;
        first_name: string;
        department_id?: string | null;
        position?: string;
        manager_id?: string;
        prefix_code?: string;
        social_insurance?: boolean;
        social_insurance_code?: string;
        health_insurance_code?: string;
        start_date?: string | null;
        end_date?: string | null;
        id_card?: string;
        tax_code?: string;
        bank_account?: string;
        bank_name?: string;
        bank_branch?: string;
        id_card_issued_date?: string | null;
        id_card_issued_place?: string | null;
        dependents_count?: number | null;
        employment_type?: string | null;
        contract_type?: string | null;
        contract_number?: string | null;
        contract_start_date?: string | null;
        contract_end_date?: string | null;
        probation_end_date?: string | null;
        emergency_contact_name?: string | null;
        emergency_contact_phone?: string | null;
        emergency_contact_relation?: string | null;
        education_level?: string | null;
        major?: string | null;
    }
    interface IGrantAccountInput {
        groups?: string[];
    }
    interface IHrProfileResponse extends Omit<IStaffResponse, 'user_id'> {
        user_id: string | null;
        account_status: TAccountStatus;
    }
    interface IStaffByPhoneResponse {
        id: number | string;
        code: string;
        name: string;
        position: string | null;
        user_id: string | null;
        account_status: TAccountStatus;
    }
}
