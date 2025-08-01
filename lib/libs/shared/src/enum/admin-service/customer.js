"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCustomerExpectedBudgetRange = exports.AdminCustomerPriority = exports.AdminCustomerLevelInterest = exports.AdminCustomerStatus = exports.AdminCustomerCompanySize = exports.AdminCustomerType = void 0;
var AdminCustomerType;
(function (AdminCustomerType) {
    AdminCustomerType["COMPANY"] = "company";
    AdminCustomerType["INDIVIDUAL"] = "individual";
})(AdminCustomerType || (exports.AdminCustomerType = AdminCustomerType = {}));
var AdminCustomerCompanySize;
(function (AdminCustomerCompanySize) {
    AdminCustomerCompanySize["STARTUP"] = "startup";
    AdminCustomerCompanySize["SMALL"] = "small";
    AdminCustomerCompanySize["MEDIUM"] = "medium";
    AdminCustomerCompanySize["LARGE"] = "large";
    AdminCustomerCompanySize["ENTERPRISE"] = "enterprise";
})(AdminCustomerCompanySize || (exports.AdminCustomerCompanySize = AdminCustomerCompanySize = {}));
var AdminCustomerStatus;
(function (AdminCustomerStatus) {
    AdminCustomerStatus["Active"] = "active";
    AdminCustomerStatus["InActive"] = "in_active";
    AdminCustomerStatus["Potential"] = "potential";
})(AdminCustomerStatus || (exports.AdminCustomerStatus = AdminCustomerStatus = {}));
var AdminCustomerLevelInterest;
(function (AdminCustomerLevelInterest) {
    AdminCustomerLevelInterest["HOT"] = "hot";
    AdminCustomerLevelInterest["COLD"] = "cold";
    AdminCustomerLevelInterest["WARM"] = "warm";
})(AdminCustomerLevelInterest || (exports.AdminCustomerLevelInterest = AdminCustomerLevelInterest = {}));
var AdminCustomerPriority;
(function (AdminCustomerPriority) {
    AdminCustomerPriority["LOW"] = "low";
    AdminCustomerPriority["MEDIUM"] = "medium";
    AdminCustomerPriority["HIGH"] = "high";
})(AdminCustomerPriority || (exports.AdminCustomerPriority = AdminCustomerPriority = {}));
var AdminCustomerExpectedBudgetRange;
(function (AdminCustomerExpectedBudgetRange) {
    AdminCustomerExpectedBudgetRange["Under10M"] = "Under10M";
    AdminCustomerExpectedBudgetRange["From10To50M"] = "From10MTo50M";
    AdminCustomerExpectedBudgetRange["From50MTo100M"] = "From50MTo100M";
    AdminCustomerExpectedBudgetRange["From100MTo500M"] = "From100MTo500M";
    AdminCustomerExpectedBudgetRange["Over500M"] = "Over500M";
})(AdminCustomerExpectedBudgetRange || (exports.AdminCustomerExpectedBudgetRange = AdminCustomerExpectedBudgetRange = {}));
//# sourceMappingURL=customer.js.map