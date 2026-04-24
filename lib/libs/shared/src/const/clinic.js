"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLINIC_STATION_DEFAULTS = exports.CLINIC_ATTACHMENTS_FILTER_FIELDS = exports.CLINIC_ATTACHMENTS_SEARCH_FIELDS = exports.CLINIC_ATTACHMENTS_SORT_FIELDS = exports.CLINIC_AUDIT_LOGS_FILTER_FIELDS = exports.CLINIC_AUDIT_LOGS_SEARCH_FIELDS = exports.CLINIC_AUDIT_LOGS_SORT_FIELDS = exports.CLINIC_PATIENT_PROFILES_FILTER_FIELDS = exports.CLINIC_PATIENT_PROFILES_SEARCH_FIELDS = exports.CLINIC_PATIENT_PROFILES_SORT_FIELDS = exports.CLINIC_PRESCRIPTIONS_FILTER_FIELDS = exports.CLINIC_PRESCRIPTIONS_SEARCH_FIELDS = exports.CLINIC_PRESCRIPTIONS_SORT_FIELDS = exports.CLINIC_VISITS_FILTER_FIELDS = exports.CLINIC_VISITS_SEARCH_FIELDS = exports.CLINIC_VISITS_SORT_FIELDS = exports.CLINIC_PHI_FIELDS = exports.CLINIC_AUDIT_LOG_INDEX_PATTERN = exports.CLINIC_AUDIT_LOG_READ_ALIAS = exports.CLINIC_PATIENT_PROFILE_INDEX_NAME = exports.CLINIC_PRESCRIPTION_INDEX_NAME = exports.CLINIC_VISIT_INDEX_NAME = void 0;
exports.CLINIC_VISIT_INDEX_NAME = 'clinic_visits';
exports.CLINIC_PRESCRIPTION_INDEX_NAME = 'clinic_prescriptions';
exports.CLINIC_PATIENT_PROFILE_INDEX_NAME = 'clinic_patient_profiles';
exports.CLINIC_AUDIT_LOG_READ_ALIAS = 'clinic_audit_logs_read';
exports.CLINIC_AUDIT_LOG_INDEX_PATTERN = 'clinic_audit_logs_';
exports.CLINIC_PHI_FIELDS = [
    'diagnosis',
    'treatment_plan',
    'anamnesis',
    'chief_complaint',
    'patient_advice',
];
exports.CLINIC_VISITS_SORT_FIELDS = [
    'created_at',
    'updated_at',
    'signed_at',
    'visit_date',
];
exports.CLINIC_VISITS_SEARCH_FIELDS = [
    'patient_name_snapshot',
    'doctor_name_snapshot',
];
exports.CLINIC_VISITS_FILTER_FIELDS = [
    'id',
    'shop_id',
    'branch_id',
    'doctor_id',
    'patient_id',
    'reservation_id',
    'order_id',
    'parent_visit_id',
    'status',
    'industry_type',
    'has_prescription',
    'created_at',
    'signed_at',
];
exports.CLINIC_PRESCRIPTIONS_SORT_FIELDS = [
    'created_at',
    'updated_at',
    'issued_at',
    'printed_at',
];
exports.CLINIC_PRESCRIPTIONS_SEARCH_FIELDS = [
    'prescription_code',
    'patient_name_snapshot',
];
exports.CLINIC_PRESCRIPTIONS_FILTER_FIELDS = [
    'id',
    'shop_id',
    'branch_id',
    'visit_id',
    'doctor_id',
    'patient_id',
    'status',
    'prescription_code',
    'issued_at',
    'printed_at',
];
exports.CLINIC_PATIENT_PROFILES_SORT_FIELDS = [
    'created_at',
    'updated_at',
    'consent_signed_at',
];
exports.CLINIC_PATIENT_PROFILES_SEARCH_FIELDS = [
    'full_name',
    'phone',
];
exports.CLINIC_PATIENT_PROFILES_FILTER_FIELDS = [
    'id',
    'shop_id',
    'partner_id',
    'gender',
    'blood_type',
    'has_profile',
    'birth_date',
];
exports.CLINIC_AUDIT_LOGS_SORT_FIELDS = ['changed_at'];
exports.CLINIC_AUDIT_LOGS_SEARCH_FIELDS = [
    'changed_by_name',
    'reason',
];
exports.CLINIC_AUDIT_LOGS_FILTER_FIELDS = [
    'id',
    'shop_id',
    'branch_id',
    'entity_type',
    'entity_id',
    'action',
    'changed_by_id',
    'changed_at',
];
exports.CLINIC_ATTACHMENTS_SORT_FIELDS = ['uploaded_at'];
exports.CLINIC_ATTACHMENTS_SEARCH_FIELDS = ['metadata.file_name'];
exports.CLINIC_ATTACHMENTS_FILTER_FIELDS = [
    'id',
    'shop_id',
    'branch_id',
    'visit_id',
    'uploaded_by_id',
    'attachment_id',
    'type',
    'uploaded_at',
];
exports.CLINIC_STATION_DEFAULTS = {
    clinic: 'consultation',
    wellness: 'treatment_room',
};
//# sourceMappingURL=clinic.js.map