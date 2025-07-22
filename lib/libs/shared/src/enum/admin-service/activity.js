"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityResult = exports.ActivityStatus = exports.ActivityPriority = exports.ActivityType = void 0;
var ActivityType;
(function (ActivityType) {
    ActivityType["CALL"] = "call";
    ActivityType["EMAIL"] = "email";
    ActivityType["MEETING"] = "meeting";
    ActivityType["NOTE"] = "note";
    ActivityType["SUGGESTION"] = "suggestion";
    ActivityType["DEMO"] = "demo";
    ActivityType["FOLLOW_UP"] = "follow_up";
    ActivityType["SIGN_CONTRACT"] = "sign_contract";
    ActivityType["SEND_QUOTE"] = "send_quote";
})(ActivityType || (exports.ActivityType = ActivityType = {}));
var ActivityPriority;
(function (ActivityPriority) {
    ActivityPriority["HIGH"] = "high";
    ActivityPriority["MEDIUM"] = "medium";
    ActivityPriority["LOW"] = "low";
})(ActivityPriority || (exports.ActivityPriority = ActivityPriority = {}));
var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus["PLANNED"] = "planned";
    ActivityStatus["PENDING"] = "pending";
    ActivityStatus["IN_PROGRESS"] = "in_progress";
    ActivityStatus["COMPLETED"] = "completed";
    ActivityStatus["CANCELED"] = "canceled";
})(ActivityStatus || (exports.ActivityStatus = ActivityStatus = {}));
var ActivityResult;
(function (ActivityResult) {
    ActivityResult["SUCCESS"] = "success";
    ActivityResult["PARTIAL"] = "partial";
    ActivityResult["FAIL"] = "fail";
    ActivityResult["POSTPONED"] = "postponed";
})(ActivityResult || (exports.ActivityResult = ActivityResult = {}));
//# sourceMappingURL=activity.js.map