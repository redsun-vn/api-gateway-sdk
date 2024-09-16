"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCopy = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createCopy(connection, productId, condition) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createCopy.METADATA,
        template: createCopy.METADATA.path,
        path: createCopy.path(productId),
    }, condition);
}
exports.createCopy = createCopy;
(function (createCopy) {
    createCopy.METADATA = {
        method: "POST",
        path: "/shop/products/:id/copy",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    createCopy.path = (productId) => `/shop/products/${encodeURIComponent(productId ?? "null")}/copy`;
})(createCopy || (exports.createCopy = createCopy = {}));
//# sourceMappingURL=index.js.map