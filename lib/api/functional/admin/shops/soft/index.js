"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDelete = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function softDelete(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...softDelete.METADATA,
        path: softDelete.path(id),
    });
}
exports.softDelete = softDelete;
(function (softDelete) {
    softDelete.METADATA = {
        method: "DELETE",
        path: "/admin/shops/:id/soft",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    softDelete.path = (id) => {
        return `/admin/shops/${encodeURIComponent(id ?? "null")}/soft`;
    };
})(softDelete || (exports.softDelete = softDelete = {}));
//# sourceMappingURL=index.js.map