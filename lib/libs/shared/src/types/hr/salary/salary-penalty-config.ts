import { BaseResponse } from '../../common.type';
import { IDepartment } from '../idepartment';
import { IStaff } from '../../istaff';
import { SalaryPenaltyType } from '../../../enum';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ISalaryPenaltyConfig {
	export interface ICreate {
		shop_id: number;
		branch_id?: number;
		name: string;
		description?: string;
		active?: boolean;
		penalty_type: SalaryPenaltyType;
		penalty_amount?: number;
		penalty_percentage?: number;
		penalty_base?: string;
		staff_ids?: number[];
		department_ids?: number[];
		penalty_code?: string;
		threshold?: number;
		threshold_unit?: string;
		escalation_factor?: number;
		max_penalty_percentage?: number;
	}

	export type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id?: number | string | null;
		name: string;
		description?: string | null;
		active: boolean;
		penalty_type: string;
		penalty_amount: number | string;
		penalty_percentage?: number | string | null;
		penalty_base?: string | null;
		staffs?: IStaff.IStaffResponse[];
		departments?: IDepartment.IResponse[];
		penalty_code?: string | null;
		threshold?: number | string | null;
		threshold_unit?: string | null;
		escalation_factor?: number | string | null;
		max_penalty_percentage?: number | string | null;
	}
}
