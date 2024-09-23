"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProductsByCollectionId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findProductsByCollectionId(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findProductsByCollectionId.METADATA,
        template: findProductsByCollectionId.METADATA.path,
        path: findProductsByCollectionId.path(id),
    });
}
exports.findProductsByCollectionId = findProductsByCollectionId;
(function (findProductsByCollectionId) {
    findProductsByCollectionId.METADATA = {
        method: "GET",
        path: "/shop/product/collection/product_by_collection/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findProductsByCollectionId.path = (id) => `/shop/product/collection/product_by_collection/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findProductsByCollectionId || (exports.findProductsByCollectionId = findProductsByCollectionId = {}));
//# sourceMappingURL=index.js.map