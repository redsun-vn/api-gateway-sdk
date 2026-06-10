"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrySyncLog = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function retrySyncLog(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...retrySyncLog.METADATA,
        template: retrySyncLog.METADATA.path,
        path: retrySyncLog.path(id),
    });
}
exports.retrySyncLog = retrySyncLog;
(function (retrySyncLog) {
    retrySyncLog.METADATA = {
        method: "POST",
        path: "/shop/crm/facebook/sync-log/:id/retry",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    retrySyncLog.path = (id) => `/shop/crm/facebook/sync-log/${encodeURIComponent(id?.toString() ?? "null")}/retry`;
})(retrySyncLog || (exports.retrySyncLog = retrySyncLog = {}));
//# sourceMappingURL=index.js.map