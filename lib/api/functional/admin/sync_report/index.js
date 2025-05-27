"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function syncReport(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...syncReport.METADATA,
        template: syncReport.METADATA.path,
        path: syncReport.path(),
    }, data);
}
exports.syncReport = syncReport;
(function (syncReport) {
    syncReport.METADATA = {
        method: "POST",
        path: "/admin/sync-report",
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
    syncReport.path = () => "/admin/sync-report";
})(syncReport || (exports.syncReport = syncReport = {}));
//# sourceMappingURL=index.js.map