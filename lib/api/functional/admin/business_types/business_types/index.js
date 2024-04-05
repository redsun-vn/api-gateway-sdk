"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function $delete(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$delete.METADATA,
        path: $delete.path(id),
    });
}
exports.$delete = $delete;
(function ($delete) {
    $delete.METADATA = {
        method: "DELETE",
        path: "/admin/business-types/business-types/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    $delete.path = (id) => {
        return `/admin/business-types/business-types/${encodeURIComponent(id ?? "null")}`;
    };
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map