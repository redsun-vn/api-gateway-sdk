"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revoke = exports.create = exports.findAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAll(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        template: findAll.METADATA.path,
        path: findAll.path(),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/shop/mcp-keys",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAll.path = () => "/shop/mcp-keys";
})(findAll || (exports.findAll = findAll = {}));
async function create(connection, body) {
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
    }, body);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/mcp-keys",
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
    create.path = () => "/shop/mcp-keys";
})(create || (exports.create = create = {}));
async function revoke(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revoke.METADATA,
        template: revoke.METADATA.path,
        path: revoke.path(id),
    });
}
exports.revoke = revoke;
(function (revoke) {
    revoke.METADATA = {
        method: "DELETE",
        path: "/shop/mcp-keys/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    revoke.path = (id) => `/shop/mcp-keys/${encodeURIComponent(id?.toString() ?? "null")}`;
})(revoke || (exports.revoke = revoke = {}));
//# sourceMappingURL=index.js.map