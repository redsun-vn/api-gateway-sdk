"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVOICE_PAYMENT_STATUS = exports.INVOICE_TYPE = exports.INVOICE_STATE = void 0;
var INVOICE_STATE;
(function (INVOICE_STATE) {
    INVOICE_STATE["DRAFT"] = "draft";
    INVOICE_STATE["POSTED"] = "posted";
    INVOICE_STATE["CANCELLED"] = "cancelled";
})(INVOICE_STATE || (exports.INVOICE_STATE = INVOICE_STATE = {}));
var INVOICE_TYPE;
(function (INVOICE_TYPE) {
    INVOICE_TYPE["CUSTOMER"] = "out_invoice";
    INVOICE_TYPE["VENDOR"] = "in_invoice";
    INVOICE_TYPE["PURCHASE_RECEIPT"] = "in_receipt";
    INVOICE_TYPE["SALES_INVOICE"] = "out_receipt";
    INVOICE_TYPE["REFUND_INVOICE"] = "out_refund";
    INVOICE_TYPE["REFUND_RECEIPT"] = "in_refund";
})(INVOICE_TYPE || (exports.INVOICE_TYPE = INVOICE_TYPE = {}));
var INVOICE_PAYMENT_STATUS;
(function (INVOICE_PAYMENT_STATUS) {
    INVOICE_PAYMENT_STATUS["UNPAID"] = "unpaid";
    INVOICE_PAYMENT_STATUS["PARTIALLY_PAID"] = "partially_paid";
    INVOICE_PAYMENT_STATUS["PAID"] = "paid";
    INVOICE_PAYMENT_STATUS["UNCOLLECTED"] = "uncollected";
    INVOICE_PAYMENT_STATUS["VOID"] = "void";
})(INVOICE_PAYMENT_STATUS || (exports.INVOICE_PAYMENT_STATUS = INVOICE_PAYMENT_STATUS = {}));
//# sourceMappingURL=invoice.js.map