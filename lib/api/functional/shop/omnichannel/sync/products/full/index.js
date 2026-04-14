"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullSyncProducts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function fullSyncProducts(connection, opts) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...fullSyncProducts.METADATA,
        template: fullSyncProducts.METADATA.path,
        path: fullSyncProducts.path(),
    }, opts);
}
exports.fullSyncProducts = fullSyncProducts;
(function (fullSyncProducts) {
    fullSyncProducts.METADATA = {
        method: "POST",
        path: "/shop/omnichannel/sync/products/full",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    fullSyncProducts.path = () => "/shop/omnichannel/sync/products/full";
})(fullSyncProducts || (exports.fullSyncProducts = fullSyncProducts = {}));
//# sourceMappingURL=index.js.map