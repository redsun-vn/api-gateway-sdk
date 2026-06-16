"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolve = exports.remove = exports.update = exports.create = exports.findOne = exports.findAll = void 0;
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
        path: "/shop/deposit-policies",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAll.path = () => "/shop/deposit-policies";
})(findAll || (exports.findAll = findAll = {}));
async function findOne(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        template: findOne.METADATA.path,
        path: findOne.path(id),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/shop/deposit-policies/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/shop/deposit-policies/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
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
        path: "/shop/deposit-policies",
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
    create.path = () => "/shop/deposit-policies";
})(create || (exports.create = create = {}));
async function update(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        template: update.METADATA.path,
        path: update.path(id),
    }, body);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/deposit-policies/:id",
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
    update.path = (id) => `/shop/deposit-policies/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
async function remove(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...remove.METADATA,
        template: remove.METADATA.path,
        path: remove.path(id),
    });
}
exports.remove = remove;
(function (remove) {
    remove.METADATA = {
        method: "DELETE",
        path: "/shop/deposit-policies/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    remove.path = (id) => `/shop/deposit-policies/${encodeURIComponent(id?.toString() ?? "null")}`;
})(remove || (exports.remove = remove = {}));
async function resolve(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...resolve.METADATA,
        template: resolve.METADATA.path,
        path: resolve.path(),
    }, body);
}
exports.resolve = resolve;
(function (resolve) {
    resolve.METADATA = {
        method: "POST",
        path: "/shop/deposit-policies/resolve",
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
    resolve.path = () => "/shop/deposit-policies/resolve";
})(resolve || (exports.resolve = resolve = {}));
//# sourceMappingURL=index.js.map