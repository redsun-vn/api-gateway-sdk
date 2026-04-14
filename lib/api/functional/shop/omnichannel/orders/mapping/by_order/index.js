"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderMappingByOrder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getOrderMappingByOrder(connection, localOrderId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOrderMappingByOrder.METADATA,
        template: getOrderMappingByOrder.METADATA.path,
        path: getOrderMappingByOrder.path(localOrderId),
    });
}
exports.getOrderMappingByOrder = getOrderMappingByOrder;
(function (getOrderMappingByOrder) {
    getOrderMappingByOrder.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/orders/mapping/by-order/:localOrderId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOrderMappingByOrder.path = (localOrderId) => `/shop/omnichannel/orders/mapping/by-order/${encodeURIComponent(localOrderId?.toString() ?? "null")}`;
})(getOrderMappingByOrder || (exports.getOrderMappingByOrder = getOrderMappingByOrder = {}));
//# sourceMappingURL=index.js.map