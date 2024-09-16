"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.confirm = exports.update = exports.detail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function detail(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...detail.METADATA,
        template: detail.METADATA.path,
        path: detail.path(id),
    });
}
exports.detail = detail;
(function (detail) {
    detail.METADATA = {
        method: "GET",
        path: "/shop/reconciliation-payments/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    detail.path = (id) => `/shop/reconciliation-payments/${encodeURIComponent(id ?? "null")}`;
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
        template: update.METADATA.path,
        path: update.path(id),
    }, data);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/reconciliation-payments/:id",
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
    update.path = (id) => `/shop/reconciliation-payments/${encodeURIComponent(id ?? "null")}`;
})(update || (exports.update = update = {}));
async function confirm(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...confirm.METADATA,
        template: confirm.METADATA.path,
        path: confirm.path(id),
    });
}
exports.confirm = confirm;
(function (confirm) {
    confirm.METADATA = {
        method: "PUT",
        path: "/shop/reconciliation-payments/:id/confirm",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    confirm.path = (id) => `/shop/reconciliation-payments/${encodeURIComponent(id ?? "null")}/confirm`;
})(confirm || (exports.confirm = confirm = {}));
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
        path: "/shop/reconciliation-payments",
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
        const location = "/shop/reconciliation-payments";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
//# sourceMappingURL=index.js.map