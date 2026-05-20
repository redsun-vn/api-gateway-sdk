"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDeposit = void 0;
var IDeposit;
(function (IDeposit) {
    let DepositKind;
    (function (DepositKind) {
        DepositKind["BOOKING"] = "booking";
        DepositKind["SECURITY"] = "security";
        DepositKind["PREPAYMENT"] = "prepayment";
    })(DepositKind = IDeposit.DepositKind || (IDeposit.DepositKind = {}));
    let DepositStatus;
    (function (DepositStatus) {
        DepositStatus["PENDING"] = "pending";
        DepositStatus["PARTIALLY_RECEIVED"] = "partially_received";
        DepositStatus["RECEIVED"] = "received";
        DepositStatus["IN_USE"] = "in_use";
        DepositStatus["CONSUMED"] = "consumed";
        DepositStatus["REFUNDED"] = "refunded";
        DepositStatus["FORFEITED"] = "forfeited";
        DepositStatus["EXPIRED"] = "expired";
        DepositStatus["CANCELLED"] = "cancelled";
    })(DepositStatus = IDeposit.DepositStatus || (IDeposit.DepositStatus = {}));
    let DepositPaymentMethod;
    (function (DepositPaymentMethod) {
        DepositPaymentMethod["CASH"] = "cash";
        DepositPaymentMethod["BANK_TRANSFER"] = "bank_transfer";
        DepositPaymentMethod["VNPAY"] = "vnpay";
        DepositPaymentMethod["MOMO"] = "momo";
        DepositPaymentMethod["ZALOPAY"] = "zalopay";
        DepositPaymentMethod["CARD"] = "card";
        DepositPaymentMethod["CHANNEL_COLLECTED"] = "channel_collected";
    })(DepositPaymentMethod = IDeposit.DepositPaymentMethod || (IDeposit.DepositPaymentMethod = {}));
})(IDeposit || (exports.IDeposit = IDeposit = {}));
//# sourceMappingURL=ideposit.js.map