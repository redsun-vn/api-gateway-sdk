"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_CARD_STATUS = exports.CARD_TYPE = void 0;
__exportStar(require("./debt"), exports);
__exportStar(require("./invoice"), exports);
var CARD_TYPE;
(function (CARD_TYPE) {
    CARD_TYPE["PAYMENT"] = "payment";
    CARD_TYPE["RECEIPT"] = "receipt";
})(CARD_TYPE || (exports.CARD_TYPE = CARD_TYPE = {}));
var PAYMENT_CARD_STATUS;
(function (PAYMENT_CARD_STATUS) {
    PAYMENT_CARD_STATUS["UNPAID"] = "unpaid";
    PAYMENT_CARD_STATUS["PAID"] = "paid";
})(PAYMENT_CARD_STATUS || (exports.PAYMENT_CARD_STATUS = PAYMENT_CARD_STATUS = {}));
//# sourceMappingURL=index.js.map