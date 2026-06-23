"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pause = exports.get = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function get(connection, entityType, entityId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(entityType, entityId),
    });
}
exports.get = get;
(function (get) {
    get.METADATA = {
        method: "GET",
        path: "/shop/crm/sla/pause/:entityType/:entityId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    get.path = (entityType, entityId) => `/shop/crm/sla/pause/${encodeURIComponent(entityType?.toString() ?? "null")}/${encodeURIComponent(entityId?.toString() ?? "null")}`;
})(get || (exports.get = get = {}));
async function pause(connection, entityType, entityId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...pause.METADATA,
        template: pause.METADATA.path,
        path: pause.path(entityType, entityId),
    }, body);
}
exports.pause = pause;
(function (pause) {
    pause.METADATA = {
        method: "POST",
        path: "/shop/crm/sla/pause/:entityType/:entityId",
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
    pause.path = (entityType, entityId) => `/shop/crm/sla/pause/${encodeURIComponent(entityType?.toString() ?? "null")}/${encodeURIComponent(entityId?.toString() ?? "null")}`;
})(pause || (exports.pause = pause = {}));
//# sourceMappingURL=index.js.map