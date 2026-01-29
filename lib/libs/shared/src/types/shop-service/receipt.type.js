"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReceipt = void 0;
var IReceipt;
(function (IReceipt) {
    let REFUND_REASON_ENUM;
    (function (REFUND_REASON_ENUM) {
        REFUND_REASON_ENUM["CUSTOMER_REQUEST"] = "customer_request";
        REFUND_REASON_ENUM["SERVICE_ISSUE"] = "service_issue";
        REFUND_REASON_ENUM["DUPLICATE_PAYMENT"] = "duplicate_payment";
        REFUND_REASON_ENUM["WRONG_PURCHASE"] = "wrong_purchase";
        REFUND_REASON_ENUM["FEATURE_NOT_WORKING"] = "feature_not_working";
        REFUND_REASON_ENUM["OTHER"] = "other";
    })(REFUND_REASON_ENUM = IReceipt.REFUND_REASON_ENUM || (IReceipt.REFUND_REASON_ENUM = {}));
    let REFUND_STATUS_ENUM;
    (function (REFUND_STATUS_ENUM) {
        REFUND_STATUS_ENUM["PENDING"] = "pending";
        REFUND_STATUS_ENUM["APPROVED"] = "approved";
        REFUND_STATUS_ENUM["REJECTED"] = "rejected";
        REFUND_STATUS_ENUM["PROCESSING"] = "processing";
        REFUND_STATUS_ENUM["COMPLETED"] = "completed";
        REFUND_STATUS_ENUM["FAILED"] = "failed";
    })(REFUND_STATUS_ENUM = IReceipt.REFUND_STATUS_ENUM || (IReceipt.REFUND_STATUS_ENUM = {}));
})(IReceipt || (exports.IReceipt = IReceipt = {}));
//# sourceMappingURL=receipt.type.js.map