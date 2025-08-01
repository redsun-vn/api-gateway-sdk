"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProgress = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateProgress(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateProgress.METADATA,
        template: updateProgress.METADATA.path,
        path: updateProgress.path(id),
    }, data);
}
exports.updateProgress = updateProgress;
(function (updateProgress) {
    updateProgress.METADATA = {
        method: "PUT",
        path: "/admin/crm-kpis/:id/progress",
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
    updateProgress.path = (id) => `/admin/crm-kpis/${encodeURIComponent(id?.toString() ?? "null")}/progress`;
})(updateProgress || (exports.updateProgress = updateProgress = {}));
//# sourceMappingURL=index.js.map