"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProductCollectionRelation = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findProductCollectionRelation(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findProductCollectionRelation.METADATA,
        path: findProductCollectionRelation.path(query),
    });
}
exports.findProductCollectionRelation = findProductCollectionRelation;
(function (findProductCollectionRelation) {
    findProductCollectionRelation.METADATA = {
        method: "GET",
        path: "/shop/product/collection/collection_product_relations",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findProductCollectionRelation.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/product/collection/collection_product_relations";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findProductCollectionRelation || (exports.findProductCollectionRelation = findProductCollectionRelation = {}));
//# sourceMappingURL=index.js.map