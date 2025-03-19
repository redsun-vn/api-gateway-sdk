import { BaseResponse } from '../../common.type';
import { IDepartment } from '../idepartment';
import { IStaff } from '../../istaff';
import { SalaryPenaltyType, SalaryAllowancesPercentageBase, SalaryAllowancesPaymentFrequency } from '../../../enum/hr/salary';
export declare namespace ISalaryAllowanceConfig {
    interface ICreate {
        shop_id: number;
        branch_id?: number;
        name: string;
        description?: string;
        active?: boolean;
        allowance_type: SalaryPenaltyType;
        amount?: number;
        percentage?: number;
        percentage_base?: SalaryAllowancesPercentageBase;
        taxable?: boolean;
        payment_frequency?: SalaryAllowancesPaymentFrequency;
        salary_config_id?: number;
        staff_ids?: number[];
        department_ids?: number[];
    }
    type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id?: number | string | null;
        name: string;
        description?: string | null;
        active: boolean;
        allowance_type: string;
        amount: number | string;
        percentage?: number | string | null;
        percentage_base?: string | null;
        taxable: boolean;
        payment_frequency: string;
        salary_config_id?: number | string | null;
        staffs?: IStaff.IStaffResponse[];
        departments?: IDepartment.IResponse[];
    }
    interface ICalculationResult {
        total_allowance: number | string;
        allowance_details: {
            id: number | string;
            name: string;
            amount: number | string;
            taxable: boolean;
        }[];
    }
}
