"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_TERM_LINE_DELAY_TYPE = exports.PAYMENT_TERM_LINE_VALUE_TYPE = exports.FOLLOW_UP_TYPE = exports.DEBT_SOURCE = exports.DEBT_PAYMENT_STATUS = exports.DEBT_TYPE = exports.DEBT_STATUS = void 0;
var DEBT_STATUS;
(function (DEBT_STATUS) {
    DEBT_STATUS["PENDING"] = "pending";
    DEBT_STATUS["PAID"] = "paid";
    DEBT_STATUS["PARTIAL_PAID"] = "partial_paid";
    DEBT_STATUS["OVERDUE"] = "overdue";
})(DEBT_STATUS || (exports.DEBT_STATUS = DEBT_STATUS = {}));
var DEBT_TYPE;
(function (DEBT_TYPE) {
    DEBT_TYPE["RECEIVABLE"] = "receivable";
    DEBT_TYPE["PAYABLE"] = "payable";
})(DEBT_TYPE || (exports.DEBT_TYPE = DEBT_TYPE = {}));
var DEBT_PAYMENT_STATUS;
(function (DEBT_PAYMENT_STATUS) {
    DEBT_PAYMENT_STATUS["UNPAID"] = "unpaid";
    DEBT_PAYMENT_STATUS["PAID"] = "paid";
    DEBT_PAYMENT_STATUS["PARTIAL_PAID"] = "partial_paid";
})(DEBT_PAYMENT_STATUS || (exports.DEBT_PAYMENT_STATUS = DEBT_PAYMENT_STATUS = {}));
var DEBT_SOURCE;
(function (DEBT_SOURCE) {
    DEBT_SOURCE["ORDER"] = "order";
    DEBT_SOURCE["INVOICE"] = "invoice";
    DEBT_SOURCE["PICKING"] = "picking";
    DEBT_SOURCE["OTHER"] = "other";
})(DEBT_SOURCE || (exports.DEBT_SOURCE = DEBT_SOURCE = {}));
var FOLLOW_UP_TYPE;
(function (FOLLOW_UP_TYPE) {
    FOLLOW_UP_TYPE["MANUAL"] = "manual";
    FOLLOW_UP_TYPE["EMAIL"] = "email";
    FOLLOW_UP_TYPE["POST"] = "post";
    FOLLOW_UP_TYPE["SMS"] = "sms";
})(FOLLOW_UP_TYPE || (exports.FOLLOW_UP_TYPE = FOLLOW_UP_TYPE = {}));
var PAYMENT_TERM_LINE_VALUE_TYPE;
(function (PAYMENT_TERM_LINE_VALUE_TYPE) {
    PAYMENT_TERM_LINE_VALUE_TYPE["PERCENTAGE"] = "percentage";
    PAYMENT_TERM_LINE_VALUE_TYPE["FIXED"] = "fixed";
})(PAYMENT_TERM_LINE_VALUE_TYPE || (exports.PAYMENT_TERM_LINE_VALUE_TYPE = PAYMENT_TERM_LINE_VALUE_TYPE = {}));
var PAYMENT_TERM_LINE_DELAY_TYPE;
(function (PAYMENT_TERM_LINE_DELAY_TYPE) {
    PAYMENT_TERM_LINE_DELAY_TYPE["DAYS_AFTER"] = "days_after";
    PAYMENT_TERM_LINE_DELAY_TYPE["DAYS_AFTER_END_OF_MONTH"] = "days_after_end_of_month";
    PAYMENT_TERM_LINE_DELAY_TYPE["DAYS_AFTER_END_OF_NEXT_MONTH"] = "days_after_end_of_next_month";
})(PAYMENT_TERM_LINE_DELAY_TYPE || (exports.PAYMENT_TERM_LINE_DELAY_TYPE = PAYMENT_TERM_LINE_DELAY_TYPE = {}));
//# sourceMappingURL=debt.js.map