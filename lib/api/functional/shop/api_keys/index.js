"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.findAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAll(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        path: findAll.path(),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/shop/api-keys",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findAll.path = () => {
        return `/shop/api-keys`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function create(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...create.METADATA,
        path: create.path(),
    });
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/api-keys",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    create.path = () => {
        return `/shop/api-keys`;
    };
})(create || (exports.create = create = {}));
async function update(connection, data, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        path: update.path(id),
    }, data);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/api-keys/:id",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    update.path = (id) => {
        return `/shop/api-keys/${encodeURIComponent(id ?? "null")}`;
    };
})(update || (exports.update = update = {}));
//# sourceMappingURL=index.js.map