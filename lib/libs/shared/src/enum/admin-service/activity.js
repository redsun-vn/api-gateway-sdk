"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminActivityResult = exports.AdminActivityStatus = exports.AdminActivityPriority = exports.AdminActivityType = void 0;
var AdminActivityType;
(function (AdminActivityType) {
    AdminActivityType["CALL"] = "call";
    AdminActivityType["EMAIL"] = "email";
    AdminActivityType["MEETING_ONLINE"] = "meeting_online";
    AdminActivityType["MEETING_OFFLINE"] = "meeting_offline";
    AdminActivityType["NOTE"] = "note";
    AdminActivityType["SUGGESTION"] = "suggestion";
    AdminActivityType["DEMO"] = "demo";
    AdminActivityType["FOLLOW_UP"] = "follow_up";
    AdminActivityType["SIGN_CONTRACT"] = "sign_contract";
    AdminActivityType["SEND_QUOTE"] = "send_quote";
})(AdminActivityType || (exports.AdminActivityType = AdminActivityType = {}));
var AdminActivityPriority;
(function (AdminActivityPriority) {
    AdminActivityPriority["HIGH"] = "high";
    AdminActivityPriority["MEDIUM"] = "medium";
    AdminActivityPriority["LOW"] = "low";
})(AdminActivityPriority || (exports.AdminActivityPriority = AdminActivityPriority = {}));
var AdminActivityStatus;
(function (AdminActivityStatus) {
    AdminActivityStatus["PLANNED"] = "planned";
    AdminActivityStatus["PENDING"] = "pending";
    AdminActivityStatus["IN_PROGRESS"] = "in_progress";
    AdminActivityStatus["COMPLETED"] = "completed";
    AdminActivityStatus["CANCELED"] = "canceled";
    AdminActivityStatus["OVERDUE"] = "overdue";
})(AdminActivityStatus || (exports.AdminActivityStatus = AdminActivityStatus = {}));
var AdminActivityResult;
(function (AdminActivityResult) {
    AdminActivityResult["SUCCESS"] = "success";
    AdminActivityResult["PARTIAL"] = "partial";
    AdminActivityResult["FAIL"] = "fail";
    AdminActivityResult["POSTPONED"] = "postponed";
})(AdminActivityResult || (exports.AdminActivityResult = AdminActivityResult = {}));
//# sourceMappingURL=activity.js.map