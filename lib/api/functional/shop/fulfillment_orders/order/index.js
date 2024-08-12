"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByOrderId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getByOrderId(connection, orderId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getByOrderId.METADATA,
        path: getByOrderId.path(orderId),
    });
}
exports.getByOrderId = getByOrderId;
(function (getByOrderId) {
    getByOrderId.METADATA = {
        method: "GET",
        path: "/shop/fulfillment-orders/order/:orderId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    getByOrderId.path = (orderId) => `/shop/fulfillment-orders/order/${encodeURIComponent(orderId ?? "null")}`;
})(getByOrderId || (exports.getByOrderId = getByOrderId = {}));
//# sourceMappingURL=index.js.map