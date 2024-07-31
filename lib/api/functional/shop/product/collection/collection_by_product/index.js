"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCollectionsByProductId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findCollectionsByProductId(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findCollectionsByProductId.METADATA,
        path: findCollectionsByProductId.path(id),
    });
}
exports.findCollectionsByProductId = findCollectionsByProductId;
(function (findCollectionsByProductId) {
    findCollectionsByProductId.METADATA = {
        method: "GET",
        path: "/shop/product/collection/collection_by_product/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findCollectionsByProductId.path = (id) => `/shop/product/collection/collection_by_product/${encodeURIComponent(id ?? "null")}`;
})(findCollectionsByProductId || (exports.findCollectionsByProductId = findCollectionsByProductId = {}));
//# sourceMappingURL=index.js.map