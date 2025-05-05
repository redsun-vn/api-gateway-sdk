"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryLeaveRequestPermission = exports.SalaryLeaveTypePermission = exports.SalaryStaffPerformancePermission = exports.SalaryPenaltyPermission = exports.SalaryPayrollPermission = exports.SalaryInsurancePermission = exports.SalaryHolidayPermission = exports.SalaryConfigPermission = exports.SalaryCommissionPermission = exports.SalaryCalculationPermission = exports.SalaryBonusPermission = exports.SalaryAllowancePermission = exports.SalaryAdvancePermission = void 0;
var SalaryAdvancePermission;
(function (SalaryAdvancePermission) {
    SalaryAdvancePermission["VIEW"] = "salary_advance-view";
    SalaryAdvancePermission["CREATE"] = "salary_advance-create";
    SalaryAdvancePermission["UPDATE"] = "salary_advance-update";
    SalaryAdvancePermission["DELETE"] = "salary_advance-delete";
    SalaryAdvancePermission["APPROVE"] = "salary_advance-approve";
})(SalaryAdvancePermission || (exports.SalaryAdvancePermission = SalaryAdvancePermission = {}));
var SalaryAllowancePermission;
(function (SalaryAllowancePermission) {
    SalaryAllowancePermission["VIEW"] = "salary_allowance-view";
    SalaryAllowancePermission["CREATE"] = "salary_allowance-create";
    SalaryAllowancePermission["UPDATE"] = "salary_allowance-update";
    SalaryAllowancePermission["DELETE"] = "salary_allowance-delete";
})(SalaryAllowancePermission || (exports.SalaryAllowancePermission = SalaryAllowancePermission = {}));
var SalaryBonusPermission;
(function (SalaryBonusPermission) {
    SalaryBonusPermission["VIEW"] = "salary_bonus-view";
    SalaryBonusPermission["CREATE"] = "salary_bonus-create";
    SalaryBonusPermission["UPDATE"] = "salary_bonus-update";
    SalaryBonusPermission["DELETE"] = "salary_bonus-delete";
})(SalaryBonusPermission || (exports.SalaryBonusPermission = SalaryBonusPermission = {}));
var SalaryCalculationPermission;
(function (SalaryCalculationPermission) {
    SalaryCalculationPermission["VIEW"] = "salary_calculation-view";
    SalaryCalculationPermission["CREATE"] = "salary_calculation-create";
    SalaryCalculationPermission["UPDATE"] = "salary_calculation-update";
    SalaryCalculationPermission["DELETE"] = "salary_calculation-delete";
    SalaryCalculationPermission["APPROVE"] = "salary_calculation-approve";
})(SalaryCalculationPermission || (exports.SalaryCalculationPermission = SalaryCalculationPermission = {}));
var SalaryCommissionPermission;
(function (SalaryCommissionPermission) {
    SalaryCommissionPermission["VIEW"] = "salary_commission-view";
    SalaryCommissionPermission["CREATE"] = "salary_commission-create";
    SalaryCommissionPermission["UPDATE"] = "salary_commission-update";
    SalaryCommissionPermission["DELETE"] = "salary_commission-delete";
})(SalaryCommissionPermission || (exports.SalaryCommissionPermission = SalaryCommissionPermission = {}));
var SalaryConfigPermission;
(function (SalaryConfigPermission) {
    SalaryConfigPermission["VIEW"] = "salary_config-view";
    SalaryConfigPermission["CREATE"] = "salary_config-create";
    SalaryConfigPermission["UPDATE"] = "salary_config-update";
    SalaryConfigPermission["DELETE"] = "salary_config-delete";
})(SalaryConfigPermission || (exports.SalaryConfigPermission = SalaryConfigPermission = {}));
var SalaryHolidayPermission;
(function (SalaryHolidayPermission) {
    SalaryHolidayPermission["VIEW"] = "salary_holiday-view";
    SalaryHolidayPermission["CREATE"] = "salary_holiday-create";
    SalaryHolidayPermission["UPDATE"] = "salary_holiday-update";
    SalaryHolidayPermission["DELETE"] = "salary_holiday-delete";
})(SalaryHolidayPermission || (exports.SalaryHolidayPermission = SalaryHolidayPermission = {}));
var SalaryInsurancePermission;
(function (SalaryInsurancePermission) {
    SalaryInsurancePermission["VIEW"] = "salary_insurance-view";
    SalaryInsurancePermission["CREATE"] = "salary_insurance-create";
    SalaryInsurancePermission["UPDATE"] = "salary_insurance-update";
    SalaryInsurancePermission["DELETE"] = "salary_insurance-delete";
})(SalaryInsurancePermission || (exports.SalaryInsurancePermission = SalaryInsurancePermission = {}));
var SalaryPayrollPermission;
(function (SalaryPayrollPermission) {
    SalaryPayrollPermission["VIEW"] = "salary_payroll-view";
    SalaryPayrollPermission["CREATE"] = "salary_payroll-create";
    SalaryPayrollPermission["UPDATE"] = "salary_payroll-update";
    SalaryPayrollPermission["DELETE"] = "salary_payroll-delete";
})(SalaryPayrollPermission || (exports.SalaryPayrollPermission = SalaryPayrollPermission = {}));
var SalaryPenaltyPermission;
(function (SalaryPenaltyPermission) {
    SalaryPenaltyPermission["VIEW"] = "salary_penalty-view";
    SalaryPenaltyPermission["CREATE"] = "salary_penalty-create";
    SalaryPenaltyPermission["UPDATE"] = "salary_penalty-update";
    SalaryPenaltyPermission["DELETE"] = "salary_penalty-delete";
})(SalaryPenaltyPermission || (exports.SalaryPenaltyPermission = SalaryPenaltyPermission = {}));
var SalaryStaffPerformancePermission;
(function (SalaryStaffPerformancePermission) {
    SalaryStaffPerformancePermission["VIEW"] = "salary_staff_performance-view";
    SalaryStaffPerformancePermission["CREATE"] = "salary_staff_performance-create";
    SalaryStaffPerformancePermission["UPDATE"] = "salary_staff_performance-update";
    SalaryStaffPerformancePermission["DELETE"] = "salary_staff_performance-delete";
})(SalaryStaffPerformancePermission || (exports.SalaryStaffPerformancePermission = SalaryStaffPerformancePermission = {}));
var SalaryLeaveTypePermission;
(function (SalaryLeaveTypePermission) {
    SalaryLeaveTypePermission["VIEW"] = "salary_leave_type-view";
    SalaryLeaveTypePermission["CREATE"] = "salary_leave_type-create";
    SalaryLeaveTypePermission["UPDATE"] = "salary_leave_type-update";
    SalaryLeaveTypePermission["DELETE"] = "salary_leave_type-delete";
})(SalaryLeaveTypePermission || (exports.SalaryLeaveTypePermission = SalaryLeaveTypePermission = {}));
var SalaryLeaveRequestPermission;
(function (SalaryLeaveRequestPermission) {
    SalaryLeaveRequestPermission["VIEW"] = "salary_leave_request-view";
    SalaryLeaveRequestPermission["CREATE"] = "salary_leave_request-create";
    SalaryLeaveRequestPermission["UPDATE"] = "salary_leave_request-update";
    SalaryLeaveRequestPermission["DELETE"] = "salary_leave_request-delete";
    SalaryLeaveRequestPermission["APPROVE"] = "salary_leave_request-approve";
    SalaryLeaveRequestPermission["REJECT"] = "salary_leave_request-reject";
})(SalaryLeaveRequestPermission || (exports.SalaryLeaveRequestPermission = SalaryLeaveRequestPermission = {}));
//# sourceMappingURL=salary.js.map