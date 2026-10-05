"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkUpdateStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkUpdateStatus(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkUpdateStatus.METADATA,
        template: bulkUpdateStatus.METADATA.path,
        path: bulkUpdateStatus.path(),
    }, input);
}
exports.bulkUpdateStatus = bulkUpdateStatus;
(function (bulkUpdateStatus) {
    bulkUpdateStatus.METADATA = {
        method: "PUT",
        path: "/shop/products/bulk-status",
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
    bulkUpdateStatus.path = () => "/shop/products/bulk-status";
})(bulkUpdateStatus || (exports.bulkUpdateStatus = bulkUpdateStatus = {}));
//# sourceMappingURL=index.js.map