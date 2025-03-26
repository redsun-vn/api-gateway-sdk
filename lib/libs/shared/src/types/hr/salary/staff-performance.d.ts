import { BaseResponse } from '../../common.type';
import { IStaff } from '../../istaff';
import { StaffPerformanceEvaluationPeriod } from '../../../enum';
export declare namespace IStaffPerformance {
    interface ICreate {
        shop_id: number;
        branch_id?: number;
        staff_id: number;
        year: number;
        month?: number;
        quarter?: number;
        evaluation_period: StaffPerformanceEvaluationPeriod;
        performance_score: number;
        attendance_score?: number;
        quality_score?: number;
        productivity_score?: number;
        teamwork_score?: number;
        initiative_score?: number;
        comments?: string;
        evaluated_by_id?: string;
        evaluation_date?: string;
        additional_metrics?: Record<string, any>;
    }
    type IUpdate = Omit<Partial<ICreate>, 'shop_id' | 'staff_id' | 'year'>;
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id?: number | string | null;
        staff_id: number | string;
        staff?: IStaff.IStaffResponse;
        year: number;
        month?: number | null;
        quarter?: number | null;
        evaluation_period: string;
        performance_score: number | string;
        attendance_score?: number | null;
        quality_score?: number | null;
        productivity_score?: number | null;
        teamwork_score?: number | null;
        initiative_score?: number | null;
        comments?: string | null;
        evaluated_by_id?: string | null;
        evaluation_date?: string | null;
        additional_metrics?: Record<string, any> | null;
    }
}
