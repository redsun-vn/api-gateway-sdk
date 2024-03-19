"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancel = exports.detail = exports.findAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAll(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        path: findAll.path(query),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/shop/fulfillments",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findAll.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/fulfillments";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
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
        path: "/shop/fulfillments/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    detail.path = (id) => `/shop/fulfillments/${encodeURIComponent(id ?? "null")}`;
})(detail || (exports.detail = detail = {}));
async function cancel(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...cancel.METADATA,
        path: cancel.path(id),
    });
}
exports.cancel = cancel;
(function (cancel) {
    cancel.METADATA = {
        method: "POST",
        path: "/shop/fulfillments/:id/cancel",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    cancel.path = (id) => `/shop/fulfillments/${encodeURIComponent(id ?? "null")}/cancel`;
})(cancel || (exports.cancel = cancel = {}));
//# sourceMappingURL=index.js.map