export declare enum SalaryComponent {
    BaseSalary = "base_salary",
    ShiftSalary = "shift_salary",
    OvertimePay = "overtime_pay",
    HolidayPay = "holiday_pay",
    CommissionAmount = "commission_amount",
    AllowanceAmount = "allowance_amount",
    PenaltyAmount = "penalty_amount",
    LatePenalty = "late_penalty",
    EarlyLeavePenalty = "early_leave_penalty",
    BonusAmount = "bonus_amount",
    TotalSalary = "total_salary",
    AdvancePayment = "advance_payment",
    FinalSalary = "final_salary",
    Month13 = "month13",
    TetBonus = "tet_bonus"
}
export declare enum SalaryCalculationPeriod {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Quarterly = "quarterly",
    Yearly = "yearly"
}
export declare enum SalaryCalculationStatus {
    Draft = "draft",
    Pending = "pending",
    Approved = "approved",
    Paid = "paid"
}
export declare enum SalaryPayrollCycle {
    Monthly = "monthly",
    SemiMonthly = "semi_monthly",
    Weekly = "weekly"
}
export declare enum SalaryPayrollClosingDay {
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday"
}
export declare enum SalaryBonusType {
    Revenue = "revenue",
    Performance = "performance",
    Attendance = "attendance",
    Other = "other"
}
export declare enum SalaryBonusCalculationPeriod {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Quarterly = "quarterly",
    Yearly = "yearly"
}
export declare enum SalaryPenaltyBase {
    DailySalary = "daily_salary",
    MonthlySalary = "monthly_salary",
    ShiftSalary = "shift_salary"
}
export declare enum SalaryPenaltyType {
    Fixed = "fixed",
    Percentage = "percentage"
}
export declare enum PenaltyType {
    LATE_ARRIVAL = "late_arrival",
    EARLY_LEAVE = "early_leave",
    ABSENCE = "absence",
    INCOMPLETE_HOURS = "incomplete_hours",
    MISSING_CHECK_IN = "missing_check_in",
    MISSING_CHECK_OUT = "missing_check_out",
    DRESS_CODE = "dress_code",
    BEHAVIOR = "behavior",
    PERFORMANCE = "performance",
    CUSTOM = "custom"
}
export declare enum PenaltyBase {
    DAILY_SALARY = "daily_salary",
    MONTHLY_SALARY = "monthly_salary",
    SHIFT_SALARY = "shift_salary",
    HOURLY_RATE = "hourly_rate",
    MINUTE_RATE = "minute_rate",
    FIXED_AMOUNT = "fixed_amount"
}
export declare enum SalaryCommissionType {
    Product = "product",
    Service = "service",
    Category = "category",
    Revenue = "revenue"
}
export declare enum SalaryAllowances {
    MealAllowance = "meal",
    TransportationAllowance = "transportation",
    PhoneAllowance = "phone",
    OtherAllowance = "other"
}
export declare enum SalaryAllowancesPercentageBase {
    BaseSalary = "base_salary",
    TotalSalary = "total_salary"
}
export declare enum SalaryAllowancesPaymentFrequency {
    Monthly = "monthly",
    Quarterly = "quarterly",
    Yearly = "yearly",
    OneTime = "one_time"
}
export declare enum SalaryAdvanceStatus {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Paid = "paid",
    Settled = "settled"
}
export declare enum SalaryConfigType {
    Monthly = "monthly",
    Hourly = "hourly",
    Daily = "daily",
    Shift = "shift"
}
export declare enum StaffPerformanceEvaluationPeriod {
    Monthly = "monthly",
    Quarterly = "quarterly",
    Yearly = "yearly"
}
export declare enum LeaveRequestStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected",
    CANCELLED = "cancelled"
}
export declare enum LeaveTypeCode {
    ANNUAL = "ANNUAL",
    UNPAID = "UNPAID",
    SICK = "SICK",
    MATERNITY = "MATERNITY",
    MARRIAGE = "MARRIAGE",
    FUNERAL = "FUNERAL",
    CHILD_SICK = "CHILD_SICK",
    MISCARRIAGE = "MISCARRIAGE",
    PATERNITY = "PATERNITY",
    COMPENSATORY = "COMPENSATORY",
    BUSINESS_TRIP = "BUSINESS_TRIP",
    WORK_FROM_HOME = "WORK_FROM_HOME",
    OTHER = "OTHER"
}
