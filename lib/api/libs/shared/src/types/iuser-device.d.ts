import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IUserDevice {
    interface ICreate {
        device_id: string;
        refresh_token: string;
        lastLoginAt: string & tags.Format<'date-time'>;
        device_info: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IUserDeviceResponse extends BaseResponse {
        device_id: string;
        refresh_token: string;
        lastLoginAt: string;
        staff_id: string;
        device_info: string;
        shop_id: string;
    }
}
