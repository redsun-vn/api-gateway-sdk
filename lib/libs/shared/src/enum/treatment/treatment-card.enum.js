"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionLogStatus = exports.CheckInType = exports.TreatmentCardStatus = void 0;
var TreatmentCardStatus;
(function (TreatmentCardStatus) {
    TreatmentCardStatus["ACTIVE"] = "active";
    TreatmentCardStatus["COMPLETED"] = "completed";
    TreatmentCardStatus["EXPIRED"] = "expired";
    TreatmentCardStatus["CANCELLED"] = "cancelled";
})(TreatmentCardStatus || (exports.TreatmentCardStatus = TreatmentCardStatus = {}));
var CheckInType;
(function (CheckInType) {
    CheckInType["STAFF"] = "staff";
    CheckInType["SELF"] = "self";
})(CheckInType || (exports.CheckInType = CheckInType = {}));
var SessionLogStatus;
(function (SessionLogStatus) {
    SessionLogStatus["COMPLETED"] = "completed";
    SessionLogStatus["CANCELLED"] = "cancelled";
    SessionLogStatus["NO_SHOW"] = "no_show";
})(SessionLogStatus || (exports.SessionLogStatus = SessionLogStatus = {}));
//# sourceMappingURL=treatment-card.enum.js.map