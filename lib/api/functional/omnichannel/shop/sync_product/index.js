"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncUpdateProduct = exports.syncCreateProduct = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function syncCreateProduct(connection, provider, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...syncCreateProduct.METADATA,
        template: syncCreateProduct.METADATA.path,
        path: syncCreateProduct.path(provider),
    }, data);
}
exports.syncCreateProduct = syncCreateProduct;
(function (syncCreateProduct) {
    syncCreateProduct.METADATA = {
        method: "POST",
        path: "/omnichannel/shop/sync-product/:provider",
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
    syncCreateProduct.path = (provider) => `/omnichannel/shop/sync-product/${encodeURIComponent(provider?.toString() ?? "null")}`;
})(syncCreateProduct || (exports.syncCreateProduct = syncCreateProduct = {}));
async function syncUpdateProduct(connection, provider, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...syncUpdateProduct.METADATA,
        template: syncUpdateProduct.METADATA.path,
        path: syncUpdateProduct.path(provider),
    }, data);
}
exports.syncUpdateProduct = syncUpdateProduct;
(function (syncUpdateProduct) {
    syncUpdateProduct.METADATA = {
        method: "PUT",
        path: "/omnichannel/shop/sync-product/:provider",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    syncUpdateProduct.path = (provider) => `/omnichannel/shop/sync-product/${encodeURIComponent(provider?.toString() ?? "null")}`;
})(syncUpdateProduct || (exports.syncUpdateProduct = syncUpdateProduct = {}));
//# sourceMappingURL=index.js.map