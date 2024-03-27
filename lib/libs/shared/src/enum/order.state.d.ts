export declare enum OrderStatus {
    OPEN = "open",
    ARCHIVED = "archived",
    COMPLETED = "completed",
    CANCELED = "canceled"
}
export declare enum OrderCombiningPromotionType {
    ORDER_AMOUNT = "order_amount",
    LINE_ITEM_AMOUNT = "line_item_amount",
    SERVICE_AMOUNT = "service_amount",
    FREE_SHIPPING = "free_shipping",
    BUY_X_GET_Y = "buy_x_get_y"
}
export declare enum CombiningPromotionStatus {
    OPEN = "open",
    COMPLETED = "completed",
    CANCELED = "canceled"
}
export declare enum AdditionalFeeType {
    SHOP_SHIPPING = "shop_shipping",
    EXTERNAL_SHIPPING = "external_shipping",
    SERVICE_FEE = "service_fee",
    INCIDENTAL_FEE = "incidental_fee",
    FREE_SHIPPING = "free_shipping"
}
export declare enum DrafOrderStatus {
    OPEN = "open",
    VERIFIED = "verified",
    CONFIRMED = "confirmed",
    COMPLETED = "completed",
    CANCELED = "canceled"
}
export declare enum OrderTransactionStatus {
    AWAITING_RESPONSE = "awaiting_reponse",
    ERROR = "error",
    FAILURE = "failure",
    PENDING = "pending",
    SUCCESS = "success",
    UNKNOWN = "unknown"
}
export declare enum KitchenProcessingStatus {
    NONE = "none",
    NEW = "new",
    PENDING = "pending",
    COOK = "cook",
    COMPLETED = "completed"
}
export declare enum CODStatus {
    NONE = "none",
    PAID = "paid",
    NOT_PAID = "not_paid"
}
export declare enum OrderFinancialStatus {
    PENDING = "pending",
    PAID = "paid",
    PARTIALLY_PAID = "partially_paid",
    PARTIALLY_REFUNDED = "partially_refunded",
    REFUNDED = "refunded",
    NOT_PAID = "not_paid",
    CANCELED = "canceled"
}
export declare enum OrderFulfillmentStatus {
    PENDING = "pending",
    OPEN = "open",
    PROGRESSING = "progressing",
    SUCCESS = "success",
    CANCELLED = "cancelled",
    ERROR = "error",
    FAILURE = "failure",
    CLOSED = "closed"
}
export declare enum OrderProcessingStatus {
    VERIFIED = "verified",
    BRANCH_TRANSFER = "branch_transfer",
    IN_STOCK = "in_stock",
    OUT_STOCK = "out_stock",
    SHIPPED = "shipped",
    DELIVERY_PROVIDER = "delivery_provider",
    SELF_DELIVERY = "self_delivery",
    COMPLETED = "completed",
    CANCELED = "canceled"
}
export declare enum OrderCancelReason {
    CUSTOMER = "customer",
    DECLINED = "declined",
    FRAUD = "fraud",
    INVENTORY = "inventory",
    ORTHER = "orther"
}
export declare enum OrderTransactionErrorCode {
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
export declare enum OrderTransactionKind {
    AUTHORIZATION = "authorization",
    CAPTURE = "capture",
    CHANGE = "change",
    EMV_AUTHORIZATION = "emv_authorization",
    REFUND = "refund",
    SALE = "sale",
    SUGGESTED_REFUND = "suggested_refund",
    VOID = "void"
}
export declare enum TransactionFeeType {
    BONUS = "bonus",
    VERIFY = "verify",
    CHANGE = "change"
}
