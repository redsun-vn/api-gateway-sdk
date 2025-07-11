"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllAttributeOptions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllAttributeOptions(connection, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllAttributeOptions.METADATA,
        template: findAllAttributeOptions.METADATA.path,
        path: findAllAttributeOptions.path(shopId),
    });
}
exports.findAllAttributeOptions = findAllAttributeOptions;
(function (findAllAttributeOptions) {
    findAllAttributeOptions.METADATA = {
        method: "GET",
        path: "/products/:shopId/attribute-options",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllAttributeOptions.path = (shopId) => `/products/${encodeURIComponent(shopId?.toString() ?? "null")}/attribute-options`;
})(findAllAttributeOptions || (exports.findAllAttributeOptions = findAllAttributeOptions = {}));
//# sourceMappingURL=index.js.map