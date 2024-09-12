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
exports.POINT_TRANSACTION_TYPE_ENUM = void 0;
__exportStar(require("./loyalty-program"), exports);
__exportStar(require("./loyalty-rule"), exports);
__exportStar(require("./loyalty-reward"), exports);
var POINT_TRANSACTION_TYPE_ENUM;
(function (POINT_TRANSACTION_TYPE_ENUM) {
    POINT_TRANSACTION_TYPE_ENUM["REDEEM"] = "REDEEM";
    POINT_TRANSACTION_TYPE_ENUM["EARN"] = "EARN";
})(POINT_TRANSACTION_TYPE_ENUM || (exports.POINT_TRANSACTION_TYPE_ENUM = POINT_TRANSACTION_TYPE_ENUM = {}));
//# sourceMappingURL=index.js.map