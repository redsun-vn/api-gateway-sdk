export declare enum DEBT_STATUS {
    PENDING = "pending",
    PAID = "paid",
    PARTIAL_PAID = "partial_paid",
    OVERDUE = "overdue"
}
export declare enum DEBT_TYPE {
    RECEIVABLE = "receivable",
    PAYABLE = "payable"
}
export declare enum DEBT_PAYMENT_STATUS {
    UNPAID = "unpaid",
    PAID = "paid",
    PARTIAL_PAID = "partial_paid"
}
export declare enum DEBT_SOURCE {
    ORDER = "order",
    INVOICE = "invoice",
    PICKING = "picking",
    OTHER = "other"
}
export declare enum FOLLOW_UP_TYPE {
    MANUAL = "manual",
    EMAIL = "email",
    POST = "post",
    SMS = "sms"
}
export declare enum PAYMENT_TERM_LINE_VALUE_TYPE {
    PERCENTAGE = "percentage",
    FIXED = "fixed"
}
export declare enum PAYMENT_TERM_LINE_DELAY_TYPE {
    DAYS_AFTER = "days_after",
    DAYS_AFTER_END_OF_MONTH = "days_after_end_of_month",
    DAYS_AFTER_END_OF_NEXT_MONTH = "days_after_end_of_next_month"
}
