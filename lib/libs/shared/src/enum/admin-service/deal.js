"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEAL_CLASSIFICATION = exports.DECISION_MAKER_LEVEL = exports.LEAD_STATUS = exports.DEAL_LINE_ITEM_TYPE = exports.DEAL_STATUS = exports.DEAL_TYPE = exports.DEAL_AVAILABLE_PRIORITIES = void 0;
var DEAL_AVAILABLE_PRIORITIES;
(function (DEAL_AVAILABLE_PRIORITIES) {
    DEAL_AVAILABLE_PRIORITIES["LOW"] = "low";
    DEAL_AVAILABLE_PRIORITIES["MEDIUM"] = "medium";
    DEAL_AVAILABLE_PRIORITIES["HIGH"] = "high";
    DEAL_AVAILABLE_PRIORITIES["VERY_HIGH"] = "very_high";
})(DEAL_AVAILABLE_PRIORITIES || (exports.DEAL_AVAILABLE_PRIORITIES = DEAL_AVAILABLE_PRIORITIES = {}));
var DEAL_TYPE;
(function (DEAL_TYPE) {
    DEAL_TYPE["NEW"] = "new";
    DEAL_TYPE["UPSELL"] = "upsell";
    DEAL_TYPE["RENEWAL"] = "renewal";
    DEAL_TYPE["CROSS_SELL"] = "cross_sell";
})(DEAL_TYPE || (exports.DEAL_TYPE = DEAL_TYPE = {}));
var DEAL_STATUS;
(function (DEAL_STATUS) {
    DEAL_STATUS["Potential"] = "potential";
    DEAL_STATUS["Negotiating"] = "negotiating";
    DEAL_STATUS["Propose"] = "propose";
    DEAL_STATUS["CloseDeal"] = "close_deal";
    DEAL_STATUS["Fail"] = "fail";
})(DEAL_STATUS || (exports.DEAL_STATUS = DEAL_STATUS = {}));
var DEAL_LINE_ITEM_TYPE;
(function (DEAL_LINE_ITEM_TYPE) {
    DEAL_LINE_ITEM_TYPE["PACKAGE_ADDITION"] = "package_addition";
    DEAL_LINE_ITEM_TYPE["APP_PLAN"] = "app_plan";
    DEAL_LINE_ITEM_TYPE["STAFF_QUANTITY"] = "staff_quantity";
    DEAL_LINE_ITEM_TYPE["BRANCH_QUANTITY"] = "branch_quantity";
    DEAL_LINE_ITEM_TYPE["DEVICE"] = "device";
    DEAL_LINE_ITEM_TYPE["THEME"] = "theme";
    DEAL_LINE_ITEM_TYPE["OTHER"] = "other";
})(DEAL_LINE_ITEM_TYPE || (exports.DEAL_LINE_ITEM_TYPE = DEAL_LINE_ITEM_TYPE = {}));
var LEAD_STATUS;
(function (LEAD_STATUS) {
    LEAD_STATUS["NEW"] = "new";
    LEAD_STATUS["CONTACTED"] = "contacted";
    LEAD_STATUS["QUALIFIED"] = "qualified";
    LEAD_STATUS["DISQUALIFIED"] = "disqualified";
    LEAD_STATUS["CONVERTED"] = "converted";
    LEAD_STATUS["LOST"] = "lost";
})(LEAD_STATUS || (exports.LEAD_STATUS = LEAD_STATUS = {}));
var DECISION_MAKER_LEVEL;
(function (DECISION_MAKER_LEVEL) {
    DECISION_MAKER_LEVEL["C_LEVEL"] = "c_level";
    DECISION_MAKER_LEVEL["DIRECTOR"] = "director";
    DECISION_MAKER_LEVEL["MANAGER"] = "manager";
    DECISION_MAKER_LEVEL["STAFF"] = "staff";
})(DECISION_MAKER_LEVEL || (exports.DECISION_MAKER_LEVEL = DECISION_MAKER_LEVEL = {}));
var DEAL_CLASSIFICATION;
(function (DEAL_CLASSIFICATION) {
    DEAL_CLASSIFICATION["COLD"] = "cold";
    DEAL_CLASSIFICATION["WARM"] = "warm";
    DEAL_CLASSIFICATION["HOT"] = "hot";
    DEAL_CLASSIFICATION["SALES_READY"] = "sales_ready";
})(DEAL_CLASSIFICATION || (exports.DEAL_CLASSIFICATION = DEAL_CLASSIFICATION = {}));
//# sourceMappingURL=deal.js.map