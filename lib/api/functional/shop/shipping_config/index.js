"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.findAllByProvider = exports.detail = exports.create = void 0;
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
        path: create.path(),
    }, data);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/shipping-config",
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
    create.path = () => "/shop/shipping-config";
})(create || (exports.create = create = {}));
async function detail(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...detail.METADATA,
        path: detail.path(id),
    });
}
exports.detail = detail;
(function (detail) {
    detail.METADATA = {
        method: "GET",
        path: "/shop/shipping-config/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    detail.path = (id) => `/shop/shipping-config/${encodeURIComponent(id ?? "null")}`;
})(detail || (exports.detail = detail = {}));
async function findAllByProvider(connection, providerCode) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllByProvider.METADATA,
        path: findAllByProvider.path(providerCode),
    });
}
exports.findAllByProvider = findAllByProvider;
(function (findAllByProvider) {
    findAllByProvider.METADATA = {
        method: "GET",
        path: "/shop/shipping-config",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findAllByProvider.path = (providerCode) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries({
            providerCode,
        }))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/shipping-config";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllByProvider || (exports.findAllByProvider = findAllByProvider = {}));
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
        path: "/shop/shipping-config/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    $delete.path = (id) => `/shop/shipping-config/${encodeURIComponent(id ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map