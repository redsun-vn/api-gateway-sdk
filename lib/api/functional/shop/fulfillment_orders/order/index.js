"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByOrderCode = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getByOrderCode(connection, orderId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getByOrderCode.METADATA,
        template: getByOrderCode.METADATA.path,
        path: getByOrderCode.path(orderId),
    });
}
exports.getByOrderCode = getByOrderCode;
(function (getByOrderCode) {
    getByOrderCode.METADATA = {
        method: "GET",
        path: "/shop/fulfillment-orders/order/:orderId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    getByOrderCode.path = (orderId) => `/shop/fulfillment-orders/order/${encodeURIComponent(orderId ?? "null")}`;
})(getByOrderCode || (exports.getByOrderCode = getByOrderCode = {}));
//# sourceMappingURL=index.js.map