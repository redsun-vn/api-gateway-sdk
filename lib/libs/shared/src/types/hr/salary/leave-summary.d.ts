import { BaseResponse } from '../../common.type';
export declare namespace ILeaveSummary {
    interface ILeaveSummaryResponse extends BaseResponse {
        shop_id: number | string;
        staff_id: number | string;
        year: number | string;
        month: number | string;
        start_date?: string | null;
        end_date?: string | null;
        total_days?: number | string;
        paid_days?: number | string;
        unpaid_days?: number | string;
        annual_days?: number | string;
        unpaid_leave_days?: number | string;
        sick_days?: number | string;
        maternity_days?: number | string;
        marriage_days?: number | string;
        funeral_days?: number | string;
        child_sick_days?: number | string;
        miscarriage_days?: number | string;
        paternity_days?: number | string;
        compensatory_days?: number | string;
        business_trip_days?: number | string;
        work_from_home_days?: number | string;
        other_days?: number | string;
        remaining_days?: number | string;
        details?: ILeaveSummaryDetail[] | null;
        last_updated_at?: string | null;
    }
    interface ILeaveSummaryDetail {
        leave_type_id: number | string;
        leave_type_name: string;
        days: number | string;
        salary_percentage: number | string;
        is_paid: boolean;
    }
    interface ILeaveSummaryRequest {
        month: number;
        year: number;
        startDate?: string;
        endDate?: string;
    }
}
