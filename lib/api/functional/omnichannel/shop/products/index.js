"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductDetailOnProvider = exports.getProductsOnProvider = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProductsOnProvider(connection, provider) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProductsOnProvider.METADATA,
        template: getProductsOnProvider.METADATA.path,
        path: getProductsOnProvider.path(provider),
    });
}
exports.getProductsOnProvider = getProductsOnProvider;
(function (getProductsOnProvider) {
    getProductsOnProvider.METADATA = {
        method: "GET",
        path: "/omnichannel/shop/:provider/products",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProductsOnProvider.path = (provider) => `/omnichannel/shop/${encodeURIComponent(provider?.toString() ?? "null")}/products`;
})(getProductsOnProvider || (exports.getProductsOnProvider = getProductsOnProvider = {}));
async function getProductDetailOnProvider(connection, provider, productId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProductDetailOnProvider.METADATA,
        template: getProductDetailOnProvider.METADATA.path,
        path: getProductDetailOnProvider.path(provider, productId),
    });
}
exports.getProductDetailOnProvider = getProductDetailOnProvider;
(function (getProductDetailOnProvider) {
    getProductDetailOnProvider.METADATA = {
        method: "GET",
        path: "/omnichannel/shop/:provider/products/:productId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProductDetailOnProvider.path = (provider, productId) => `/omnichannel/shop/${encodeURIComponent(provider?.toString() ?? "null")}/products/${encodeURIComponent(productId?.toString() ?? "null")}`;
})(getProductDetailOnProvider || (exports.getProductDetailOnProvider = getProductDetailOnProvider = {}));
//# sourceMappingURL=index.js.map