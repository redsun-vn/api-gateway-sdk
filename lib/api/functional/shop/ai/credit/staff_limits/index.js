"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.upsert = exports.list = void 0;
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
        path: "/shop/ai/credit/staff-limits",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = () => "/shop/ai/credit/staff-limits";
})(list || (exports.list = list = {}));
async function upsert(connection, staffId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...upsert.METADATA,
        template: upsert.METADATA.path,
        path: upsert.path(staffId),
    }, data);
}
exports.upsert = upsert;
(function (upsert) {
    upsert.METADATA = {
        method: "PUT",
        path: "/shop/ai/credit/staff-limits/:staffId",
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
    upsert.path = (staffId) => `/shop/ai/credit/staff-limits/${encodeURIComponent(staffId?.toString() ?? "null")}`;
})(upsert || (exports.upsert = upsert = {}));
async function remove(connection, staffId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...remove.METADATA,
        template: remove.METADATA.path,
        path: remove.path(staffId),
    });
}
exports.remove = remove;
(function (remove) {
    remove.METADATA = {
        method: "DELETE",
        path: "/shop/ai/credit/staff-limits/:staffId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    remove.path = (staffId) => `/shop/ai/credit/staff-limits/${encodeURIComponent(staffId?.toString() ?? "null")}`;
})(remove || (exports.remove = remove = {}));
//# sourceMappingURL=index.js.map