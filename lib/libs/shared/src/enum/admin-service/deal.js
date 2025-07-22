"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEAL_LINE_ITEM_TYPE = exports.DEAL_TYPE = exports.DEAL_AVAILABLE_PRIORITIES = void 0;
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
//# sourceMappingURL=deal.js.map