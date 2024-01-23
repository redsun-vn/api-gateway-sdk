export declare enum TransactionStatus {
    AWAITING_RESPONSE = "awaiting_reponse",
    ERROR = "error",
    FAILURE = "failure",
    PENDING = "pending",
    SUCCESS = "success",
    UNKNOWN = "unknown"
}
export declare enum PaymentStatus {
    NEW = "new",
    PROCESSING = "processing",
    PENDING = "pending",
    COMPLETED = "completed",
    CANCELED = "canceled"
}
export declare enum TransactionKind {
    AUTHORIZATION = "authorization",
    CAPTURE = "capture",
    CHANGE = "change",
    EMV_AUTHORIZATION = "emv_authorization",
    REFUND = "refund",
    SALE = "sale",
    SUGGESTED_REFUND = "suggested_refund",
    VOID = "void"
}
export declare enum TransactionErrorCode {
    INVALID_PAYMENT_METHOD = "invalid_payment_method",
    CONFIG_ERROR = "config_error",
    GENERIC_ERROR = "generic_error",
    PAYMENT_METHOD_UNAVAILABLE = "payment_method_unavailable",
    PROCESSING_ERROR = "processing_error",
    UNSUPPORTED_FEATURE = "unsupported_feature",
    EXPIRED_CARD = "expired_card",
    CARD_DECLINED = "card_declined",
    INCORRECT_ADDRESS = "incorrect_address",
    INCORRECT_CVC = "incorrect_cvc",
    INCORRECT_NUMBER = "incorrect_number",
    INCORRECT_PIN = "incorrect_pin",
    INCORRECT_ZIP = "incorrect_zip",
    INVALID_AMOUNT = "invalid_amount",
    INVALID_COUNTRY = "invalid_country",
    INVALID_CVC = "invalid_cvc",
    INVALID_EXPIRY_DATE = "invalid_expiry_date",
    INVALID_NUMBER = "invalid_number"
}
