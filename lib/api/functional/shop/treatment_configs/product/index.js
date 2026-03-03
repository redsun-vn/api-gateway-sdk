"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneByProduct = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneByProduct(connection, productId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneByProduct.METADATA,
        template: findOneByProduct.METADATA.path,
        path: findOneByProduct.path(productId),
    });
}
exports.findOneByProduct = findOneByProduct;
(function (findOneByProduct) {
    findOneByProduct.METADATA = {
        method: "GET",
        path: "/shop/treatment-configs/product/:productId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneByProduct.path = (productId) => `/shop/treatment-configs/product/${encodeURIComponent(productId?.toString() ?? "null")}`;
})(findOneByProduct || (exports.findOneByProduct = findOneByProduct = {}));
//# sourceMappingURL=index.js.map