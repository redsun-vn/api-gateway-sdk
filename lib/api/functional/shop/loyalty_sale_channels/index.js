"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detail = exports.create = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function create(connection, data) {
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
    }, data);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/loyalty-sale-channels",
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
    create.path = () => "/shop/loyalty-sale-channels";
})(create || (exports.create = create = {}));
async function detail(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...detail.METADATA,
        template: detail.METADATA.path,
        path: detail.path(id),
    });
}
exports.detail = detail;
(function (detail) {
    detail.METADATA = {
        method: "DELETE",
        path: "/shop/loyalty-sale-channels/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    detail.path = (id) => `/shop/loyalty-sale-channels/${encodeURIComponent(id?.toString() ?? "null")}`;
})(detail || (exports.detail = detail = {}));
//# sourceMappingURL=index.js.map