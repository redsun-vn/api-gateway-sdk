import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ILeaveSummary {
	export interface ILeaveSummaryResponse extends BaseResponse {
		shop_id: number | string; // ID cửa hàng
		staff_id: number | string; // ID nhân viên
		year: number | string; // Năm
		month: number | string; // Tháng
		start_date?: string | null; // Ngày bắt đầu
		end_date?: string | null; // Ngày kết thúc
		total_days?: number | string; // Tổng số ngày nghỉ phép
		paid_days?: number | string; // Số ngày nghỉ phép được trả lương
		unpaid_days?: number | string; // Số ngày nghỉ phép không được trả lương
		annual_days?: number | string; // Số ngày nghỉ phép còn lại
		unpaid_leave_days?: number | string; // Số ngày nghỉ phép không được trả lương
		sick_days?: number | string; // Số ngày nghỉ phép bị ốm
		maternity_days?: number | string; // Số ngày nghỉ phép sinh con
		marriage_days?: number | string; // Số ngày nghỉ phép cưới hỏi
		funeral_days?: number | string; // Số ngày nghỉ phép tang lễ
		child_sick_days?: number | string; // Số ngày nghỉ phép con ốm
		miscarriage_days?: number | string; // Số ngày nghỉ phép thai sứt
		paternity_days?: number | string; // Số ngày nghỉ phép cha
		compensatory_days?: number | string; // Số ngày nghỉ phép bù
		business_trip_days?: number | string; // Số ngày nghỉ phép công tác
		work_from_home_days?: number | string; // Số ngày nghỉ phép làm việc tại nhà
		other_days?: number | string; // Số ngày nghỉ phép khác
		remaining_days?: number | string; // Số ngày nghỉ phép còn lại
		details?: ILeaveSummaryDetail[] | null; // Chi tiết nghỉ phép
		last_updated_at?: string | null; // Ngày cập nhật cuối cùng
	}

	export interface ILeaveSummaryDetail {
		leave_type_id: number | string; // ID loại nghỉ phép
		leave_type_name: string; // Tên loại nghỉ phép
		days: number | string; // Số ngày nghỉ phép
		salary_percentage: number | string; // Tỷ lệ lương
		is_paid: boolean; // Có được trả lương không
	}

	export interface ILeaveSummaryRequest {
		month: number;
		year: number;
		startDate?: string;
		endDate?: string;
	}
}
