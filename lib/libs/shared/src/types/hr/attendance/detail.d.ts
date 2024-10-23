import { BaseResponse } from '../../common.type';
import { tags } from 'typia';
import { IStaff } from '../../istaff';
import { IAttendanceShift } from './shift';
export declare namespace IAttendanceDetail {
    interface IRequestCreate {
        branch_id: number;
        qr_uuid: string;
        attendance_type: string;
        shift_id: number | string;
        in_latitude?: string;
        in_longitude?: string;
        in_ip_address?: string & tags.Format<'ipv4'>;
        in_device_id?: string;
        in_device_info?: string;
        description?: string;
    }
    interface ICreate {
        shop_id: number;
        branch_id: number;
        user_id: string;
        attendance_type: string;
        check_in: string;
        shift_id: number | string;
        in_latitude?: string;
        in_longitude?: string;
        in_ip_address?: string & tags.Format<'ipv4'>;
        in_device_id?: string;
        in_device_info?: string;
        description?: string;
        created_by_id?: string;
    }
    interface IUpdate {
        attendance_type: string;
        description?: string;
        updated_by_id?: string;
        out_latitude?: string;
        out_longitude?: string;
        out_ip_address?: string & tags.Format<'ipv4'>;
        out_device_id?: string;
        out_device_info?: string;
        check_out: string;
    }
    interface IUpdateTime {
        check_out?: string;
        check_in?: string;
        updated_by_id?: string;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        user_id: string;
        attendance_type: string;
        check_in: string;
        shift_id: number | string | null;
        in_latitude: string | null;
        in_longitude: string | null;
        in_ip_address: string | null;
        in_device_id: string | null;
        in_device_info: string | null;
        description: string | null;
        created_by_id: string | null;
        updated_by_id: string | null;
        out_latitude: string | null;
        out_longitude: string | null;
        out_ip_address: string | null;
        out_device_id: string | null;
        out_device_info: string | null;
        check_out: string | null;
        user?: IStaff.IStaffResponse | null;
        created_by?: IStaff.IStaffResponse | null;
        updated_by?: IStaff.IStaffResponse | null;
        shift?: IAttendanceShift.IResponse | null;
        worked_hours: number | string | null;
        is_late_in: boolean;
        is_early_out: boolean;
    }
}
