import { BaseResponse } from '../../common.type';
import { tags } from 'typia';
import { IStaff } from '../../istaff';
import { IAttendanceShift } from './shift';
export declare namespace IAttendanceRequest {
    interface IRequestCreate {
        branch_id: number;
        shift_id: number | string;
        qr_uuid: string;
        latitude?: string;
        longitude?: string;
        ip_address?: string & tags.Format<'ipv4'>;
        device_id?: string;
        device_info?: string;
        description?: string;
        attendance_type: string;
    }
    interface ICreate {
        shop_id: number;
        branch_id: number;
        user_id: string;
        shift_id: number | string;
        attendance_type: string;
        qr_uuid: string;
        latitude?: string;
        longitude?: string;
        ip_address?: string & tags.Format<'ipv4'>;
        device_id?: string;
        device_info?: string;
        description?: string;
    }
    interface IUpdate {
        status: string;
        updated_by_id: string;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        user_id: string;
        shift_id: number | string | null;
        latitude: string | null;
        longitude: string | null;
        ip_address: string | null;
        device_id: string | null;
        device_info: string | null;
        description: string | null;
        attendance_type: string;
        status: string;
        updated_by_id: string | null;
        user?: IStaff.IStaffResponse | null;
        updated_by?: IStaff.IStaffResponse | null;
        shift?: IAttendanceShift.IResponse | null;
    }
}
