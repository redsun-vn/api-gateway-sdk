export declare enum FULFILLMENT_ORDER_STATUS {
    OPEN = "open",
    IN_PROGRESS = "in_progress",
    SCHEDULED = "scheduled",
    CANCELLED = "cancelled",
    ON_HOLD = "on_hold",
    INCOMPLETE = "incomplete",
    CLOSED = "closed"
}
export declare enum FULFILLMENT_REQUEST_STATUS {
    UNSUBMITTED = "unsubmitted",
    SUBMITTED = "submitted",
    ACCEPTED = "accepted",
    REJECTED = "rejected",
    CANCELLATION_REQUESTED = "cancellation_requested",
    CANCELLATION_ACCEPTED = "cancellation_accepted",
    CANCELLATION_REJECTED = "cancellation_rejected",
    CLOSED = "closed"
}
export declare enum FULFILLMENT_SHIPPING_STATUS {
    DRAFT = "draft",
    WAITING = "waiting",
    PICKED = "picked",
    DELIVERING = "delivering",
    DELIVERED = "delivered",
    SUCCESS = "success",
    CANCEL = "cancel",
    FAIL = "fail",
    ERROR = "error",
    WAITING_RETURN = "waiting_return",
    RETURNING = "returning",
    RETURNED = "returned"
}
export declare enum FULFILLMENT_STATUS {
    PENDING = "pending",
    OPEN = "open",
    PROGRESSING = "progressing",
    SUCCESS = "success",
    CANCELLED = "cancelled",
    ERROR = "error",
    FAILURE = "failure",
    CLOSED = "closed"
}
export declare enum PAYMENT_TARGET {
    SENDER = "sender",
    RECEIVER = "receiver"
}
export declare enum RECEIVE_METHOD {
    ALLOW_CHECK = "allow_check",
    NONE_CHECK = "none_check"
}
export declare enum SHIPPING_PROVIDER_ENUM {
    GHN = "ghn"
}
