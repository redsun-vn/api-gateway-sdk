"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IZaloOA = void 0;
var IZaloOA;
(function (IZaloOA) {
    let ZNSTemplateStatus;
    (function (ZNSTemplateStatus) {
        ZNSTemplateStatus[ZNSTemplateStatus["ENABLE"] = 1] = "ENABLE";
        ZNSTemplateStatus[ZNSTemplateStatus["PENDING_REVIEW"] = 2] = "PENDING_REVIEW";
        ZNSTemplateStatus[ZNSTemplateStatus["REJECT"] = 3] = "REJECT";
        ZNSTemplateStatus[ZNSTemplateStatus["DISABLE"] = 4] = "DISABLE";
    })(ZNSTemplateStatus = IZaloOA.ZNSTemplateStatus || (IZaloOA.ZNSTemplateStatus = {}));
    IZaloOA.ZNSTemplateStatusMap = {
        [ZNSTemplateStatus.ENABLE]: 'ENABLE',
        [ZNSTemplateStatus.PENDING_REVIEW]: 'PENDING_REVIEW',
        [ZNSTemplateStatus.REJECT]: 'REJECT',
        [ZNSTemplateStatus.DISABLE]: 'DISABLE',
    };
    let AppointmentReminderStatus;
    (function (AppointmentReminderStatus) {
        AppointmentReminderStatus["PENDING"] = "pending";
        AppointmentReminderStatus["SENT"] = "sent";
        AppointmentReminderStatus["FAILED"] = "failed";
        AppointmentReminderStatus["CANCELLED"] = "cancelled";
    })(AppointmentReminderStatus = IZaloOA.AppointmentReminderStatus || (IZaloOA.AppointmentReminderStatus = {}));
})(IZaloOA || (exports.IZaloOA = IZaloOA = {}));
//# sourceMappingURL=izalo-oa.type.js.map