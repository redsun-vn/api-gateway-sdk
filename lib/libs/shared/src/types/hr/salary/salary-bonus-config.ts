import { BaseResponse } from '../../common.type';
import { IDepartment } from '../idepartment';
import { IStaff } from '../../istaff';
import {
	SalaryBonusType,
	SalaryBonusCalculationPeriod,
} from '../../../enum/hr/salary';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ISalaryBonusConfig {
	export interface ICreate {
		shop_id: number;
		branch_id?: number;
		name: string;
		description?: string;
		active?: boolean;
		bonus_type: SalaryBonusType;
		calculation_period: SalaryBonusCalculationPeriod;
		revenue_threshold?: number;
		bonus_percentage?: number;
		bonus_fixed_amount?: number;
		attendance_days_threshold?: number;
		effective_date?: string;
		end_date?: string;
		staff_ids?: number[];
		department_ids?: number[];
		seniority_bonus_enabled?: boolean;
		seniority_bonus_amount?: number;
	}

	export type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id?: number | string | null;
		name: string;
		description?: string | null;
		active: boolean;
		bonus_type: string;
		calculation_period: string;
		revenue_threshold?: number | string | null;
		bonus_percentage: number | string | null;
		bonus_fixed_amount?: number | string | null;
		attendance_days_threshold?: number | string | null;
		effective_date?: string | null;
		end_date?: string | null;
		staffs?: IStaff.IStaffResponse[];
		departments?: IDepartment.IResponse[];
		seniority_bonus_enabled?: boolean;
		seniority_bonus_amount?: number | string | null;
	}
}
