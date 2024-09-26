"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProductsByCollectionId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findProductsByCollectionId(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findProductsByCollectionId.METADATA,
        template: findProductsByCollectionId.METADATA.path,
        path: findProductsByCollectionId.path(id, query),
    });
}
exports.findProductsByCollectionId = findProductsByCollectionId;
(function (findProductsByCollectionId) {
    findProductsByCollectionId.METADATA = {
        method: "GET",
        path: "/product/collection/product_by_collection/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findProductsByCollectionId.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/product/collection/product_by_collection/${encodeURIComponent(id ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findProductsByCollectionId || (exports.findProductsByCollectionId = findProductsByCollectionId = {}));
//# sourceMappingURL=index.js.map