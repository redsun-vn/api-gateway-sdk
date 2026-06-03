"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkDelete = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkDelete(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkDelete.METADATA,
        template: bulkDelete.METADATA.path,
        path: bulkDelete.path(),
    }, input);
}
exports.bulkDelete = bulkDelete;
(function (bulkDelete) {
    bulkDelete.METADATA = {
        method: "POST",
        path: "/shop/product/variants/bulk-delete",
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
    bulkDelete.path = () => "/shop/product/variants/bulk-delete";
})(bulkDelete || (exports.bulkDelete = bulkDelete = {}));
//# sourceMappingURL=index.js.map