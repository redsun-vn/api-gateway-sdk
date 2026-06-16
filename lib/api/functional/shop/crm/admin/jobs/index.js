"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function jobStatus(connection, jobId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...jobStatus.METADATA,
        template: jobStatus.METADATA.path,
        path: jobStatus.path(jobId),
    });
}
exports.jobStatus = jobStatus;
(function (jobStatus) {
    jobStatus.METADATA = {
        method: "GET",
        path: "/shop/crm/admin/jobs/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    jobStatus.path = (jobId) => `/shop/crm/admin/jobs/${encodeURIComponent(jobId?.toString() ?? "null")}`;
})(jobStatus || (exports.jobStatus = jobStatus = {}));
//# sourceMappingURL=index.js.map