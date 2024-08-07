import { tags } from 'typia';
import { BaseProfile, BaseProfileResponse, BaseResponse } from './common.type';
export declare namespace IStaffProfile {
    interface ICreate extends BaseProfile {
        first_name?: string;
        last_name?: string;
        zipcode?: string;
        address1?: string;
        attachment_id?: number;
        display_name?: string & tags.MinLength<5>;
        shop_id?: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IUpdateDisplayName {
        display_name: string & tags.MinLength<5>;
        user_id: string;
    }
    interface IStaffProfileResponse extends BaseResponse, BaseProfileResponse {
        display_name?: string | null;
        first_name?: null | string;
        last_name?: null | string;
        zipcode?: null | string;
        attachment_id?: null | string;
        shop_id: string | null;
    }
}
