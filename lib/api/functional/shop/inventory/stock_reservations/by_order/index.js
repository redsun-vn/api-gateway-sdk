"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByOrder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByOrder(connection, orderId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByOrder.METADATA,
        template: findByOrder.METADATA.path,
        path: findByOrder.path(orderId),
    });
}
exports.findByOrder = findByOrder;
(function (findByOrder) {
    findByOrder.METADATA = {
        method: "GET",
        path: "/shop/inventory/stock-reservations/by-order/:orderId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByOrder.path = (orderId) => `/shop/inventory/stock-reservations/by-order/${encodeURIComponent(orderId?.toString() ?? "null")}`;
})(findByOrder || (exports.findByOrder = findByOrder = {}));
//# sourceMappingURL=index.js.map