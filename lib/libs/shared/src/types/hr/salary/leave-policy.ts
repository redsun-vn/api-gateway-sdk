import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ILeavePolicy {
	export interface ILeavePolicyResponse extends BaseResponse {
		shop_id: number | string; // ID cửa hàng
		active: boolean; // Trạng thái hoạt động
		standard_days_per_year: number | string; // Số ngày nghỉ phép cơ bản
		allow_carry_forward: boolean; // Có phép mang sang năm không
		max_carry_forward_days: number | string; // Số ngày tối đa mang sang năm
		carry_forward_expiry_months: number | string; // Thời hạn chuyển kỳ
		progressive_leave: boolean; // Có phép tích lũy không
		progressive_rules: ILeavePolicyProgressiveRule[] | null; // Quy tắc tích lũy
	}

	export interface ILeavePolicyProgressiveRule {
		years_of_service: number | string; // Số năm làm việc
		additional_days: number | string; // Số ngày thêm
	}

	export interface ICreateLeavePolicy {
		shop_id: number; // ID cửa hàng
		active?: boolean; // Trạng thái hoạt động
		standard_days_per_year?: number; // Số ngày nghỉ phép cơ bản
		allow_carry_forward?: boolean; // Có phép mang sang năm không
		max_carry_forward_days?: number; // Số ngày tối đa mang sang năm
		carry_forward_expiry_months?: number; // Thời hạn chuyển kỳ
		progressive_leave?: boolean; // Có phép tích lũy không
		progressive_rules?: ILeavePolicyProgressiveRule[]; // Quy tắc tích lũy
	}

	export interface ICreateLeavePolicyRequest
		extends Omit<ICreateLeavePolicy, 'shop_id'> {
		active?: boolean; // Trạng thái hoạt động
	}
}
