export declare enum ClinicVisitPermission {
    VIEW = "clinic_visit-view",
    CREATE = "clinic_visit-create",
    READ_PHI = "clinic_visit-read_phi",
    UPDATE_VITALS = "clinic_visit-update_vitals",
    UPDATE_DX = "clinic_visit-update_dx",
    SIGN_OFF = "clinic_visit-sign_off",
    AMEND = "clinic_visit-amend",
    AMEND_ANY = "clinic_visit-amend_any",
    DELETE = "clinic_visit-delete"
}
export declare enum ClinicPatientPermission {
    VIEW = "clinic_patient-view",
    READ_PHI = "clinic_patient-read_phi",
    CREATE = "clinic_patient-create",
    UPDATE = "clinic_patient-update",
    MERGE = "clinic_patient-merge"
}
export declare enum ClinicPrescriptionPermission {
    VIEW = "clinic_prescription-view",
    ISSUE = "clinic_prescription-issue",
    PRINT = "clinic_prescription-print",
    CANCEL = "clinic_prescription-cancel"
}
export declare enum ClinicAttachmentPermission {
    VIEW = "clinic_attachment-view",
    UPLOAD = "clinic_attachment-upload",
    DELETE = "clinic_attachment-delete"
}
export declare enum ClinicQueuePermission {
    VIEW = "clinic_queue-view",
    CALL = "clinic_queue-call",
    MANAGE = "clinic_queue-manage"
}
export declare enum ClinicAuditPermission {
    VIEW = "clinic_audit-view"
}
