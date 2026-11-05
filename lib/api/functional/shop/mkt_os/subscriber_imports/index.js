"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancel = exports.commit = exports.analyze = exports.rows = exports.get = exports.create = exports.list = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function list(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/subscriber-imports",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = () => "/shop/mkt-os/subscriber-imports";
})(list || (exports.list = list = {}));
async function create(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(),
    }, body);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-imports",
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
    create.path = () => "/shop/mkt-os/subscriber-imports";
})(create || (exports.create = create = {}));
async function get(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(id),
    });
}
exports.get = get;
(function (get) {
    get.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/subscriber-imports/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    get.path = (id) => `/shop/mkt-os/subscriber-imports/${encodeURIComponent(id?.toString() ?? "null")}`;
})(get || (exports.get = get = {}));
async function rows(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...rows.METADATA,
        template: rows.METADATA.path,
        path: rows.path(id),
    }, body);
}
exports.rows = rows;
(function (rows) {
    rows.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-imports/:id/rows",
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
    rows.path = (id) => `/shop/mkt-os/subscriber-imports/${encodeURIComponent(id?.toString() ?? "null")}/rows`;
})(rows || (exports.rows = rows = {}));
async function analyze(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...analyze.METADATA,
        template: analyze.METADATA.path,
        path: analyze.path(id),
    });
}
exports.analyze = analyze;
(function (analyze) {
    analyze.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-imports/:id/analyze",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    analyze.path = (id) => `/shop/mkt-os/subscriber-imports/${encodeURIComponent(id?.toString() ?? "null")}/analyze`;
})(analyze || (exports.analyze = analyze = {}));
async function commit(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...commit.METADATA,
        template: commit.METADATA.path,
        path: commit.path(id),
    });
}
exports.commit = commit;
(function (commit) {
    commit.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-imports/:id/commit",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    commit.path = (id) => `/shop/mkt-os/subscriber-imports/${encodeURIComponent(id?.toString() ?? "null")}/commit`;
})(commit || (exports.commit = commit = {}));
async function cancel(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...cancel.METADATA,
        template: cancel.METADATA.path,
        path: cancel.path(id),
    });
}
exports.cancel = cancel;
(function (cancel) {
    cancel.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-imports/:id/cancel",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    cancel.path = (id) => `/shop/mkt-os/subscriber-imports/${encodeURIComponent(id?.toString() ?? "null")}/cancel`;
})(cancel || (exports.cancel = cancel = {}));
//# sourceMappingURL=index.js.map