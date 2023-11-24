import { BaseProfile, BaseProfileResponse, BaseResponse } from './common.type';
import { IShop } from './ishop';
import { IStaff } from './istaff';
import { tags } from 'typia';
export declare namespace IBranch {
    interface ICreate extends BaseProfile {
        name: string & tags.MinLength<5>;
        active?: number;
        zipcode?: string;
        latitude?: string;
        longitude?: string;
        timeZone?: string;
        isDefault?: boolean;
    }
    interface IUpdate extends BaseProfile {
        staff_id?: string[];
        name?: string & tags.MinLength<5>;
        zipcode?: string;
        latitude?: string;
        longitude?: string;
        timeZone?: string;
        active?: number;
        isDefault?: boolean;
    }
    interface IBranchResponse extends BaseProfileResponse, BaseResponse {
        shop_id: string;
        name: string;
        isDefault: boolean;
        active: boolean;
        zipcode?: null | string;
        latitude?: null | string;
        longitude?: null | string;
        timeZone: string;
        staffs?: IStaff.IStaffResponse[];
        shop?: IShop.IShopResponse;
    }
}
