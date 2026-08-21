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
        description?: string;
    }
    interface IImport {
        shop_id: number;
        branch_id: number;
        user_id: string;
        shift_id: number | string;
        check_in: string;
        check_out: string;
        created_by_id: string;
        description?: string;
    }
    interface IImportRequest {
        branch_id: number;
        user_id: string;
        shift_id: number | string;
        check_in: string;
        check_out: string;
        description?: string;
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
        time_worked?: string | null;
        time_late_in?: string | null;
        time_early_out?: string | null;
    }
    type TImportDuplicateMode = 'skip' | 'update_existing' | 'reject';
    interface IImportBatchEntry {
        _row_index?: number;
        staff_code: string;
        date: string;
        check_in: string;
        check_out: string;
        shift_name?: string;
        branch_name?: string;
    }
    interface IImportBatchRequest {
        batch_id: string & tags.Format<'uuid'>;
        rows: Array<IImportBatchEntry> & tags.MinItems<1> & tags.MaxItems<500>;
        options?: IImportBatchOptions;
    }
    interface IImportBatchOptions {
        on_duplicate?: TImportDuplicateMode;
    }
    interface IImportBatchRowResult {
        row_index: number;
        status: 'created' | 'updated' | 'skipped' | 'error';
        attendance_id?: number | string;
        error_code?: string;
        error_message?: string;
    }
    interface IImportBatchSummary {
        created: number;
        updated: number;
        skipped: number;
        error: number;
    }
    interface IImportBatchEsWarning {
        failed_ids: Array<number | string>;
    }
    interface IImportBatchResponse {
        results: IImportBatchRowResult[];
        summary: IImportBatchSummary;
        es_warning?: IImportBatchEsWarning;
    }
}
