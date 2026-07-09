"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneScoped = exports.findAllScoped = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllScoped(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllScoped.METADATA,
        template: findAllScoped.METADATA.path,
        path: findAllScoped.path(query),
    });
}
exports.findAllScoped = findAllScoped;
(function (findAllScoped) {
    findAllScoped.METADATA = {
        method: "GET",
        path: "/shop/partners/scoped",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllScoped.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/partners/scoped";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllScoped || (exports.findAllScoped = findAllScoped = {}));
async function findOneScoped(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneScoped.METADATA,
        template: findOneScoped.METADATA.path,
        path: findOneScoped.path(id),
    });
}
exports.findOneScoped = findOneScoped;
(function (findOneScoped) {
    findOneScoped.METADATA = {
        method: "GET",
        path: "/shop/partners/scoped/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneScoped.path = (id) => `/shop/partners/scoped/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOneScoped || (exports.findOneScoped = findOneScoped = {}));
//# sourceMappingURL=index.js.map