"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkAssign = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkAssign(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkAssign.METADATA,
        template: bulkAssign.METADATA.path,
        path: bulkAssign.path(),
    }, body);
}
exports.bulkAssign = bulkAssign;
(function (bulkAssign) {
    bulkAssign.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/bulk-assign",
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
    bulkAssign.path = () => "/shop/crm/leads/bulk-assign";
})(bulkAssign || (exports.bulkAssign = bulkAssign = {}));
//# sourceMappingURL=index.js.map