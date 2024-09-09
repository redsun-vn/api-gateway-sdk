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
exports.PAGINATE_LIMIT_NUMBER = exports.SHIPPING_PROVIDER_CONFIG_KEY = exports.UNIT_TIME = void 0;
__exportStar(require("./errors"), exports);
__exportStar(require("./file.status"), exports);
__exportStar(require("./multer"), exports);
__exportStar(require("./filter.rule"), exports);
__exportStar(require("./product.state"), exports);
__exportStar(require("./elastic-index"), exports);
__exportStar(require("./order"), exports);
exports.UNIT_TIME = ['day', 'week', 'month', 'quarter', 'year'];
exports.SHIPPING_PROVIDER_CONFIG_KEY = {
    GHN: ['shopId', 'token'],
    GHTK: ['token'],
};
exports.PAGINATE_LIMIT_NUMBER = 200;
//# sourceMappingURL=index.js.map