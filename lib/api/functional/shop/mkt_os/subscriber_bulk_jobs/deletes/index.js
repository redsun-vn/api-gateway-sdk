"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function $delete(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...$delete.METADATA,
        template: $delete.METADATA.path,
        path: $delete.path(),
    }, body);
}
exports.$delete = $delete;
(function ($delete) {
    $delete.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-bulk-jobs/deletes",
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
    $delete.path = () => "/shop/mkt-os/subscriber-bulk-jobs/deletes";
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map