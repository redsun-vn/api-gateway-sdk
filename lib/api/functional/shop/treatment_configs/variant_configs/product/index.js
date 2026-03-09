"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllVariantConfigByProductId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllVariantConfigByProductId(connection, productId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllVariantConfigByProductId.METADATA,
        template: findAllVariantConfigByProductId.METADATA.path,
        path: findAllVariantConfigByProductId.path(productId),
    });
}
exports.findAllVariantConfigByProductId = findAllVariantConfigByProductId;
(function (findAllVariantConfigByProductId) {
    findAllVariantConfigByProductId.METADATA = {
        method: "GET",
        path: "/shop/treatment-configs/variant-configs/product/:productId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllVariantConfigByProductId.path = (productId) => `/shop/treatment-configs/variant-configs/product/${encodeURIComponent(productId?.toString() ?? "null")}`;
})(findAllVariantConfigByProductId || (exports.findAllVariantConfigByProductId = findAllVariantConfigByProductId = {}));
//# sourceMappingURL=index.js.map