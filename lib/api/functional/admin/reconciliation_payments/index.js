"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.cancel = exports.update = exports.detail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
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
        path: "/admin/reconciliation-payments/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    detail.path = (id) => `/admin/reconciliation-payments/${encodeURIComponent(id ?? "null")}`;
})(detail || (exports.detail = detail = {}));
async function update(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
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
        path: "/admin/reconciliation-payments/:id",
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
    update.path = (id) => `/admin/reconciliation-payments/${encodeURIComponent(id ?? "null")}`;
})(update || (exports.update = update = {}));
async function cancel(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...cancel.METADATA,
        path: cancel.path(id),
    });
}
exports.cancel = cancel;
(function (cancel) {
    cancel.METADATA = {
        method: "PUT",
        path: "/admin/reconciliation-payments/:id/cancel",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    cancel.path = (id) => `/admin/reconciliation-payments/${encodeURIComponent(id ?? "null")}/cancel`;
})(cancel || (exports.cancel = cancel = {}));
async function list(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        path: list.path(query),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/admin/reconciliation-payments",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
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
        const location = "/admin/reconciliation-payments";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
//# sourceMappingURL=index.js.map