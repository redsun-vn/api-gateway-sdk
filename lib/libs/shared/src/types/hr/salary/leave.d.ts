import { LeaveRequestStatus } from '../../../enum';
import { BaseResponse } from '../../common.type';
export declare namespace ILeave {
    interface ILeaveTypeResponse extends BaseResponse {
        shop_id: number | string;
        name: string;
        code: string;
        description?: string | null;
        is_paid: boolean;
        max_days_per_year: number | string;
        salary_percentage: number | string;
        active: boolean;
        requires_attachment: boolean;
        max_days_per_time?: number | string;
        min_days_before_request?: number | string;
        gender_specific: string;
        requires_approval: boolean;
        auto_approve_after_days?: number | string;
    }
    interface ILeaveRequestResponse extends BaseResponse {
        shop_id: number | string;
        staff_id: number | string;
        leave_type_id: number | string;
        leave_type: ILeaveTypeResponse;
        start_date: string;
        end_date: string;
        total_days: number | string;
        reason?: string | null;
        status: LeaveRequestStatus;
        approved_by_id?: string | null;
        approved_at?: string | null;
        rejection_reason?: string | null;
        attachments?: string[];
    }
    interface ILeaveDetail {
        leave_type_id: number | string;
        leave_type_name: string;
        days: number | string;
        salary_percentage: number | string;
        is_paid: boolean;
    }
    interface ILeaveSummary {
        total_days?: number | string | null;
        paid_days?: number | string | null;
        unpaid_days?: number | string | null;
        annual_days?: number | string | null;
        unpaid_leave_days?: number | string | null;
        sick_days?: number | string | null;
        maternity_days?: number | string | null;
        marriage_days?: number | string | null;
        funeral_days?: number | string | null;
        child_sick_days?: number | string | null;
        miscarriage_days?: number | string | null;
        paternity_days?: number | string | null;
        compensatory_days?: number | string | null;
        business_trip_days?: number | string | null;
        work_from_home_days?: number | string | null;
        other_days?: number | string | null;
        remaining_days?: number | string | null;
        details?: ILeaveDetail[];
    }
    interface ICreateLeaveRequest {
        shop_id: number;
        staff_id: number;
        leave_type_id: number;
        start_date: string;
        end_date: string;
        reason?: string | null;
        attachments?: string[];
    }
    interface IUpdateLeaveRequest {
        id: number | string;
        start_date?: string;
        end_date?: string;
        reason?: string | null;
        attachments?: string[];
    }
    interface IApproveLeaveRequest {
        id: number | string;
        approved_by_id: string;
    }
    interface IRejectLeaveRequest {
        id: number | string;
        rejection_reason: string;
        approved_by_id: string;
    }
    interface ICreateLeaveType {
        shop_id: number;
        name: string;
        code: string;
        description?: string;
        is_paid: boolean;
        max_days_per_year: number;
        salary_percentage: number;
        active: boolean;
        requires_attachment: boolean;
        max_days_per_time?: number;
        min_days_before_request?: number;
        gender_specific: string;
        requires_approval: boolean;
        auto_approve_after_days?: number;
    }
    interface IUpdateLeaveType extends Partial<Omit<ICreateLeaveType, 'shop_id' | 'code' | 'gender_specific'>> {
        id: number;
    }
}
