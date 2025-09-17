export declare enum RECEIPT_SOURCE_TYPE_ENUM {
    AUTOMATIC = "automatic",
    MANUAL = "manual"
}
export declare enum RECEIPT_SOURCE_ENUM {
    ADMIN = "admin",
    BO_SHOP = "bo_shop"
}
export declare enum RECEIPT_STATUS_ENUM {
    DRAFT = "draft",
    OPEN = "open",
    PENDING_PAYMENT = "pending_payment",
    PROCESSING = "processing",
    CONFIRMED = "confirmed",
    COMPLETED = "completed",
    PARTIALLY_REFUNDED = "partially_refunded",
    FULLY_REFUNDED = "fully_refunded",
    CANCELLED = "cancelled",
    EXPIRED = "expired",
    FAILED = "failed",
    SUSPENDED = "suspended"
}
export declare enum RECEIPT_LINE_ITEM_TYPE_ENUM {
    PACKAGE_ADDITION = "package_addition",
    APP_PLAN = "app_plan",
    STAFF_QUANTITY = "staff_quantity",
    BRANCH_QUANTITY = "branch_quantity",
    THEME = "theme",
    DOMAIN = "domain"
}
export declare enum RECEIPT_PRIORITY_ENUM {
    URGENT = "urgent",
    HIGH = "high",
    MEDIUM = "medium",
    LOW = "low"
}
export declare enum RECEIPT_PAYMENT_STATUS_ENUM {
    UNPAID = "unpaid",
    PARTIAL = "partial",
    PAID = "paid",
    OVERPAID = "overpaid",
    REFUNDED = "refunded"
}
export declare enum RECEIPT_TYPE_ENUM {
    SUBSCRIPTION = "subscription",
    RENEWAL = "renewal",
    UPGRADE = "upgrade",
    ADDON = "addon",
    REFUND = "refund",
    ADJUSTMENT = "adjustment",
    DIGITAL_PURCHASE = "digital_purchase"
}
export declare enum RECEIPT_PAYMENT_METHOD_ENUM {
    CREDIT_CARD = "credit_card",
    BANK_TRANSFER = "bank_transfer",
    E_WALLET = "e_wallet",
    CASH = "cash",
    CRYPTO = "crypto",
    VOUCHER = "voucher",
    CREDIT = "credit"
}
export declare enum RECEIPT_PROCESSING_STATUS_ENUM {
    QUEUE = "queue",
    PROCESSING = "processing",
    AWAITING_APPROVAL = "awaiting_approval",
    APPROVED = "approved",
    REJECTED = "rejected",
    COMPLETED = "completed"
}
export declare const RECEIPT_STATUS_WORKFLOW: {
    BASIC_FLOW: RECEIPT_STATUS_ENUM[];
    REFUND_FLOW: RECEIPT_STATUS_ENUM[];
    FINAL_STATES: RECEIPT_STATUS_ENUM[];
    PROCESSABLE_STATES: RECEIPT_STATUS_ENUM[];
};
export declare const RECEIPT_AUTO_TRANSITION_RULES: {
    AUTO_EXPIRE_DAYS: number;
    AUTO_PROCESS_ON_PAYMENT: boolean;
    AUTO_COMPLETE_ON_FULL_PAYMENT: boolean;
};
