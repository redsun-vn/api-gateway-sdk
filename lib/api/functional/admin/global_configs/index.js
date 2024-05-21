"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.createOrUpdate = exports.findAllConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllConfig(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllConfig.METADATA,
        path: findAllConfig.path(),
    });
}
exports.findAllConfig = findAllConfig;
(function (findAllConfig) {
    findAllConfig.METADATA = {
        method: "GET",
        path: "/admin/global-configs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findAllConfig.path = () => {
        return `/admin/global-configs`;
    };
})(findAllConfig || (exports.findAllConfig = findAllConfig = {}));
async function createOrUpdate(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...createOrUpdate.METADATA,
        path: createOrUpdate.path(),
    }, input);
}
exports.createOrUpdate = createOrUpdate;
(function (createOrUpdate) {
    createOrUpdate.METADATA = {
        method: "POST",
        path: "/admin/global-configs",
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
    createOrUpdate.path = () => {
        return `/admin/global-configs`;
    };
})(createOrUpdate || (exports.createOrUpdate = createOrUpdate = {}));
async function $delete(connection, key) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$delete.METADATA,
        path: $delete.path(key),
    });
}
exports.$delete = $delete;
(function ($delete) {
    $delete.METADATA = {
        method: "DELETE",
        path: "/admin/global-configs/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    $delete.path = (key) => {
        return `/admin/global-configs/${encodeURIComponent(key ?? "null")}`;
    };
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map