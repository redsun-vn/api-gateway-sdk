import { BaseResponse } from '../../common.type';
import { IStaff } from '../../istaff';
import { IDepartment } from '../idepartment';
import { ISalaryBonusConfig } from './salary-bonus-config';
import { SalaryPayrollCycle } from '../../../enum';
export declare namespace ISalaryPayrollConfig {
    interface ICreate {
        shop_id: number;
        branch_id?: number;
        name: string;
        description?: string;
        active?: boolean;
        payroll_cycle: SalaryPayrollCycle;
        monthly_closing_day?: number;
        semi_monthly_closing_days?: number[];
        weekly_closing_day?: string;
        include_month13?: boolean;
        include_tet_bonus?: boolean;
        month13_bonus_config_id?: number;
        tet_bonus_config_id?: number;
        auto_calculate?: boolean;
        auto_approve?: boolean;
        notify_on_calculation?: boolean;
        notification_recipients?: string[];
        staff_ids?: number[];
        department_ids?: number[];
        calculation_hour?: number;
        calculation_minute?: number;
        notification_staff_ids?: string[];
        applicable_month?: number;
    }
    type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id?: number | string | null;
        name: string;
        description?: string | null;
        active: boolean;
        payroll_cycle: string;
        monthly_closing_day?: number | string | null;
        semi_monthly_closing_days?: number[];
        weekly_closing_day?: string | null;
        include_month13?: boolean;
        include_tet_bonus?: boolean;
        month13_bonus_config_id?: number | string | null;
        tet_bonus_config_id?: number | string | null;
        auto_calculate: boolean;
        auto_approve: boolean;
        notify_on_calculation: boolean;
        notification_recipients?: string[];
        created_by_id?: number | string | null;
        updated_by_id?: number | string | null;
        staffs?: IStaff.IStaffResponse[];
        departments?: IDepartment.IResponse[];
        month13_bonus_config?: ISalaryBonusConfig.IResponse | null;
        tet_bonus_config?: ISalaryBonusConfig.IResponse | null;
        calculation_hour?: number;
        calculation_minute?: number;
        notification_staff_ids?: string[] | null;
        applicable_month?: number | string | null;
    }
}
