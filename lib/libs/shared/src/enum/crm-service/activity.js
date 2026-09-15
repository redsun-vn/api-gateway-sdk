"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmActivitySource = exports.CrmActivityOutcome = exports.CrmActivityDirection = exports.CrmActivityRelatedToType = exports.CrmActivityCreateType = exports.CrmActivityType = void 0;
var CrmActivityType;
(function (CrmActivityType) {
    CrmActivityType["CALL"] = "call";
    CrmActivityType["EMAIL"] = "email";
    CrmActivityType["MEETING"] = "meeting";
    CrmActivityType["NOTE"] = "note";
    CrmActivityType["SMS"] = "sms";
    CrmActivityType["WHATSAPP"] = "whatsapp";
    CrmActivityType["WINBACK"] = "winback";
    CrmActivityType["STAGE_CHANGE"] = "stage_change";
    CrmActivityType["CHAT"] = "chat";
})(CrmActivityType || (exports.CrmActivityType = CrmActivityType = {}));
var CrmActivityCreateType;
(function (CrmActivityCreateType) {
    CrmActivityCreateType["CALL"] = "call";
    CrmActivityCreateType["EMAIL"] = "email";
    CrmActivityCreateType["MEETING"] = "meeting";
    CrmActivityCreateType["NOTE"] = "note";
    CrmActivityCreateType["SMS"] = "sms";
    CrmActivityCreateType["WHATSAPP"] = "whatsapp";
    CrmActivityCreateType["WINBACK"] = "winback";
    CrmActivityCreateType["STAGE_CHANGE"] = "stage_change";
})(CrmActivityCreateType || (exports.CrmActivityCreateType = CrmActivityCreateType = {}));
var CrmActivityRelatedToType;
(function (CrmActivityRelatedToType) {
    CrmActivityRelatedToType["LEAD"] = "lead";
    CrmActivityRelatedToType["OPPORTUNITY"] = "opportunity";
    CrmActivityRelatedToType["PARTNER"] = "partner";
})(CrmActivityRelatedToType || (exports.CrmActivityRelatedToType = CrmActivityRelatedToType = {}));
var CrmActivityDirection;
(function (CrmActivityDirection) {
    CrmActivityDirection["INBOUND"] = "inbound";
    CrmActivityDirection["OUTBOUND"] = "outbound";
})(CrmActivityDirection || (exports.CrmActivityDirection = CrmActivityDirection = {}));
var CrmActivityOutcome;
(function (CrmActivityOutcome) {
    CrmActivityOutcome["CONNECTED"] = "connected";
    CrmActivityOutcome["NO_ANSWER"] = "no_answer";
    CrmActivityOutcome["VOICEMAIL"] = "voicemail";
    CrmActivityOutcome["BUSY"] = "busy";
    CrmActivityOutcome["WRONG_NUMBER"] = "wrong_number";
    CrmActivityOutcome["RESCHEDULED"] = "rescheduled";
    CrmActivityOutcome["NO_SHOW"] = "no_show";
    CrmActivityOutcome["CANCELLED"] = "cancelled";
    CrmActivityOutcome["NO_RESPONSE"] = "no_response";
})(CrmActivityOutcome || (exports.CrmActivityOutcome = CrmActivityOutcome = {}));
var CrmActivitySource;
(function (CrmActivitySource) {
    CrmActivitySource["MANUAL"] = "manual";
    CrmActivitySource["SYSTEM"] = "system";
    CrmActivitySource["WORKFLOW"] = "workflow";
    CrmActivitySource["INTEGRATION"] = "integration";
})(CrmActivitySource || (exports.CrmActivitySource = CrmActivitySource = {}));
//# sourceMappingURL=activity.js.map