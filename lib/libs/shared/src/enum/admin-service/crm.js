"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEAD_SCORING_RULE_OPERATOR = exports.LEAD_SCORING_RULE_TYPE = exports.CRMKPIPermission = exports.TIMELINE_SCORE = exports.NEED_SCORE = exports.ASSIGNMENT_RULES = exports.CRMBudgetPermission = exports.KPI_HIERARCHY_LEVEL = exports.KPI_UNIT = exports.KPI_PERIOD = exports.KPI_STATUS = exports.KPI_TYPE = exports.EXPENSE_PRIORITY = exports.EXPENSE_STATUS = exports.EXPENSE_CATEGORY = exports.BUDGET_PERIOD = exports.BUDGET_STATUS = exports.BUDGET_TYPE = void 0;
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
var KPI_TYPE;
(function (KPI_TYPE) {
    KPI_TYPE["REVENUE"] = "revenue";
    KPI_TYPE["SALES_VOLUME"] = "sales_volume";
    KPI_TYPE["LEAD_GENERATION"] = "lead_generation";
    KPI_TYPE["CONVERSION_RATE"] = "conversion_rate";
    KPI_TYPE["CUSTOMER_SATISFACTION"] = "customer_satisfaction";
    KPI_TYPE["COST_REDUCTION"] = "cost_reduction";
    KPI_TYPE["PRODUCTIVITY"] = "productivity";
    KPI_TYPE["QUALITY"] = "quality";
    KPI_TYPE["ATTENDANCE"] = "attendance";
    KPI_TYPE["TRAINING"] = "training";
    KPI_TYPE["OTHER"] = "other";
})(KPI_TYPE || (exports.KPI_TYPE = KPI_TYPE = {}));
var KPI_STATUS;
(function (KPI_STATUS) {
    KPI_STATUS["DRAFT"] = "draft";
    KPI_STATUS["PENDING"] = "pending";
    KPI_STATUS["APPROVED"] = "approved";
    KPI_STATUS["ACTIVE"] = "active";
    KPI_STATUS["COMPLETED"] = "completed";
    KPI_STATUS["CANCELLED"] = "cancelled";
    KPI_STATUS["OVERDUE"] = "overdue";
})(KPI_STATUS || (exports.KPI_STATUS = KPI_STATUS = {}));
var KPI_PERIOD;
(function (KPI_PERIOD) {
    KPI_PERIOD["DAILY"] = "daily";
    KPI_PERIOD["WEEKLY"] = "weekly";
    KPI_PERIOD["MONTHLY"] = "monthly";
    KPI_PERIOD["QUARTERLY"] = "quarterly";
    KPI_PERIOD["YEARLY"] = "yearly";
})(KPI_PERIOD || (exports.KPI_PERIOD = KPI_PERIOD = {}));
var KPI_UNIT;
(function (KPI_UNIT) {
    KPI_UNIT["VND"] = "VND";
    KPI_UNIT["USD"] = "USD";
    KPI_UNIT["COUNT"] = "count";
    KPI_UNIT["PERCENTAGE"] = "percentage";
    KPI_UNIT["HOUR"] = "hour";
    KPI_UNIT["DAY"] = "day";
    KPI_UNIT["POINT"] = "point";
})(KPI_UNIT || (exports.KPI_UNIT = KPI_UNIT = {}));
var KPI_HIERARCHY_LEVEL;
(function (KPI_HIERARCHY_LEVEL) {
    KPI_HIERARCHY_LEVEL["COMPANY"] = "company";
    KPI_HIERARCHY_LEVEL["DEPARTMENT"] = "department";
    KPI_HIERARCHY_LEVEL["TEAM"] = "team";
    KPI_HIERARCHY_LEVEL["INDIVIDUAL"] = "individual";
})(KPI_HIERARCHY_LEVEL || (exports.KPI_HIERARCHY_LEVEL = KPI_HIERARCHY_LEVEL = {}));
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
var CRMKPIPermission;
(function (CRMKPIPermission) {
    CRMKPIPermission["VIEW"] = "crm-kpi:view";
    CRMKPIPermission["CREATE"] = "crm-kpi:create";
    CRMKPIPermission["UPDATE"] = "crm-kpi:update";
    CRMKPIPermission["DELETE"] = "crm-kpi:delete";
    CRMKPIPermission["MANAGE_HIERARCHY"] = "crm-kpi:manage-hierarchy";
})(CRMKPIPermission || (exports.CRMKPIPermission = CRMKPIPermission = {}));
var LEAD_SCORING_RULE_TYPE;
(function (LEAD_SCORING_RULE_TYPE) {
    LEAD_SCORING_RULE_TYPE["COMPANY_SIZE"] = "company_size";
    LEAD_SCORING_RULE_TYPE["BUDGET_RANGE"] = "budget_range";
})(LEAD_SCORING_RULE_TYPE || (exports.LEAD_SCORING_RULE_TYPE = LEAD_SCORING_RULE_TYPE = {}));
var LEAD_SCORING_RULE_OPERATOR;
(function (LEAD_SCORING_RULE_OPERATOR) {
    LEAD_SCORING_RULE_OPERATOR["EQUALS"] = "equals";
    LEAD_SCORING_RULE_OPERATOR["GREATER_THAN"] = "greater_than";
    LEAD_SCORING_RULE_OPERATOR["GREATER_THAN_EQUALS"] = "greater_than_equals";
    LEAD_SCORING_RULE_OPERATOR["LESS_THAN"] = "less_than";
    LEAD_SCORING_RULE_OPERATOR["LESS_THAN_EQUALS"] = "less_than_equals";
    LEAD_SCORING_RULE_OPERATOR["BETWEEN"] = "between";
    LEAD_SCORING_RULE_OPERATOR["IN"] = "in";
})(LEAD_SCORING_RULE_OPERATOR || (exports.LEAD_SCORING_RULE_OPERATOR = LEAD_SCORING_RULE_OPERATOR = {}));
//# sourceMappingURL=crm.js.map