import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ISalaryInsuranceConfig {
	export interface IAllowance {
		id: string;
		name: string;
		amount: number;
	}
	export interface IBase {
		shop_id: number;
		branch_id?: number | null;
		name: string;
		description?: string;
		active: boolean;
		social_insurance_employee_rate: number;
		social_insurance_employer_rate: number;
		health_insurance_employee_rate: number;
		health_insurance_employer_rate: number;
		unemployment_insurance_employee_rate: number;
		unemployment_insurance_employer_rate: number;
		union_fee_rate: number;
		min_salary_limit: number;
		max_salary_limit: number;
		include_allowances: boolean;
		included_allowance_types?: IAllowance[];
		effective_date?: string;
		expiry_date?: string;
		created_by_id?: string;
		updated_by_id?: string;
	}

	export type ICreate = IBase;

	export interface IUpdate extends Partial<IBase> {
		id: number;
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id?: number | string | null;
		name: string;
		description?: string | null;
		active: boolean;
		social_insurance_employee_rate: number | string;
		social_insurance_employer_rate: number | string;
		health_insurance_employee_rate: number | string;
		health_insurance_employer_rate: number | string;
		unemployment_insurance_employee_rate: number | string;
		unemployment_insurance_employer_rate: number | string;
		union_fee_rate: number | string;
		min_salary_limit: number | string;
		max_salary_limit: number | string;
		include_allowances: boolean;
		included_allowance_types?: IAllowance[] | null;
		effective_date?: string | null;
		expiry_date?: string | null;
		created_by_id?: string | null;
		updated_by_id?: string | null;
	}
}
