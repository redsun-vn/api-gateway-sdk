import { SalaryAdvanceStatus } from '../../../enum/hr/salary';
import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ISalaryAdvance {
	export interface IApprove {
		id: string;
		approved_by_id: string;
	}

	export interface ICreate {
		shop_id: number;
		branch_id?: number;
		staff_id: number;
		month: number;
		year: number;
		amount: number;
		status: SalaryAdvanceStatus;
		reason?: string;
		payment_method?: string;
		payment_reference?: string;
		payment_date?: string;
		requested_by_id?: string;
		approved_by_id?: string;
		approved_at?: string;
		rejected_by_id?: string;
		rejected_at?: string;
		rejection_reason?: string;
		is_settled?: boolean;
		salary_calculation_id?: number;
	}

	export type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id?: number | string | null;
		staff_id: number | string;
		month: number | string;
		year: number | string;
		amount: number | string;
		status: string;
		reason?: string | null;
		payment_method?: string | null;
		payment_reference?: string | null;
		payment_date?: string | null;
		requested_by_id?: string | null;
		approved_by_id?: string | null;
		approved_at?: string | null;
		rejected_by_id?: string | null;
		rejected_at?: string | null;
		rejection_reason?: string | null;
		is_settled?: boolean;
		salary_calculation_id?: number | string | null;
	}

	export interface IPayRequest {
		payment_method: string;
		payment_reference?: string;
		payment_date: string;
	}
}
