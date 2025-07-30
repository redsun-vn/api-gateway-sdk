"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIMELINE_SCORE = exports.NEED_SCORE = exports.ASSIGNMENT_RULES = exports.CRMBudgetPermission = exports.EXPENSE_PRIORITY = exports.EXPENSE_STATUS = exports.EXPENSE_CATEGORY = exports.BUDGET_PERIOD = exports.BUDGET_STATUS = exports.BUDGET_TYPE = void 0;
var BUDGET_TYPE;
(function (BUDGET_TYPE) {
    BUDGET_TYPE["MARKETING"] = "marketing";
    BUDGET_TYPE["SALES"] = "sales";
    BUDGET_TYPE["OPERATION"] = "operation";
    BUDGET_TYPE["PROJECT"] = "project";
    BUDGET_TYPE["TRAINING"] = "training";
    BUDGET_TYPE["OTHER"] = "other";
})(BUDGET_TYPE || (exports.BUDGET_TYPE = BUDGET_TYPE = {}));
var BUDGET_STATUS;
(function (BUDGET_STATUS) {
    BUDGET_STATUS["DRAFT"] = "draft";
    BUDGET_STATUS["PENDING"] = "pending";
    BUDGET_STATUS["APPROVED"] = "approved";
    BUDGET_STATUS["REJECTED"] = "rejected";
    BUDGET_STATUS["ACTIVE"] = "active";
    BUDGET_STATUS["COMPLETED"] = "completed";
    BUDGET_STATUS["CANCELLED"] = "cancelled";
})(BUDGET_STATUS || (exports.BUDGET_STATUS = BUDGET_STATUS = {}));
var BUDGET_PERIOD;
(function (BUDGET_PERIOD) {
    BUDGET_PERIOD["MONTHLY"] = "monthly";
    BUDGET_PERIOD["QUARTERLY"] = "quarterly";
    BUDGET_PERIOD["YEARLY"] = "yearly";
    BUDGET_PERIOD["PROJECT_BASED"] = "project_based";
})(BUDGET_PERIOD || (exports.BUDGET_PERIOD = BUDGET_PERIOD = {}));
var EXPENSE_CATEGORY;
(function (EXPENSE_CATEGORY) {
    EXPENSE_CATEGORY["MARKETING"] = "marketing";
    EXPENSE_CATEGORY["ADVERTISING"] = "advertising";
    EXPENSE_CATEGORY["EVENTS"] = "events";
    EXPENSE_CATEGORY["TRAINING"] = "training";
    EXPENSE_CATEGORY["TRAVEL"] = "travel";
    EXPENSE_CATEGORY["EQUIPMENT"] = "equipment";
    EXPENSE_CATEGORY["SOFTWARE"] = "software";
    EXPENSE_CATEGORY["CONSULTING"] = "consulting";
    EXPENSE_CATEGORY["OFFICE_SUPPLIES"] = "office_supplies";
    EXPENSE_CATEGORY["UTILITIES"] = "utilities";
    EXPENSE_CATEGORY["PERSONNEL"] = "personnel";
    EXPENSE_CATEGORY["OTHER"] = "other";
})(EXPENSE_CATEGORY || (exports.EXPENSE_CATEGORY = EXPENSE_CATEGORY = {}));
var EXPENSE_STATUS;
(function (EXPENSE_STATUS) {
    EXPENSE_STATUS["PLANNED"] = "planned";
    EXPENSE_STATUS["PENDING"] = "pending";
    EXPENSE_STATUS["REQUESTED"] = "requested";
    EXPENSE_STATUS["APPROVED"] = "approved";
    EXPENSE_STATUS["REJECTED"] = "rejected";
    EXPENSE_STATUS["IN_PROGRESS"] = "in_progress";
    EXPENSE_STATUS["COMPLETED"] = "completed";
    EXPENSE_STATUS["CANCELLED"] = "cancelled";
})(EXPENSE_STATUS || (exports.EXPENSE_STATUS = EXPENSE_STATUS = {}));
var EXPENSE_PRIORITY;
(function (EXPENSE_PRIORITY) {
    EXPENSE_PRIORITY["LOW"] = "low";
    EXPENSE_PRIORITY["MEDIUM"] = "medium";
    EXPENSE_PRIORITY["HIGH"] = "high";
    EXPENSE_PRIORITY["URGENT"] = "urgent";
})(EXPENSE_PRIORITY || (exports.EXPENSE_PRIORITY = EXPENSE_PRIORITY = {}));
var CRMBudgetPermission;
(function (CRMBudgetPermission) {
    CRMBudgetPermission["VIEW"] = "crm-budget:view";
    CRMBudgetPermission["CREATE"] = "crm-budget:create";
    CRMBudgetPermission["UPDATE"] = "crm-budget:update";
    CRMBudgetPermission["DELETE"] = "crm-budget:delete";
    CRMBudgetPermission["APPROVE"] = "crm-budget:approve";
})(CRMBudgetPermission || (exports.CRMBudgetPermission = CRMBudgetPermission = {}));
var ASSIGNMENT_RULES;
(function (ASSIGNMENT_RULES) {
    ASSIGNMENT_RULES["ROUND_ROBIN"] = "round_robin";
    ASSIGNMENT_RULES["BY_EXPERTISE"] = "by_expertise";
    ASSIGNMENT_RULES["BY_REGION"] = "by_region";
    ASSIGNMENT_RULES["BY_VOLUME"] = "by_volume";
    ASSIGNMENT_RULES["MANUAL"] = "manual";
})(ASSIGNMENT_RULES || (exports.ASSIGNMENT_RULES = ASSIGNMENT_RULES = {}));
var NEED_SCORE;
(function (NEED_SCORE) {
    NEED_SCORE["VERY_HIGH"] = "very_high";
    NEED_SCORE["HIGH"] = "high";
    NEED_SCORE["MEDIUM"] = "medium";
    NEED_SCORE["LOW"] = "low";
    NEED_SCORE["VERY_LOW"] = "very_low";
})(NEED_SCORE || (exports.NEED_SCORE = NEED_SCORE = {}));
var TIMELINE_SCORE;
(function (TIMELINE_SCORE) {
    TIMELINE_SCORE["NOW"] = "now";
    TIMELINE_SCORE["ONE_TO_THREE_MONTHS"] = "1-3_months";
    TIMELINE_SCORE["THREE_TO_SIX_MONTHS"] = "3-6_months";
    TIMELINE_SCORE["SIX_TO_TWELVE_MONTHS"] = "6-12_months";
    TIMELINE_SCORE["OVER_ONE_YEAR"] = "over_1_year";
})(TIMELINE_SCORE || (exports.TIMELINE_SCORE = TIMELINE_SCORE = {}));
//# sourceMappingURL=crm.js.map