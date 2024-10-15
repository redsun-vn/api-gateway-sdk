import { BaseResponse } from '../../common.type';
import { IDepartment } from '../idepartment';
import { IStaff } from '../../istaff';
export declare namespace IAttendanceShift {
    interface IRequestCreate {
        branch_id: number;
        name: string;
        active: boolean;
        day_of_week: string[];
        hour_from: string;
        hour_checkin_from: string;
        hour_to: string;
        hour_checkout_to: string;
        department_ids?: string[];
        staff_ids?: string[];
        start_date?: string;
        end_date?: string;
        break_period_enable?: boolean;
        break_period_from?: string;
        break_period_to?: string;
        minute_late_in?: number;
        minute_early_out?: number;
    }
    interface ICreate {
        shop_id: number;
        branch_id: number;
        name: string;
        active: boolean;
        day_of_week: string[];
        hour_from: string;
        hour_checkin_from: string;
        hour_to: string;
        hour_checkout_to: string;
        department_ids?: string[];
        staff_ids?: string[];
        start_date?: string;
        end_date?: string;
        break_period_enable?: boolean;
        break_period_from?: string;
        break_period_to?: string;
        minute_late_in?: number;
        minute_early_out?: number;
    }
    type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        name: string | null;
        active: boolean;
        day_of_week: string[];
        hour_from: string | null;
        hour_checkin_from: string | null;
        hour_to: string | null;
        hour_checkout_to: string | null;
        departments: IDepartment.IResponse[] | null;
        staffs: IStaff.IStaffResponse[] | null;
        start_date: string | null;
        end_date: string | null;
        break_period_enable: boolean;
        break_period_from: string | null;
        break_period_to: string | null;
        minute_late_in: number | null;
        minute_early_out: number | null;
    }
}
