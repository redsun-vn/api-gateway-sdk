/* eslint-disable @typescript-eslint/no-namespace */
export namespace ISalaryPayrollAnalysis {
	export interface IResponse {
		id: number | string;
		shop_id: number | string;
		staff_id: number | string;
		staff_code: string;
		department_id: number | string;
		month: number | string;
		year: number | string;
		basic_wage: number | string; // Lương cơ bản
		allowance_amount: number | string; // Phụ cấp
		overtime_amount: number | string; // Tiền làm thêm
		bonus_amount: number | string; // Tiền thưởng
		insurance_amount: number | string; // BHXH nhân viên đóng
		insurance_employer_amount: number | string; // BHXH công ty đóng
		union_fee: number | string; // Kinh phí công đoàn
		tax_amount: number | string; // Thuế thu nhập cá nhân
		penalty_amount: number | string; // Tiền phạt
		advance_amount: number | string; // Tiền ứng lương
		gross_wage: number | string; // Tổng lương gross
		net_wage: number | string; // Tổng lương net
		working_days: number | string; // Tổng ngày làm việc
		total_hours: number | string; // Tổng giờ làm việc
		late_minutes: number | string; // Tổng phút trễ
		early_leave_minutes: number | string; // Tổng phút rời sớm
		payment_date: string | null; // Ngày thanh toán
		payment_method: string | null; // Phương thức thanh toán
		created_at: Date | string; // Ngày tạo
		updated_at: Date | string; // Ngày cập nhật
	}

	export interface IResponseByDateRangeSummary {
		department_id?: number | string;
		total_payslips: number | string;
		total_basic_wage: number | string;
		total_allowance: number | string;
		total_overtime: number | string;
		total_bonus: number | string;
		total_insurance: number | string;
		total_tax: number | string;
		total_penalty: number | string;
		total_advance: number | string;
		total_gross_wage: number | string;
		total_net_wage: number | string;
		total_working_days: number | string;
		total_working_hours: number | string;
		total_late_minutes: number | string;
		total_early_leave_minutes: number | string;
	}

	export interface IResponseByDateRange {
		summary: IResponseByDateRangeSummary;
		departmentAnalysis: any;
		monthlyAnalysis: any;
		details: IResponse[];
	}

	export interface IResponseByDepartment {
		summary: IResponseByDateRangeSummary;
		staffAnalysis: any;
		monthlyAnalysis: any;
		details: IResponse[];
	}

	export interface IResponseByTrend {
		year: number | string;
		trend: any;
		total_gross_wage: number | string;
		total_net_wage: number | string;
		total_payslips: number | string;
	}

	export interface IResponseByCostAnalysis {
		year: number | string;
		departments: any;
		total_gross_wage: number | string;
		total_net_wage: number | string;
		total_staff: number | string;
		average_gross_wage_per_staff: number | string;
	}

	export interface IResponseBySummary {
		month: number | string;
		year: number | string;
		departments: any;
		total_payslips: number | string;
		total_basic_wage: number | string;
		total_allowance: number | string;
		total_overtime: number | string;
		total_bonus: number | string;
		total_insurance: number | string;
		total_tax: number | string;
		total_penalty: number | string;
		total_advance: number | string;
		total_gross_wage: number | string;
		total_net_wage: number | string;
		total_working_days: number | string;
		total_working_hours: number | string;
		total_late_minutes: number | string;
		total_early_leave_minutes: number | string;
	}
}
