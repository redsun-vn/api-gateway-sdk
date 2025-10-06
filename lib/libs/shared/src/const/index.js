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
exports.KEYCLOAK_MULTI_CLIENT_SECRET = exports.DOMAIN_HEADER_KEY = exports.MOMENT_VN_TIMEZONE = exports.PAGINATE_LIMIT_NUMBER = exports.SHIPPING_PROVIDER_CONFIG_KEY = exports.UNIT_TIME = void 0;
__exportStar(require("./errors"), exports);
__exportStar(require("./file.status"), exports);
__exportStar(require("./multer"), exports);
__exportStar(require("./filter.rule"), exports);
__exportStar(require("./product.state"), exports);
__exportStar(require("./elastic-index"), exports);
__exportStar(require("./order"), exports);
__exportStar(require("./report"), exports);
__exportStar(require("./partner"), exports);
__exportStar(require("./hr"), exports);
__exportStar(require("./table"), exports);
__exportStar(require("./regex"), exports);
__exportStar(require("./team"), exports);
__exportStar(require("./wallet"), exports);
exports.UNIT_TIME = ['day', 'week', 'month', 'quarter', 'year'];
exports.SHIPPING_PROVIDER_CONFIG_KEY = {
    GHN: ['shopId', 'token'],
    GHTK: ['token'],
};
exports.PAGINATE_LIMIT_NUMBER = 200;
exports.MOMENT_VN_TIMEZONE = 'Asia/Ho_Chi_Minh';
exports.DOMAIN_HEADER_KEY = 'sipos-x-domain';
exports.KEYCLOAK_MULTI_CLIENT_SECRET = 'webbuilder-client-secret';
//# sourceMappingURL=index.js.map