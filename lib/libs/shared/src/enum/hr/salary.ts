// Salary calculation
export enum SalaryComponent {
	BaseSalary = 'base_salary', // Lương cơ bản
	ShiftSalary = 'shift_salary', // Lương theo ca
	OvertimePay = 'overtime_pay', // Tiền làm thêm giờ
	HolidayPay = 'holiday_pay', // Tiền lương ngày lễ
	CommissionAmount = 'commission_amount', // Tiền hoa hồng
	AllowanceAmount = 'allowance_amount', // Tiền phụ cấp
	PenaltyAmount = 'penalty_amount', // Tiền phạt
	LatePenalty = 'late_penalty', // Tiền phạt đi muộn
	EarlyLeavePenalty = 'early_leave_penalty', // Tiền phạt về sớm
	BonusAmount = 'bonus_amount', // Tiền thưởng
	TotalSalary = 'total_salary', // Tổng lương
	AdvancePayment = 'advance_payment', // Tạm ứng
	FinalSalary = 'final_salary', // Lương thực lĩnh,
	Month13 = 'month13', // Lương tháng 13
	TetBonus = 'tet_bonus', // Thưởng tết
}

export enum SalaryCalculationPeriod {
	Daily = 'daily', // Ngày
	Weekly = 'weekly', // Tuần
	Monthly = 'monthly', // Tháng
	Quarterly = 'quarterly', // Quý
	Yearly = 'yearly', // Năm
}

// 'draft' | 'pending' | 'approved' | 'paid'
export enum SalaryCalculationStatus {
	Draft = 'draft',
	Pending = 'pending', // Chờ duyệt
	Approved = 'approved', // Đã duyệt
	Paid = 'paid', // Đã thanh toán
}

// Salary payroll
export enum SalaryPayrollCycle {
	Monthly = 'monthly', // Tháng
	SemiMonthly = 'semi_monthly', // Nửa tháng
	Weekly = 'weekly', // Tuần
}

export enum SalaryPayrollClosingDay {
	Monday = 'monday', // Thứ hai
	Tuesday = 'tuesday', // Thứ ba
	Wednesday = 'wednesday', // Thứ tư
	Thursday = 'thursday', // Thứ năm
	Friday = 'friday', // Thứ sáu
	Saturday = 'saturday', // Thứ bảy
	Sunday = 'sunday', // Chủ nhật
}

// Salary bonus
export enum SalaryBonusType {
	Revenue = 'revenue', // Doanh thu
	Performance = 'performance', // Hiệu suất
	Attendance = 'attendance', // Chấm công
	Other = 'other', // Khác
}

export enum SalaryBonusCalculationPeriod {
	Daily = 'daily', // Ngày
	Weekly = 'weekly', // Tuần
	Monthly = 'monthly', // Tháng
	Quarterly = 'quarterly', // Quý
	Yearly = 'yearly', // Năm
}

// Salary Penalty
export enum SalaryPenaltyBase {
	DailySalary = 'daily_salary', // Lương ngày
	MonthlySalary = 'monthly_salary', // Lương tháng
	ShiftSalary = 'shift_salary', // Lương theo ca
}

export enum SalaryPenaltyType {
	Fixed = 'fixed', // Cố định
	Percentage = 'percentage', // Phần trăm
}

/**
 * Các loại phạt chấm công
 */
export enum PenaltyType {
	LATE_ARRIVAL = 'late_arrival', // Phạt đi muộn
	EARLY_LEAVE = 'early_leave', // Phạt về sớm
	ABSENCE = 'absence', // Phạt vắng mặt không phép
	INCOMPLETE_HOURS = 'incomplete_hours', // Phạt không đủ giờ làm việc
	MISSING_CHECK_IN = 'missing_check_in', // Phạt quên chấm công vào
	MISSING_CHECK_OUT = 'missing_check_out', // Phạt quên chấm công ra
	DRESS_CODE = 'dress_code', // Phạt vi phạm quy định đồng phục
	BEHAVIOR = 'behavior', // Phạt vi phạm quy tắc ứng xử
	PERFORMANCE = 'performance', // Phạt không đạt KPI
	CUSTOM = 'custom', // Phạt tùy chỉnh khác
}

/**
 * Cơ sở tính phạt
 */
export enum PenaltyBase {
	DAILY_SALARY = 'daily_salary', // Tính theo lương ngày
	MONTHLY_SALARY = 'monthly_salary', // Tính theo lương tháng
	SHIFT_SALARY = 'shift_salary', // Tính theo lương ca
	HOURLY_RATE = 'hourly_rate', // Tính theo lương giờ
	MINUTE_RATE = 'minute_rate', // Tính theo lương phút
	FIXED_AMOUNT = 'fixed_amount', // Số tiền cố định
}

// Salary Commission
export enum SalaryCommissionType {
	Product = 'product', // Sản phẩm
	Service = 'service', // Dịch vụ
	Category = 'category', // Danh mục
	Revenue = 'revenue', // Doanh thu
}

// Salary Allowances
export enum SalaryAllowances {
	MealAllowance = 'meal', // Phụ cấp ăn trưa
	TransportationAllowance = 'transportation', // Phụ cấp đi lại
	PhoneAllowance = 'phone', // Phụ cấp điện thoại
	OtherAllowance = 'other', // Phụ cấp khác
}

export enum SalaryAllowancesPercentageBase {
	BaseSalary = 'base_salary', // Tính theo lương cơ bản
	TotalSalary = 'total_salary', // Tính theo tổng lương
}

export enum SalaryAllowancesPaymentFrequency {
	Monthly = 'monthly', // Tháng
	Quarterly = 'quarterly', // Quý
	Yearly = 'yearly', // Năm
	OneTime = 'one_time', // Một lần
}

/**
 * Tạm ứng lương 'pending' | 'approved' | 'rejected' | 'paid' | 'settled'
 */
export enum SalaryAdvanceStatus {
	Pending = 'pending', // Chờ duyệt
	Approved = 'approved', // Đã duyệt
	Rejected = 'rejected', // Đã từ chối
	Paid = 'paid', // Đã thanh toán
	Settled = 'settled', // Đã quyết toán
}

/**
 * Salary config 'monthly' | 'hourly' | 'daily' | 'shift'
 */
export enum SalaryConfigType {
	Monthly = 'monthly', // Tháng
	Hourly = 'hourly', // Giờ
	Daily = 'daily', // Ngày
	Shift = 'shift', // Ca
}

// Staff Performance
export enum StaffPerformanceEvaluationPeriod {
	Monthly = 'monthly', // Tháng
	Quarterly = 'quarterly', // Quý
	Yearly = 'yearly', // Năm
}

/**
 * Trạng thái yêu cầu nghỉ phép
 */
export enum LeaveRequestStatus {
	PENDING = 'pending', // Chờ duyệt
	APPROVED = 'approved', // Đã duyệt
	REJECTED = 'rejected', // Từ chối
	CANCELLED = 'cancelled', // Đã hủy
}

/**
 * Mã loại nghỉ phép
 */
export enum LeaveTypeCode {
	ANNUAL = 'ANNUAL', // Nghỉ phép năm
	UNPAID = 'UNPAID', // Nghỉ không lương
	SICK = 'SICK', // Nghỉ ốm
	MATERNITY = 'MATERNITY', // Nghỉ thai sản
	MARRIAGE = 'MARRIAGE', // Nghỉ kết hôn
	FUNERAL = 'FUNERAL', // Nghỉ tang
	CHILD_SICK = 'CHILD_SICK', // Nghỉ con ốm
	MISCARRIAGE = 'MISCARRIAGE', // Nghỉ sảy thai
	PATERNITY = 'PATERNITY', // Nghỉ vợ sinh con
	COMPENSATORY = 'COMPENSATORY', // Nghỉ bù
	BUSINESS_TRIP = 'BUSINESS_TRIP', // Công tác
	WORK_FROM_HOME = 'WORK_FROM_HOME', // Làm việc tại nhà
	OTHER = 'OTHER', // Nghỉ khác
}
