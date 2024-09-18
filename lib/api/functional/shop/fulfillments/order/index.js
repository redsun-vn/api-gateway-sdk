"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByOrderId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getByOrderId(connection, orderId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getByOrderId.METADATA,
        template: getByOrderId.METADATA.path,
        path: getByOrderId.path(orderId),
    });
}
exports.getByOrderId = getByOrderId;
(function (getByOrderId) {
    getByOrderId.METADATA = {
        method: "GET",
        path: "/shop/fulfillments/order/:orderId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getByOrderId.path = (orderId) => `/shop/fulfillments/order/${encodeURIComponent(orderId?.toString() ?? "null")}`;
})(getByOrderId || (exports.getByOrderId = getByOrderId = {}));
//# sourceMappingURL=index.js.map