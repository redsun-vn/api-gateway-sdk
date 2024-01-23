"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionErrorCode = exports.TransactionKind = exports.PaymentStatus = exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["AWAITING_RESPONSE"] = "awaiting_reponse";
    TransactionStatus["ERROR"] = "error";
    TransactionStatus["FAILURE"] = "failure";
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["SUCCESS"] = "success";
    TransactionStatus["UNKNOWN"] = "unknown";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["NEW"] = "new";
    PaymentStatus["PROCESSING"] = "processing";
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["CANCELED"] = "canceled";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var TransactionKind;
(function (TransactionKind) {
    TransactionKind["AUTHORIZATION"] = "authorization";
    TransactionKind["CAPTURE"] = "capture";
    TransactionKind["CHANGE"] = "change";
    TransactionKind["EMV_AUTHORIZATION"] = "emv_authorization";
    TransactionKind["REFUND"] = "refund";
    TransactionKind["SALE"] = "sale";
    TransactionKind["SUGGESTED_REFUND"] = "suggested_refund";
    TransactionKind["VOID"] = "void";
})(TransactionKind || (exports.TransactionKind = TransactionKind = {}));
var TransactionErrorCode;
(function (TransactionErrorCode) {
    TransactionErrorCode["INVALID_PAYMENT_METHOD"] = "invalid_payment_method";
    TransactionErrorCode["CONFIG_ERROR"] = "config_error";
    TransactionErrorCode["GENERIC_ERROR"] = "generic_error";
    TransactionErrorCode["PAYMENT_METHOD_UNAVAILABLE"] = "payment_method_unavailable";
    TransactionErrorCode["PROCESSING_ERROR"] = "processing_error";
    TransactionErrorCode["UNSUPPORTED_FEATURE"] = "unsupported_feature";
    TransactionErrorCode["EXPIRED_CARD"] = "expired_card";
    TransactionErrorCode["CARD_DECLINED"] = "card_declined";
    TransactionErrorCode["INCORRECT_ADDRESS"] = "incorrect_address";
    TransactionErrorCode["INCORRECT_CVC"] = "incorrect_cvc";
    TransactionErrorCode["INCORRECT_NUMBER"] = "incorrect_number";
    TransactionErrorCode["INCORRECT_PIN"] = "incorrect_pin";
    TransactionErrorCode["INCORRECT_ZIP"] = "incorrect_zip";
    TransactionErrorCode["INVALID_AMOUNT"] = "invalid_amount";
    TransactionErrorCode["INVALID_COUNTRY"] = "invalid_country";
    TransactionErrorCode["INVALID_CVC"] = "invalid_cvc";
    TransactionErrorCode["INVALID_EXPIRY_DATE"] = "invalid_expiry_date";
    TransactionErrorCode["INVALID_NUMBER"] = "invalid_number";
})(TransactionErrorCode || (exports.TransactionErrorCode = TransactionErrorCode = {}));
//# sourceMappingURL=payment.state.js.map