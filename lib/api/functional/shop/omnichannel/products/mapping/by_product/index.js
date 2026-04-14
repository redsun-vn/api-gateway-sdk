"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductMappingsByLocalId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProductMappingsByLocalId(connection, localProductId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProductMappingsByLocalId.METADATA,
        template: getProductMappingsByLocalId.METADATA.path,
        path: getProductMappingsByLocalId.path(localProductId),
    });
}
exports.getProductMappingsByLocalId = getProductMappingsByLocalId;
(function (getProductMappingsByLocalId) {
    getProductMappingsByLocalId.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/products/mapping/by-product/:localProductId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProductMappingsByLocalId.path = (localProductId) => `/shop/omnichannel/products/mapping/by-product/${encodeURIComponent(localProductId?.toString() ?? "null")}`;
})(getProductMappingsByLocalId || (exports.getProductMappingsByLocalId = getProductMappingsByLocalId = {}));
//# sourceMappingURL=index.js.map