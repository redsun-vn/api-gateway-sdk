"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkReassign = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkReassign(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkReassign.METADATA,
        template: bulkReassign.METADATA.path,
        path: bulkReassign.path(),
    }, body);
}
exports.bulkReassign = bulkReassign;
(function (bulkReassign) {
    bulkReassign.METADATA = {
        method: "POST",
        path: "/shop/crm/opportunities/bulk-reassign",
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
    bulkReassign.path = () => "/shop/crm/opportunities/bulk-reassign";
})(bulkReassign || (exports.bulkReassign = bulkReassign = {}));
//# sourceMappingURL=index.js.map