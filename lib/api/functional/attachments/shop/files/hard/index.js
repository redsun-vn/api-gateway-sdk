"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardDelete = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function hardDelete(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...hardDelete.METADATA,
        path: hardDelete.path(id),
    });
}
exports.hardDelete = hardDelete;
(function (hardDelete) {
    hardDelete.METADATA = {
        method: "DELETE",
        path: "/attachments/shop/files/:id/hard",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    hardDelete.path = (id) => `/attachments/shop/files/${encodeURIComponent(id ?? "null")}/hard`;
})(hardDelete || (exports.hardDelete = hardDelete = {}));
//# sourceMappingURL=index.js.map