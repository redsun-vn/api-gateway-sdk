"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPosConfig = void 0;
var IPosConfig;
(function (IPosConfig) {
    let POSTaxDisplay;
    (function (POSTaxDisplay) {
        POSTaxDisplay["total"] = "total";
        POSTaxDisplay["subtotal"] = "subtotal";
    })(POSTaxDisplay = IPosConfig.POSTaxDisplay || (IPosConfig.POSTaxDisplay = {}));
    let POSMethodOfOperation;
    (function (POSMethodOfOperation) {
        POSMethodOfOperation["PAIDFIRST"] = "paid_first";
        POSMethodOfOperation["PREPARATIONFIRST"] = "preparation_first";
    })(POSMethodOfOperation = IPosConfig.POSMethodOfOperation || (IPosConfig.POSMethodOfOperation = {}));
})(IPosConfig || (exports.IPosConfig = IPosConfig = {}));
//# sourceMappingURL=ipos-config.js.map