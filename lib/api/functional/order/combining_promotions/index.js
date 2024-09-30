"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.create = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function create(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(),
    }, input);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/order/combining-promotions",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    create.path = () => "/order/combining-promotions";
})(create || (exports.create = create = {}));
async function $delete(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$delete.METADATA,
        template: $delete.METADATA.path,
        path: $delete.path(id),
    });
}
exports.$delete = $delete;
(function ($delete) {
    $delete.METADATA = {
        method: "DELETE",
        path: "/order/combining-promotions/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    $delete.path = (id) => `/order/combining-promotions/${encodeURIComponent(id ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map