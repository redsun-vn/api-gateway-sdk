"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneByOrderId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneByOrderId(connection, orderId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneByOrderId.METADATA,
        template: findOneByOrderId.METADATA.path,
        path: findOneByOrderId.path(orderId),
    });
}
exports.findOneByOrderId = findOneByOrderId;
(function (findOneByOrderId) {
    findOneByOrderId.METADATA = {
        method: "GET",
        path: "/shop/payment-links/order/:orderId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneByOrderId.path = (orderId) => `/shop/payment-links/order/${encodeURIComponent(orderId?.toString() ?? "null")}`;
})(findOneByOrderId || (exports.findOneByOrderId = findOneByOrderId = {}));
//# sourceMappingURL=index.js.map