"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicAuditPermission = exports.ClinicQueuePermission = exports.ClinicAttachmentPermission = exports.ClinicPrescriptionPermission = exports.ClinicPatientPermission = exports.ClinicVisitPermission = void 0;
var ClinicVisitPermission;
(function (ClinicVisitPermission) {
    ClinicVisitPermission["VIEW"] = "clinic_visit-view";
    ClinicVisitPermission["CREATE"] = "clinic_visit-create";
    ClinicVisitPermission["READ_PHI"] = "clinic_visit-read_phi";
    ClinicVisitPermission["UPDATE_VITALS"] = "clinic_visit-update_vitals";
    ClinicVisitPermission["UPDATE_DX"] = "clinic_visit-update_dx";
    ClinicVisitPermission["SIGN_OFF"] = "clinic_visit-sign_off";
    ClinicVisitPermission["AMEND"] = "clinic_visit-amend";
    ClinicVisitPermission["AMEND_ANY"] = "clinic_visit-amend_any";
    ClinicVisitPermission["DELETE"] = "clinic_visit-delete";
})(ClinicVisitPermission || (exports.ClinicVisitPermission = ClinicVisitPermission = {}));
var ClinicPatientPermission;
(function (ClinicPatientPermission) {
    ClinicPatientPermission["VIEW"] = "clinic_patient-view";
    ClinicPatientPermission["READ_PHI"] = "clinic_patient-read_phi";
    ClinicPatientPermission["CREATE"] = "clinic_patient-create";
    ClinicPatientPermission["UPDATE"] = "clinic_patient-update";
    ClinicPatientPermission["MERGE"] = "clinic_patient-merge";
})(ClinicPatientPermission || (exports.ClinicPatientPermission = ClinicPatientPermission = {}));
var ClinicPrescriptionPermission;
(function (ClinicPrescriptionPermission) {
    ClinicPrescriptionPermission["VIEW"] = "clinic_prescription-view";
    ClinicPrescriptionPermission["ISSUE"] = "clinic_prescription-issue";
    ClinicPrescriptionPermission["PRINT"] = "clinic_prescription-print";
    ClinicPrescriptionPermission["CANCEL"] = "clinic_prescription-cancel";
})(ClinicPrescriptionPermission || (exports.ClinicPrescriptionPermission = ClinicPrescriptionPermission = {}));
var ClinicAttachmentPermission;
(function (ClinicAttachmentPermission) {
    ClinicAttachmentPermission["VIEW"] = "clinic_attachment-view";
    ClinicAttachmentPermission["UPLOAD"] = "clinic_attachment-upload";
    ClinicAttachmentPermission["DELETE"] = "clinic_attachment-delete";
})(ClinicAttachmentPermission || (exports.ClinicAttachmentPermission = ClinicAttachmentPermission = {}));
var ClinicQueuePermission;
(function (ClinicQueuePermission) {
    ClinicQueuePermission["VIEW"] = "clinic_queue-view";
    ClinicQueuePermission["CALL"] = "clinic_queue-call";
    ClinicQueuePermission["MANAGE"] = "clinic_queue-manage";
})(ClinicQueuePermission || (exports.ClinicQueuePermission = ClinicQueuePermission = {}));
var ClinicAuditPermission;
(function (ClinicAuditPermission) {
    ClinicAuditPermission["VIEW"] = "clinic_audit-view";
})(ClinicAuditPermission || (exports.ClinicAuditPermission = ClinicAuditPermission = {}));
//# sourceMappingURL=clinic.js.map