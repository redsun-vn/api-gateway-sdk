"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmActivityDirection = exports.CrmActivityRelatedToType = exports.CrmActivityType = void 0;
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
})(CrmActivityType || (exports.CrmActivityType = CrmActivityType = {}));
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
//# sourceMappingURL=activity.js.map