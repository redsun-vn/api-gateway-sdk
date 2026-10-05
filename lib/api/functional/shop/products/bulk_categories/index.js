"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkAssignCategories = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkAssignCategories(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkAssignCategories.METADATA,
        template: bulkAssignCategories.METADATA.path,
        path: bulkAssignCategories.path(),
    }, input);
}
exports.bulkAssignCategories = bulkAssignCategories;
(function (bulkAssignCategories) {
    bulkAssignCategories.METADATA = {
        method: "PUT",
        path: "/shop/products/bulk-categories",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    bulkAssignCategories.path = () => "/shop/products/bulk-categories";
})(bulkAssignCategories || (exports.bulkAssignCategories = bulkAssignCategories = {}));
//# sourceMappingURL=index.js.map