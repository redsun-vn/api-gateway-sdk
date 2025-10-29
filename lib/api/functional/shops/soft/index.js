"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDelete = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function softDelete(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...softDelete.METADATA,
        template: softDelete.METADATA.path,
        path: softDelete.path(id),
    }, data);
}
exports.softDelete = softDelete;
(function (softDelete) {
    softDelete.METADATA = {
        method: "DELETE",
        path: "/shops/:id/soft",
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
    softDelete.path = (id) => `/shops/${encodeURIComponent(id?.toString() ?? "null")}/soft`;
})(softDelete || (exports.softDelete = softDelete = {}));
//# sourceMappingURL=index.js.map