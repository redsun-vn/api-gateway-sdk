"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFeeType = exports.OrderTransactionKind = exports.OrderTransactionErrorCode = exports.OrderCancelReason = exports.OrderProcessingStatus = exports.OrderFulfillmentStatus = exports.OrderFinancialStatus = exports.CODStatus = exports.KitchenProcessingStatus = exports.OrderTransactionStatus = exports.DrafOrderStatus = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["OPEN"] = "open";
    OrderStatus["ARCHIVED"] = "archived";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELED"] = "canceled";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var DrafOrderStatus;
(function (DrafOrderStatus) {
    DrafOrderStatus["OPEN"] = "open";
    DrafOrderStatus["VERIFIED"] = "verified";
    DrafOrderStatus["CONFIRMED"] = "confirmed";
    DrafOrderStatus["COMPLETED"] = "completed";
    DrafOrderStatus["CANCELED"] = "canceled";
})(DrafOrderStatus || (exports.DrafOrderStatus = DrafOrderStatus = {}));
var OrderTransactionStatus;
(function (OrderTransactionStatus) {
    OrderTransactionStatus["AWAITING_RESPONSE"] = "awaiting_reponse";
    OrderTransactionStatus["ERROR"] = "error";
    OrderTransactionStatus["FAILURE"] = "failure";
    OrderTransactionStatus["PENDING"] = "pending";
    OrderTransactionStatus["SUCCESS"] = "success";
    OrderTransactionStatus["UNKNOWN"] = "unknown";
})(OrderTransactionStatus || (exports.OrderTransactionStatus = OrderTransactionStatus = {}));
var KitchenProcessingStatus;
(function (KitchenProcessingStatus) {
    KitchenProcessingStatus["NONE"] = "none";
    KitchenProcessingStatus["NEW"] = "new";
    KitchenProcessingStatus["PENDING"] = "pending";
    KitchenProcessingStatus["COOK"] = "cook";
    KitchenProcessingStatus["COMPLETED"] = "completed";
})(KitchenProcessingStatus || (exports.KitchenProcessingStatus = KitchenProcessingStatus = {}));
var CODStatus;
(function (CODStatus) {
    CODStatus["NONE"] = "none";
    CODStatus["PAID"] = "paid";
    CODStatus["NOT_PAID"] = "not_paid";
})(CODStatus || (exports.CODStatus = CODStatus = {}));
var OrderFinancialStatus;
(function (OrderFinancialStatus) {
    OrderFinancialStatus["PENDING"] = "pending";
    OrderFinancialStatus["PAID"] = "paid";
    OrderFinancialStatus["PARTIALLY_PAID"] = "partially_paid";
    OrderFinancialStatus["PARTIALLY_REFUNDED"] = "partially_refunded";
    OrderFinancialStatus["REFUNDED"] = "refunded";
    OrderFinancialStatus["NOT_PAID"] = "not_paid";
    OrderFinancialStatus["CANCELED"] = "canceled";
})(OrderFinancialStatus || (exports.OrderFinancialStatus = OrderFinancialStatus = {}));
var OrderFulfillmentStatus;
(function (OrderFulfillmentStatus) {
    OrderFulfillmentStatus["OPEN"] = "open";
    OrderFulfillmentStatus["SCHEDULED"] = "scheduled";
    OrderFulfillmentStatus["IN_PROGRESS"] = "in_progress";
    OrderFulfillmentStatus["FULFILLED"] = "fulfilled";
    OrderFulfillmentStatus["CANCEL"] = "cancel";
    OrderFulfillmentStatus["RESTOCKED"] = "restocked";
    OrderFulfillmentStatus["PENDING"] = "pending";
    OrderFulfillmentStatus["DONT_MEET_CUSTOMER"] = "dont_meet_customer";
    OrderFulfillmentStatus["WAITING_RESTOCK"] = "waitting_restock";
    OrderFulfillmentStatus["UNFULFILLED"] = "unfulfilled";
})(OrderFulfillmentStatus || (exports.OrderFulfillmentStatus = OrderFulfillmentStatus = {}));
var OrderProcessingStatus;
(function (OrderProcessingStatus) {
    OrderProcessingStatus["VERIFIED"] = "verified";
    OrderProcessingStatus["BRANCH_TRANSFER"] = "branch_transfer";
    OrderProcessingStatus["IN_STOCK"] = "in_stock";
    OrderProcessingStatus["OUT_STOCK"] = "out_stock";
    OrderProcessingStatus["SHIPPED"] = "shipped";
    OrderProcessingStatus["DELIVERY_PROVIDER"] = "delivery_provider";
    OrderProcessingStatus["SELF_DELIVERY"] = "self_delivery";
    OrderProcessingStatus["COMPLETED"] = "completed";
    OrderProcessingStatus["CANCELED"] = "canceled";
})(OrderProcessingStatus || (exports.OrderProcessingStatus = OrderProcessingStatus = {}));
var OrderCancelReason;
(function (OrderCancelReason) {
    OrderCancelReason["CUSTOMER"] = "customer";
    OrderCancelReason["DECLINED"] = "declined";
    OrderCancelReason["FRAUD"] = "fraud";
    OrderCancelReason["INVENTORY"] = "inventory";
    OrderCancelReason["ORTHER"] = "orther";
})(OrderCancelReason || (exports.OrderCancelReason = OrderCancelReason = {}));
var OrderTransactionErrorCode;
(function (OrderTransactionErrorCode) {
    OrderTransactionErrorCode["INVALID_PAYMENT_METHOD"] = "invalid_payment_method";
    OrderTransactionErrorCode["CONFIG_ERROR"] = "config_error";
    OrderTransactionErrorCode["GENERIC_ERROR"] = "generic_error";
    OrderTransactionErrorCode["PAYMENT_METHOD_UNAVAILABLE"] = "payment_method_unavailable";
    OrderTransactionErrorCode["PROCESSING_ERROR"] = "processing_error";
    OrderTransactionErrorCode["UNSUPPORTED_FEATURE"] = "unsupported_feature";
    OrderTransactionErrorCode["EXPIRED_CARD"] = "expired_card";
    OrderTransactionErrorCode["CARD_DECLINED"] = "card_declined";
    OrderTransactionErrorCode["INCORRECT_ADDRESS"] = "incorrect_address";
    OrderTransactionErrorCode["INCORRECT_CVC"] = "incorrect_cvc";
    OrderTransactionErrorCode["INCORRECT_NUMBER"] = "incorrect_number";
    OrderTransactionErrorCode["INCORRECT_PIN"] = "incorrect_pin";
    OrderTransactionErrorCode["INCORRECT_ZIP"] = "incorrect_zip";
    OrderTransactionErrorCode["INVALID_AMOUNT"] = "invalid_amount";
    OrderTransactionErrorCode["INVALID_COUNTRY"] = "invalid_country";
    OrderTransactionErrorCode["INVALID_CVC"] = "invalid_cvc";
    OrderTransactionErrorCode["INVALID_EXPIRY_DATE"] = "invalid_expiry_date";
    OrderTransactionErrorCode["INVALID_NUMBER"] = "invalid_number";
})(OrderTransactionErrorCode || (exports.OrderTransactionErrorCode = OrderTransactionErrorCode = {}));
var OrderTransactionKind;
(function (OrderTransactionKind) {
    OrderTransactionKind["AUTHORIZATION"] = "authorization";
    OrderTransactionKind["CAPTURE"] = "capture";
    OrderTransactionKind["CHANGE"] = "change";
    OrderTransactionKind["EMV_AUTHORIZATION"] = "emv_authorization";
    OrderTransactionKind["REFUND"] = "refund";
    OrderTransactionKind["SALE"] = "sale";
    OrderTransactionKind["SUGGESTED_REFUND"] = "suggested_refund";
    OrderTransactionKind["VOID"] = "void";
})(OrderTransactionKind || (exports.OrderTransactionKind = OrderTransactionKind = {}));
var TransactionFeeType;
(function (TransactionFeeType) {
    TransactionFeeType["BONUS"] = "bonus";
    TransactionFeeType["VERIFY"] = "verify";
    TransactionFeeType["CHANGE"] = "change";
})(TransactionFeeType || (exports.TransactionFeeType = TransactionFeeType = {}));
//# sourceMappingURL=order.state.js.map