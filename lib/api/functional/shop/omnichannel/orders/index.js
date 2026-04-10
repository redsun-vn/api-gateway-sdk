"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersOnProvider = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getOrdersOnProvider(connection, provider) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOrdersOnProvider.METADATA,
        template: getOrdersOnProvider.METADATA.path,
        path: getOrdersOnProvider.path(provider),
    });
}
exports.getOrdersOnProvider = getOrdersOnProvider;
(function (getOrdersOnProvider) {
    getOrdersOnProvider.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/:provider/orders",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOrdersOnProvider.path = (provider) => `/shop/omnichannel/${encodeURIComponent(provider?.toString() ?? "null")}/orders`;
})(getOrdersOnProvider || (exports.getOrdersOnProvider = getOrdersOnProvider = {}));
//# sourceMappingURL=index.js.map