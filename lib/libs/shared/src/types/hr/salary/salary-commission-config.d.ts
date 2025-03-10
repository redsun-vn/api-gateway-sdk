import { BaseResponse } from '../../common.type';
import { IDepartment } from '../idepartment';
import { IStaff } from '../../istaff';
import { SalaryCommissionType } from '../../../enum';
export declare namespace ISalaryCommissionConfig {
    interface ICreate {
        shop_id: number;
        branch_id?: number;
        name: string;
        description?: string;
        active?: boolean;
        commission_type: SalaryCommissionType;
        product_id?: number;
        variant_id?: number;
        category_id?: number;
        commission_percentage?: number;
        commission_fixed_amount?: number;
        revenue_threshold?: number;
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
        commission_type: string;
        product_id?: number | string | null;
        variant_id?: number | string | null;
        category_id?: number | string | null;
        commission_percentage: number | string | null;
        commission_fixed_amount?: number | string | null;
        revenue_threshold?: number | string | null;
        staffs?: IStaff.IStaffResponse[];
        departments?: IDepartment.IResponse[];
    }
}
