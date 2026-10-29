"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rematch = exports.clear = exports.set = exports.targets = exports.list = void 0;
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
        path: "/shop/mkt-os/ads/mappings",
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
        const location = "/shop/mkt-os/ads/mappings";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
async function targets(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...targets.METADATA,
        template: targets.METADATA.path,
        path: targets.path(query),
    });
}
exports.targets = targets;
(function (targets) {
    targets.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/ads/mappings/targets",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    targets.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/ads/mappings/targets";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(targets || (exports.targets = targets = {}));
async function set(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...set.METADATA,
        template: set.METADATA.path,
        path: set.path(),
    }, body);
}
exports.set = set;
(function (set) {
    set.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/ads/mappings",
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
    set.path = () => "/shop/mkt-os/ads/mappings";
})(set || (exports.set = set = {}));
async function clear(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...clear.METADATA,
        template: clear.METADATA.path,
        path: clear.path(id),
    });
}
exports.clear = clear;
(function (clear) {
    clear.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/ads/mappings/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    clear.path = (id) => `/shop/mkt-os/ads/mappings/${encodeURIComponent(id?.toString() ?? "null")}`;
})(clear || (exports.clear = clear = {}));
async function rematch(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...rematch.METADATA,
        template: rematch.METADATA.path,
        path: rematch.path(),
    });
}
exports.rematch = rematch;
(function (rematch) {
    rematch.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/ads/mappings/rematch",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    rematch.path = () => "/shop/mkt-os/ads/mappings/rematch";
})(rematch || (exports.rematch = rematch = {}));
//# sourceMappingURL=index.js.map