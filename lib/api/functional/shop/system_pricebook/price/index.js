"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function create(connection, productId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(productId),
    }, data);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/system-pricebook/:productId/price",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    create.path = (productId) => `/shop/system-pricebook/${encodeURIComponent(productId?.toString() ?? "null")}/price`;
})(create || (exports.create = create = {}));
//# sourceMappingURL=index.js.map