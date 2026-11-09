"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.$import = exports.manualUpsert = exports.list = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function list(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(query),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/ads/spend",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/ads/spend";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
async function manualUpsert(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...manualUpsert.METADATA,
        template: manualUpsert.METADATA.path,
        path: manualUpsert.path(),
    }, body);
}
exports.manualUpsert = manualUpsert;
(function (manualUpsert) {
    manualUpsert.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/ads/spend",
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
    manualUpsert.path = () => "/shop/mkt-os/ads/spend";
})(manualUpsert || (exports.manualUpsert = manualUpsert = {}));
async function $import(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...$import.METADATA,
        template: $import.METADATA.path,
        path: $import.path(),
    }, body);
}
exports.$import = $import;
(function ($import) {
    $import.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/ads/spend/import",
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
    $import.path = () => "/shop/mkt-os/ads/spend/import";
})($import || (exports.$import = $import = {}));
async function $delete(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$delete.METADATA,
        template: $delete.METADATA.path,
        path: $delete.path(query),
    });
}
exports.$delete = $delete;
(function ($delete) {
    $delete.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/ads/spend",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/ads/spend";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map