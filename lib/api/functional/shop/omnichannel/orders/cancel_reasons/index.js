"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderCancelReasons = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getOrderCancelReasons(connection, provider) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOrderCancelReasons.METADATA,
        template: getOrderCancelReasons.METADATA.path,
        path: getOrderCancelReasons.path(provider),
    });
}
exports.getOrderCancelReasons = getOrderCancelReasons;
(function (getOrderCancelReasons) {
    getOrderCancelReasons.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/:provider/orders/cancel-reasons",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOrderCancelReasons.path = (provider) => `/shop/omnichannel/${encodeURIComponent(provider?.toString() ?? "null")}/orders/cancel-reasons`;
})(getOrderCancelReasons || (exports.getOrderCancelReasons = getOrderCancelReasons = {}));
//# sourceMappingURL=index.js.map