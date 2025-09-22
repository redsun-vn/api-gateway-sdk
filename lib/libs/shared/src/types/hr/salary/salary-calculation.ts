import { BaseResponse } from '../../common.type';
import { ISalaryAdvance } from './salary-advance';
import { SalaryCalculationStatus } from '../../../enum/hr/salary';
import { ILeave } from './leave';
/* eslint-disable @typescript-eslint/no-namespace */
export namespace ISalaryCalculation {
	export interface IOvertime {
		total_hours: number | string;
		amount: number | string;
		regular_hours?: number | string;
		holiday_hours?: number | string;
		night_hours?: number | string;
	}
	export interface IMonth13 {
		amount: number | string;
		calculation_method: string;
		work_months: number | string;
	}
	export interface ITet {
		amount: number | string;
		base_amount: number | string;
		seniority_bonus: number | string;
		performance_multiplier: number | string;
	}
	export interface IAttendance {
		total_hours: number | string;
		total_days: number | string;
		present_days: number | string;
		absent_days: number | string;
		late_minutes: number | string;
		early_leave_minutes: number | string;
		start_date?: string;
		end_date?: string;
		total_shifts?: number | string;
		leave_days_paid?: number | string;
		leave_days_unpaid?: number | string;
		leave_summary?: ILeave.ILeaveSummary;
	}
	export interface IPayroll {
		payroll_config_id: number | string;
		payroll_type: string;
		calculation_date: string;
		name: string;
	}
	export interface IInsurance {
		insurance_salary_base?: number | string | null;
		social_insurance_employee?: number | string | null;
		social_insurance_employer?: number | string | null;
		health_insurance_employee?: number | string | null;
		health_insurance_employer?: number | string | null;
		unemployment_insurance_employee?: number | string | null;
		unemployment_insurance_employer?: number | string | null;
		union_fee?: number | string | null;
		total_insurance_employee?: number | string | null;
		total_insurance_employer?: number | string | null;
	}
	export interface ICommission {
		id: number | string;
		name: string;
		amount: number | string;
		type: string;
	}
	export interface IBonus {
		id: number | string;
		name: string;
		amount: number | string;
		type: string;
	}
	export interface IPenalty {
		id?: number | string;
		name?: string;
		amount?: number | string;
		type?: string;
		code?: string;
		base?: string;
	}
	export interface IAllowance {
		id: number | string;
		name: string;
		amount: number | string;
		taxable: boolean;
	}

	export interface IPayment {
		id: number;
		payment_date: string;
		payment_method?: string | null;
		payment_reference?: string | null;
		notes?: string | null;
		updated_by_id: string;
	}
	export interface IIncomeTax {
		taxable_income: number | string; // Thu nhập chịu thuế
		income_tax_amount: number | string; // Thuế thu nhập cá nhân
		income_tax_rate: number | string; // Tỷ lệ thuế thu nhập cá nhân
		personal_deduction: number | string; // Giảm trừ gia cảnh cá nhân
		dependent_deduction: number | string; // Giảm trừ người phụ thuộc
		total_deduction: number | string; // Tổng các khoản giảm trừ
		net_income: number | string; // Thu nhập sau khi giảm trừ
	}

	export interface ISpecialBonuses {
		month13?: IMonth13;
		tet?: ITet;
	}
	export interface ICreate {
		shop_id: number;
		branch_id?: number;
		staff_id: number;
		month: number;
		year: number;
		base_salary: number;
		total_shifts?: number;
		total_hours?: number;
		shift_salary?: number;
		overtime_pay?: number;
		holiday_pay?: number;
		commission_amount?: number;
		allowance_amount?: number;
		penalty_amount?: number;
		late_penalty?: number;
		early_leave_penalty?: number;
		bonus_amount?: number;
		month13_bonus?: number;
		tet_bonus?: number;
		total_salary?: number;
		advance_payment?: number;
		final_salary?: number;
		calculation_details?: any;
		status?: SalaryCalculationStatus;
		payment_date?: string;
		payment_method?: string;
		payment_reference?: string;
		notes?: string;
		insurance_salary_base?: number;
		social_insurance_employee?: number;
		social_insurance_employer?: number;
		health_insurance_employee?: number;
		health_insurance_employer?: number;
		unemployment_insurance_employee?: number;
		unemployment_insurance_employer?: number;
		union_fee?: number;
		total_insurance_employee?: number;
		total_insurance_employer?: number;
		approved_at?: string | null;
	}

	export interface IManualCreate {
		staff_id: number;
		month: number;
		year: number;
		notes?: string;
		include_month13?: boolean;
		month13_bonus_config_id?: number;
		include_tet_bonus?: boolean;
		tet_bonus_config_id?: number;
		branch_id?: number;
	}

	export type IUpdate = Omit<
		Partial<ICreate>,
		'shop_id' | 'staff_id' | 'month' | 'year'
	>;

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id?: number | string | null;
		staff_id: number | string;
		month: number | string;
		year: number | string;
		base_salary: number | string;
		total_shifts: number | string;
		total_hours: number | string;
		shift_salary: number | string;
		overtime_pay: number | string;
		holiday_pay: number | string;
		commission_amount: number | string;
		allowance_amount: number | string;
		penalty_amount: number | string;
		late_penalty: number | string;
		early_leave_penalty: number | string;
		bonus_amount: number | string;
		month13_bonus: number | string;
		tet_bonus: number | string;
		total_salary: number | string;
		advance_payment: number | string;
		final_salary: number | string;
		calculation_details?: any;
		status: string;
		payment_date?: string | null;
		payment_method?: string | null;
		payment_reference?: string | null;
		notes?: string | null;
		created_by_id?: string | null;
		updated_by_id?: string | null;
		approved_by_id?: string | null;
		approved_at?: string | null;
		insurance_salary_base?: number | string | null;
		social_insurance_employee?: number | string | null;
		social_insurance_employer?: number | string | null;
		health_insurance_employee?: number | string | null;
		health_insurance_employer?: number | string | null;
		unemployment_insurance_employee?: number | string | null;
		unemployment_insurance_employer?: number | string | null;
		union_fee?: number | string | null;
		total_insurance_employee?: number | string | null;
		total_insurance_employer?: number | string | null;
		payroll_config_id?: number | string | null;
		code?: string | null;
		start_date?: string | null;
		end_date?: string | null;
	}

	export interface ISalaryDetails {
		base_salary: number | string;
		daily_salary: number | string;
		standard_working_days: number | string;
		actual_working_days: number | string;
		total_salary: number | string;
	}

	export interface IHoliday {
		id: number | string;
		name: string;
		amount: number | string;
	}

	export interface ICalculationDetails {
		allowances?: IAllowance[];
		bonuses?: IBonus[];
		penalties?: IPenalty[];
		commissions?: ICommission[];
		overtime?: IOvertime;
		attendance?: IAttendance;
		special_bonuses?: ISpecialBonuses;
		insurance?: IInsurance;
		payroll?: IPayroll;
		payroll_config_id?: number | string;
		advance_payment?: ISalaryAdvance.IResponse[];
		income_tax?: IIncomeTax;
		salary_details?: ISalaryDetails;
		holidays?: IHoliday[];
	}
}
