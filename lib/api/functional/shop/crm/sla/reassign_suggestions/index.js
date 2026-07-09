"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dismiss = exports.approve = exports.list = void 0;
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
        path: "/shop/crm/sla/reassign-suggestions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = () => "/shop/crm/sla/reassign-suggestions";
})(list || (exports.list = list = {}));
async function approve(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...approve.METADATA,
        template: approve.METADATA.path,
        path: approve.path(id),
    }, body);
}
exports.approve = approve;
(function (approve) {
    approve.METADATA = {
        method: "POST",
        path: "/shop/crm/sla/reassign-suggestions/:id/approve",
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
    approve.path = (id) => `/shop/crm/sla/reassign-suggestions/${encodeURIComponent(id?.toString() ?? "null")}/approve`;
})(approve || (exports.approve = approve = {}));
async function dismiss(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...dismiss.METADATA,
        template: dismiss.METADATA.path,
        path: dismiss.path(id),
    });
}
exports.dismiss = dismiss;
(function (dismiss) {
    dismiss.METADATA = {
        method: "POST",
        path: "/shop/crm/sla/reassign-suggestions/:id/dismiss",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    dismiss.path = (id) => `/shop/crm/sla/reassign-suggestions/${encodeURIComponent(id?.toString() ?? "null")}/dismiss`;
})(dismiss || (exports.dismiss = dismiss = {}));
//# sourceMappingURL=index.js.map