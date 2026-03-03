"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.update = exports.create = exports.findByConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByConfig(connection, configId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByConfig.METADATA,
        template: findByConfig.METADATA.path,
        path: findByConfig.path(configId),
    });
}
exports.findByConfig = findByConfig;
(function (findByConfig) {
    findByConfig.METADATA = {
        method: "GET",
        path: "/shop/treatment-configs/:configId/product-items",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByConfig.path = (configId) => `/shop/treatment-configs/${encodeURIComponent(configId?.toString() ?? "null")}/product-items`;
})(findByConfig || (exports.findByConfig = findByConfig = {}));
async function create(connection, configId, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(configId),
    }, input);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/treatment-configs/:configId/product-items",
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
    create.path = (configId) => `/shop/treatment-configs/${encodeURIComponent(configId?.toString() ?? "null")}/product-items`;
})(create || (exports.create = create = {}));
async function update(connection, id, configId, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        template: update.METADATA.path,
        path: update.path(id, configId),
    }, input);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/treatment-configs/:configId/product-items/:id",
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
    update.path = (id, configId) => `/shop/treatment-configs/${encodeURIComponent(configId?.toString() ?? "null")}/product-items/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
async function $delete(connection, id, configId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$delete.METADATA,
        template: $delete.METADATA.path,
        path: $delete.path(id, configId),
    });
}
exports.$delete = $delete;
(function ($delete) {
    $delete.METADATA = {
        method: "DELETE",
        path: "/shop/treatment-configs/:configId/product-items/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (id, configId) => `/shop/treatment-configs/${encodeURIComponent(configId?.toString() ?? "null")}/product-items/${encodeURIComponent(id?.toString() ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map