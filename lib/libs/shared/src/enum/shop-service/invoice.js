"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVOICE_TYPE_ENUM = exports.INVOICE_STATUS_ENUM = void 0;
var INVOICE_STATUS_ENUM;
(function (INVOICE_STATUS_ENUM) {
    INVOICE_STATUS_ENUM["DRAFT"] = "draft";
    INVOICE_STATUS_ENUM["PENDING"] = "pending";
    INVOICE_STATUS_ENUM["APPROVED"] = "approved";
    INVOICE_STATUS_ENUM["SENT"] = "sent";
    INVOICE_STATUS_ENUM["PAID"] = "paid";
    INVOICE_STATUS_ENUM["OVERDUE"] = "overdue";
    INVOICE_STATUS_ENUM["CANCELLED"] = "cancelled";
})(INVOICE_STATUS_ENUM || (exports.INVOICE_STATUS_ENUM = INVOICE_STATUS_ENUM = {}));
var INVOICE_TYPE_ENUM;
(function (INVOICE_TYPE_ENUM) {
    INVOICE_TYPE_ENUM["STANDARD"] = "standard";
    INVOICE_TYPE_ENUM["PROFORMA"] = "proforma";
    INVOICE_TYPE_ENUM["CREDIT_NOTE"] = "credit_note";
    INVOICE_TYPE_ENUM["DEBIT_NOTE"] = "debit_note";
})(INVOICE_TYPE_ENUM || (exports.INVOICE_TYPE_ENUM = INVOICE_TYPE_ENUM = {}));
//# sourceMappingURL=invoice.js.map