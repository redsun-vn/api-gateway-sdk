import { BaseResponse } from '../../common.type';
import { IDepartment } from '../idepartment';
import { IStaff } from '../../istaff';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IAttendanceShift {
	export interface IRequestCreate {
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

		// salary
		overtime_before_shift_enable?: boolean;
		overtime_before_shift_minutes?: number;
		overtime_before_shift_max_minutes?: number;
		overtime_after_shift_enable?: boolean;
		overtime_after_shift_minutes?: number;
		overtime_after_shift_max_minutes?: number;
		overtime_rate_percentage?: number;
		overtime_holiday_rate_percentage?: number;
		overtime_night_rate_percentage?: number;
		night_shift_from?: string;
		night_shift_to?: string;
	}

	export interface ICreate {
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

		// salary
		overtime_before_shift_enable?: boolean;
		overtime_before_shift_minutes?: number;
		overtime_before_shift_max_minutes?: number;
		overtime_after_shift_enable?: boolean;
		overtime_after_shift_minutes?: number;
		overtime_after_shift_max_minutes?: number;
		overtime_rate_percentage?: number;
		overtime_holiday_rate_percentage?: number;
		overtime_night_rate_percentage?: number;
		night_shift_from?: string;
		night_shift_to?: string;
	}

	export type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;

	export interface IResponse extends BaseResponse {
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

		// salary
		overtime_before_shift_enable?: boolean;
		overtime_before_shift_minutes?: number | string | null;
		overtime_before_shift_max_minutes?: number | string | null;
		overtime_after_shift_enable?: boolean;
		overtime_after_shift_minutes?: number | string | null;
		overtime_after_shift_max_minutes?: number | string | null;
		overtime_rate_percentage?: number | string | null;
		overtime_holiday_rate_percentage?: number | string | null;
		overtime_night_rate_percentage?: number | string | null;
		night_shift_from?: string | null;
		night_shift_to?: string | null;
	}
}
