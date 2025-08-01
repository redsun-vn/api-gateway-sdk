"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cascadeKPI = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function cascadeKPI(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...cascadeKPI.METADATA,
        template: cascadeKPI.METADATA.path,
        path: cascadeKPI.path(id),
    }, data);
}
exports.cascadeKPI = cascadeKPI;
(function (cascadeKPI) {
    cascadeKPI.METADATA = {
        method: "POST",
        path: "/admin/crm-kpis/:id/cascade",
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
    cascadeKPI.path = (id) => `/admin/crm-kpis/${encodeURIComponent(id?.toString() ?? "null")}/cascade`;
})(cascadeKPI || (exports.cascadeKPI = cascadeKPI = {}));
//# sourceMappingURL=index.js.map