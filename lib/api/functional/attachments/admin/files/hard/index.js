"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardDelete = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function hardDelete(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...hardDelete.METADATA,
        template: hardDelete.METADATA.path,
        path: hardDelete.path(id),
    });
}
exports.hardDelete = hardDelete;
(function (hardDelete) {
    hardDelete.METADATA = {
        method: "DELETE",
        path: "/attachments/admin/files/:id/hard",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    hardDelete.path = (id) => `/attachments/admin/files/${encodeURIComponent(id?.toString() ?? "null")}/hard`;
})(hardDelete || (exports.hardDelete = hardDelete = {}));
//# sourceMappingURL=index.js.map