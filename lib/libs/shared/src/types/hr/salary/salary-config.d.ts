import { BaseResponse } from '../../common.type';
import { IDepartment } from '../idepartment';
import { IStaff } from '../../istaff';
import { ISalaryAllowanceConfig } from './salary-allowance-config';
import { SalaryConfigType } from '../../../enum';
export declare namespace ISalaryConfig {
    interface ICreate {
        shop_id: number;
        branch_id?: number;
        name: string;
        description?: string;
        active?: boolean;
        base_salary: number;
        salary_type?: SalaryConfigType;
        shift_salary?: number;
        hourly_rate?: number;
        late_penalty_per_minute?: number;
        early_leave_penalty_per_minute?: number;
        overtime_rate_percentage?: number;
        commission_percentage?: number;
        effective_date?: string;
        end_date?: string;
        staff_ids?: number[];
        department_ids?: number[];
        allowance_ids?: number[];
        max_advance_amount?: number;
        max_advance_percentage?: number;
        income_tax_enabled?: boolean;
        income_tax_personal_deduction?: number;
        income_tax_dependent_deduction?: number;
        dependent_count?: number;
    }
    type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id?: number | string | null;
        name: string;
        description?: string | null;
        active: boolean;
        base_salary: number | string;
        salary_type: string;
        shift_salary: number | string | null;
        hourly_rate: number | string | null;
        late_penalty_per_minute: number | string | null;
        early_leave_penalty_per_minute: number | string | null;
        overtime_rate_percentage: number | string | null;
        commission_percentage: number | string | null;
        allowances?: ISalaryAllowanceConfig.IResponse[];
        effective_date?: string | null;
        end_date?: string | null;
        staffs?: IStaff.IStaffResponse[];
        departments?: IDepartment.IResponse[];
        max_advance_amount?: number | string | null;
        max_advance_percentage?: number | string | null;
        income_tax_enabled?: boolean;
        income_tax_personal_deduction?: number | string | null;
        income_tax_dependent_deduction?: number | string | null;
        dependent_count?: number | string | null;
    }
}
