export declare enum CrmActivityType {
    CALL = "call",
    EMAIL = "email",
    MEETING = "meeting",
    NOTE = "note",
    SMS = "sms",
    WHATSAPP = "whatsapp",
    WINBACK = "winback",
    STAGE_CHANGE = "stage_change"
}
export declare enum CrmActivityRelatedToType {
    LEAD = "lead",
    OPPORTUNITY = "opportunity",
    PARTNER = "partner"
}
export declare enum CrmActivityDirection {
    INBOUND = "inbound",
    OUTBOUND = "outbound"
}
export declare enum CrmActivityOutcome {
    CONNECTED = "connected",
    NO_ANSWER = "no_answer",
    VOICEMAIL = "voicemail",
    BUSY = "busy",
    WRONG_NUMBER = "wrong_number",
    RESCHEDULED = "rescheduled",
    NO_SHOW = "no_show",
    CANCELLED = "cancelled"
}
export declare enum CrmActivitySource {
    MANUAL = "manual",
    SYSTEM = "system",
    WORKFLOW = "workflow",
    INTEGRATION = "integration"
}
