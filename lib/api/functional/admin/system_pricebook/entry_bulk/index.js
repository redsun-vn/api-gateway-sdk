"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkCreateEntry = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkCreateEntry(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkCreateEntry.METADATA,
        template: bulkCreateEntry.METADATA.path,
        path: bulkCreateEntry.path(id),
    }, data);
}
exports.bulkCreateEntry = bulkCreateEntry;
(function (bulkCreateEntry) {
    bulkCreateEntry.METADATA = {
        method: "PUT",
        path: "/admin/system-pricebook/:id/entry-bulk",
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
    bulkCreateEntry.path = (id) => `/admin/system-pricebook/${encodeURIComponent(id?.toString() ?? "null")}/entry-bulk`;
})(bulkCreateEntry || (exports.bulkCreateEntry = bulkCreateEntry = {}));
//# sourceMappingURL=index.js.map