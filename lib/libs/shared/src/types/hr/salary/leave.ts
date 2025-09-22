import { LeaveRequestStatus } from '../../../enum';
import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ILeave {
	export interface ILeaveTypeResponse extends BaseResponse {
		shop_id: number | string; // ID cửa hàng
		name: string; // Tên loại nghỉ phép
		code: string; // Mã loại nghỉ phép
		description?: string | null; // Mô tả loại nghỉ phép
		is_paid: boolean; // Có phải là nghỉ phép được tính lương không
		max_days_per_year: number | string; // Số ngày tối đa có thể nghỉ phép trong năm
		salary_percentage: number | string; // Tỷ lệ lương được tính lương
		active: boolean; // Trạng thái hoạt động
		requires_attachment: boolean; // Có yêu cầu đính kèm không
		max_days_per_time?: number | string; // Số ngày tối đa có thể nghỉ phép trong một lần
		min_days_before_request?: number | string; // Số ngày tối thiểu trước khi gửi yêu cầu nghỉ phép
		gender_specific: string; // Giới tính
		requires_approval: boolean; // Có yêu cầu phê duyệt không
		auto_approve_after_days?: number | string; // Số ngày tự động phê duyệt sau khi gửi yêu cầu nghỉ phép
	}

	export interface ILeaveRequestResponse extends BaseResponse {
		shop_id: number | string; // ID cửa hàng
		staff_id: number | string; // ID nhân viên
		leave_type_id: number | string; // ID loại nghỉ phép
		leave_type: ILeaveTypeResponse; // Loại nghỉ phép
		start_date: string; // Ngày bắt đầu
		end_date: string; // Ngày kết thúc
		total_days: number | string; // Tổng số ngày nghỉ
		reason?: string | null; // Lý do nghỉ phép
		status: LeaveRequestStatus | string; // Trạng thái yêu cầu nghỉ phép
		approved_by_id?: string | null; // ID người phê duyệt
		approved_at?: string | null; // Ngày phê duyệt
		rejection_reason?: string | null; // Lý do từ chối
		attachments?: string[] | null; // Danh sách tệp đính kèm
	}

	export interface ILeaveDetail {
		leave_type_id: number | string; // ID loại nghỉ phép
		leave_type_name: string; // Tên loại nghỉ phép
		days: number | string; // Số ngày
		salary_percentage: number | string; // Tỷ lệ lương được tính lương
		is_paid: boolean; // Có phải là nghỉ phép được tính lương không
	}

	export interface ILeaveSummary {
		total_days?: number | string | null; // Tổng số ngày nghỉ
		paid_days?: number | string | null; // Số ngày được tính lương
		unpaid_days?: number | string | null; // Số ngày không được tính lương
		annual_days?: number | string | null; // Số ngày nghỉ phép năm
		unpaid_leave_days?: number | string | null; // Số ngày nghỉ không lương
		sick_days?: number | string | null; // Số ngày nghỉ ốm
		maternity_days?: number | string | null; // Số ngày nghỉ thai sản
		marriage_days?: number | string | null; // Số ngày nghỉ kết hôn
		funeral_days?: number | string | null; // Số ngày nghỉ tang
		child_sick_days?: number | string | null; // Số ngày nghỉ con ốm
		miscarriage_days?: number | string | null; // Số ngày nghỉ sảy thai
		paternity_days?: number | string | null; // Số ngày nghỉ vợ sinh con
		compensatory_days?: number | string | null; // Số ngày nghỉ bù
		business_trip_days?: number | string | null; // Số ngày công tác
		work_from_home_days?: number | string | null; // Số ngày làm việc tại nhà
		other_days?: number | string | null; // Số ngày nghỉ khác
		remaining_days?: number | string | null; // Số ngày còn lại
		details?: ILeaveDetail[];
	}

	export interface ICreateLeaveRequest {
		shop_id: number; // ID cửa hàng
		staff_id: number; // ID nhân viên
		leave_type_id: number; // ID loại nghỉ phép
		start_date: string; // Ngày bắt đầu
		end_date: string; // Ngày kết thúc
		reason?: string | null; // Lý do nghỉ phép
		attachments?: string[]; // Danh sách tệp đính kèm
	}

	export interface IUpdateLeaveRequest {
		id: number | string; // ID yêu cầu nghỉ phép
		start_date?: string; // Ngày bắt đầu
		end_date?: string; // Ngày kết thúc
		reason?: string | null; // Lý do nghỉ phép
		attachments?: string[]; // Danh sách tệp đính kèm
	}

	export interface IApproveLeaveRequest {
		id: number | string; // ID yêu cầu nghỉ phép
		approved_by_id: string; // ID người phê duyệt
	}

	export interface IRejectLeaveRequest {
		id: number | string; // ID yêu cầu nghỉ phép
		rejection_reason: string; // Lý do từ chối
		approved_by_id: string; // ID người phê duyệt
	}

	export interface ICreateLeaveType {
		shop_id: number; // ID cửa hàng
		name: string; // Tên loại nghỉ phép
		code: string; // Mã loại nghỉ phép
		description?: string; // Mô tả loại nghỉ phép
		is_paid: boolean; // Có phải là nghỉ phép được tính lương không
		max_days_per_year: number; // Số ngày tối đa có thể nghỉ phép trong năm
		salary_percentage: number; // Tỷ lệ lương được tính lương
		active: boolean; // Trạng thái hoạt động
		requires_attachment: boolean; // Có yêu cầu đính kèm không
		max_days_per_time?: number; // Số ngày tối đa có thể nghỉ phép trong một lần
		min_days_before_request?: number; // Số ngày tối thiểu trước khi gửi yêu cầu nghỉ phép
		gender_specific: string; // Giới tính
		requires_approval: boolean; // Có yêu cầu phê duyệt không
		auto_approve_after_days?: number; // Số ngày tự động phê duyệt sau khi gửi yêu cầu nghỉ phép
	}

	export interface IUpdateLeaveType
		extends Partial<
			Omit<ICreateLeaveType, 'shop_id' | 'code' | 'gender_specific'>
		> {
		id: number;
	}
}
