"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.update = exports.create = exports.findOne = exports.findAll = void 0;
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
        path: "/shop/inventory/stocktakes",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findAll.path = () => {
        return `/shop/inventory/stocktakes`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function findOne(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        path: findOne.path(id),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/shop/inventory/stocktakes/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOne.path = (id) => {
        return `/shop/inventory/stocktakes/${encodeURIComponent(id ?? "null")}`;
    };
})(findOne || (exports.findOne = findOne = {}));
async function create(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        path: create.path(),
    }, input);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/inventory/stocktakes",
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
    create.path = () => {
        return `/shop/inventory/stocktakes`;
    };
})(create || (exports.create = create = {}));
async function update(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        path: update.path(id),
    }, input);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/inventory/stocktakes/:id",
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
        return `/shop/inventory/stocktakes/${encodeURIComponent(id ?? "null")}`;
    };
})(update || (exports.update = update = {}));
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
        path: "/shop/inventory/stocktakes/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    $delete.path = (id) => {
        return `/shop/inventory/stocktakes/${encodeURIComponent(id ?? "null")}`;
    };
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map