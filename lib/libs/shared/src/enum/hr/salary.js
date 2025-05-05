"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveTypeCode = exports.LeaveRequestStatus = exports.StaffPerformanceEvaluationPeriod = exports.SalaryConfigType = exports.SalaryAdvanceStatus = exports.SalaryAllowancesPaymentFrequency = exports.SalaryAllowancesPercentageBase = exports.SalaryAllowances = exports.SalaryCommissionType = exports.PenaltyBase = exports.PenaltyType = exports.SalaryPenaltyType = exports.SalaryPenaltyBase = exports.SalaryBonusCalculationPeriod = exports.SalaryBonusType = exports.SalaryPayrollClosingDay = exports.SalaryPayrollCycle = exports.SalaryCalculationStatus = exports.SalaryCalculationPeriod = exports.SalaryComponent = void 0;
var SalaryComponent;
(function (SalaryComponent) {
    SalaryComponent["BaseSalary"] = "base_salary";
    SalaryComponent["ShiftSalary"] = "shift_salary";
    SalaryComponent["OvertimePay"] = "overtime_pay";
    SalaryComponent["HolidayPay"] = "holiday_pay";
    SalaryComponent["CommissionAmount"] = "commission_amount";
    SalaryComponent["AllowanceAmount"] = "allowance_amount";
    SalaryComponent["PenaltyAmount"] = "penalty_amount";
    SalaryComponent["LatePenalty"] = "late_penalty";
    SalaryComponent["EarlyLeavePenalty"] = "early_leave_penalty";
    SalaryComponent["BonusAmount"] = "bonus_amount";
    SalaryComponent["TotalSalary"] = "total_salary";
    SalaryComponent["AdvancePayment"] = "advance_payment";
    SalaryComponent["FinalSalary"] = "final_salary";
    SalaryComponent["Month13"] = "month13";
    SalaryComponent["TetBonus"] = "tet_bonus";
})(SalaryComponent || (exports.SalaryComponent = SalaryComponent = {}));
var SalaryCalculationPeriod;
(function (SalaryCalculationPeriod) {
    SalaryCalculationPeriod["Daily"] = "daily";
    SalaryCalculationPeriod["Weekly"] = "weekly";
    SalaryCalculationPeriod["Monthly"] = "monthly";
    SalaryCalculationPeriod["Quarterly"] = "quarterly";
    SalaryCalculationPeriod["Yearly"] = "yearly";
})(SalaryCalculationPeriod || (exports.SalaryCalculationPeriod = SalaryCalculationPeriod = {}));
var SalaryCalculationStatus;
(function (SalaryCalculationStatus) {
    SalaryCalculationStatus["Draft"] = "draft";
    SalaryCalculationStatus["Pending"] = "pending";
    SalaryCalculationStatus["Approved"] = "approved";
    SalaryCalculationStatus["Paid"] = "paid";
})(SalaryCalculationStatus || (exports.SalaryCalculationStatus = SalaryCalculationStatus = {}));
var SalaryPayrollCycle;
(function (SalaryPayrollCycle) {
    SalaryPayrollCycle["Monthly"] = "monthly";
    SalaryPayrollCycle["SemiMonthly"] = "semi_monthly";
    SalaryPayrollCycle["Weekly"] = "weekly";
})(SalaryPayrollCycle || (exports.SalaryPayrollCycle = SalaryPayrollCycle = {}));
var SalaryPayrollClosingDay;
(function (SalaryPayrollClosingDay) {
    SalaryPayrollClosingDay["Monday"] = "monday";
    SalaryPayrollClosingDay["Tuesday"] = "tuesday";
    SalaryPayrollClosingDay["Wednesday"] = "wednesday";
    SalaryPayrollClosingDay["Thursday"] = "thursday";
    SalaryPayrollClosingDay["Friday"] = "friday";
    SalaryPayrollClosingDay["Saturday"] = "saturday";
    SalaryPayrollClosingDay["Sunday"] = "sunday";
})(SalaryPayrollClosingDay || (exports.SalaryPayrollClosingDay = SalaryPayrollClosingDay = {}));
var SalaryBonusType;
(function (SalaryBonusType) {
    SalaryBonusType["Revenue"] = "revenue";
    SalaryBonusType["Performance"] = "performance";
    SalaryBonusType["Attendance"] = "attendance";
    SalaryBonusType["Other"] = "other";
})(SalaryBonusType || (exports.SalaryBonusType = SalaryBonusType = {}));
var SalaryBonusCalculationPeriod;
(function (SalaryBonusCalculationPeriod) {
    SalaryBonusCalculationPeriod["Daily"] = "daily";
    SalaryBonusCalculationPeriod["Weekly"] = "weekly";
    SalaryBonusCalculationPeriod["Monthly"] = "monthly";
    SalaryBonusCalculationPeriod["Quarterly"] = "quarterly";
    SalaryBonusCalculationPeriod["Yearly"] = "yearly";
})(SalaryBonusCalculationPeriod || (exports.SalaryBonusCalculationPeriod = SalaryBonusCalculationPeriod = {}));
var SalaryPenaltyBase;
(function (SalaryPenaltyBase) {
    SalaryPenaltyBase["DailySalary"] = "daily_salary";
    SalaryPenaltyBase["MonthlySalary"] = "monthly_salary";
    SalaryPenaltyBase["ShiftSalary"] = "shift_salary";
})(SalaryPenaltyBase || (exports.SalaryPenaltyBase = SalaryPenaltyBase = {}));
var SalaryPenaltyType;
(function (SalaryPenaltyType) {
    SalaryPenaltyType["Fixed"] = "fixed";
    SalaryPenaltyType["Percentage"] = "percentage";
})(SalaryPenaltyType || (exports.SalaryPenaltyType = SalaryPenaltyType = {}));
var PenaltyType;
(function (PenaltyType) {
    PenaltyType["LATE_ARRIVAL"] = "late_arrival";
    PenaltyType["EARLY_LEAVE"] = "early_leave";
    PenaltyType["ABSENCE"] = "absence";
    PenaltyType["INCOMPLETE_HOURS"] = "incomplete_hours";
    PenaltyType["MISSING_CHECK_IN"] = "missing_check_in";
    PenaltyType["MISSING_CHECK_OUT"] = "missing_check_out";
    PenaltyType["DRESS_CODE"] = "dress_code";
    PenaltyType["BEHAVIOR"] = "behavior";
    PenaltyType["PERFORMANCE"] = "performance";
    PenaltyType["CUSTOM"] = "custom";
})(PenaltyType || (exports.PenaltyType = PenaltyType = {}));
var PenaltyBase;
(function (PenaltyBase) {
    PenaltyBase["DAILY_SALARY"] = "daily_salary";
    PenaltyBase["MONTHLY_SALARY"] = "monthly_salary";
    PenaltyBase["SHIFT_SALARY"] = "shift_salary";
    PenaltyBase["HOURLY_RATE"] = "hourly_rate";
    PenaltyBase["MINUTE_RATE"] = "minute_rate";
    PenaltyBase["FIXED_AMOUNT"] = "fixed_amount";
})(PenaltyBase || (exports.PenaltyBase = PenaltyBase = {}));
var SalaryCommissionType;
(function (SalaryCommissionType) {
    SalaryCommissionType["Product"] = "product";
    SalaryCommissionType["Service"] = "service";
    SalaryCommissionType["Category"] = "category";
    SalaryCommissionType["Revenue"] = "revenue";
})(SalaryCommissionType || (exports.SalaryCommissionType = SalaryCommissionType = {}));
var SalaryAllowances;
(function (SalaryAllowances) {
    SalaryAllowances["MealAllowance"] = "meal";
    SalaryAllowances["TransportationAllowance"] = "transportation";
    SalaryAllowances["PhoneAllowance"] = "phone";
    SalaryAllowances["OtherAllowance"] = "other";
})(SalaryAllowances || (exports.SalaryAllowances = SalaryAllowances = {}));
var SalaryAllowancesPercentageBase;
(function (SalaryAllowancesPercentageBase) {
    SalaryAllowancesPercentageBase["BaseSalary"] = "base_salary";
    SalaryAllowancesPercentageBase["TotalSalary"] = "total_salary";
})(SalaryAllowancesPercentageBase || (exports.SalaryAllowancesPercentageBase = SalaryAllowancesPercentageBase = {}));
var SalaryAllowancesPaymentFrequency;
(function (SalaryAllowancesPaymentFrequency) {
    SalaryAllowancesPaymentFrequency["Monthly"] = "monthly";
    SalaryAllowancesPaymentFrequency["Quarterly"] = "quarterly";
    SalaryAllowancesPaymentFrequency["Yearly"] = "yearly";
    SalaryAllowancesPaymentFrequency["OneTime"] = "one_time";
})(SalaryAllowancesPaymentFrequency || (exports.SalaryAllowancesPaymentFrequency = SalaryAllowancesPaymentFrequency = {}));
var SalaryAdvanceStatus;
(function (SalaryAdvanceStatus) {
    SalaryAdvanceStatus["Pending"] = "pending";
    SalaryAdvanceStatus["Approved"] = "approved";
    SalaryAdvanceStatus["Rejected"] = "rejected";
    SalaryAdvanceStatus["Paid"] = "paid";
    SalaryAdvanceStatus["Settled"] = "settled";
})(SalaryAdvanceStatus || (exports.SalaryAdvanceStatus = SalaryAdvanceStatus = {}));
var SalaryConfigType;
(function (SalaryConfigType) {
    SalaryConfigType["Monthly"] = "monthly";
    SalaryConfigType["Hourly"] = "hourly";
    SalaryConfigType["Daily"] = "daily";
    SalaryConfigType["Shift"] = "shift";
})(SalaryConfigType || (exports.SalaryConfigType = SalaryConfigType = {}));
var StaffPerformanceEvaluationPeriod;
(function (StaffPerformanceEvaluationPeriod) {
    StaffPerformanceEvaluationPeriod["Monthly"] = "monthly";
    StaffPerformanceEvaluationPeriod["Quarterly"] = "quarterly";
    StaffPerformanceEvaluationPeriod["Yearly"] = "yearly";
})(StaffPerformanceEvaluationPeriod || (exports.StaffPerformanceEvaluationPeriod = StaffPerformanceEvaluationPeriod = {}));
var LeaveRequestStatus;
(function (LeaveRequestStatus) {
    LeaveRequestStatus["PENDING"] = "pending";
    LeaveRequestStatus["APPROVED"] = "approved";
    LeaveRequestStatus["REJECTED"] = "rejected";
    LeaveRequestStatus["CANCELLED"] = "cancelled";
})(LeaveRequestStatus || (exports.LeaveRequestStatus = LeaveRequestStatus = {}));
var LeaveTypeCode;
(function (LeaveTypeCode) {
    LeaveTypeCode["ANNUAL"] = "ANNUAL";
    LeaveTypeCode["UNPAID"] = "UNPAID";
    LeaveTypeCode["SICK"] = "SICK";
    LeaveTypeCode["MATERNITY"] = "MATERNITY";
    LeaveTypeCode["MARRIAGE"] = "MARRIAGE";
    LeaveTypeCode["FUNERAL"] = "FUNERAL";
    LeaveTypeCode["CHILD_SICK"] = "CHILD_SICK";
    LeaveTypeCode["MISCARRIAGE"] = "MISCARRIAGE";
    LeaveTypeCode["PATERNITY"] = "PATERNITY";
    LeaveTypeCode["COMPENSATORY"] = "COMPENSATORY";
    LeaveTypeCode["BUSINESS_TRIP"] = "BUSINESS_TRIP";
    LeaveTypeCode["WORK_FROM_HOME"] = "WORK_FROM_HOME";
    LeaveTypeCode["OTHER"] = "OTHER";
})(LeaveTypeCode || (exports.LeaveTypeCode = LeaveTypeCode = {}));
//# sourceMappingURL=salary.js.map