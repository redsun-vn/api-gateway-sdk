"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getJobStatus(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getJobStatus.METADATA,
        template: getJobStatus.METADATA.path,
        path: getJobStatus.path(id),
    });
}
exports.getJobStatus = getJobStatus;
(function (getJobStatus) {
    getJobStatus.METADATA = {
        method: "GET",
        path: "/shop/ai/content/jobs/:id/status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getJobStatus.path = (id) => `/shop/ai/content/jobs/${encodeURIComponent(id?.toString() ?? "null")}/status`;
})(getJobStatus || (exports.getJobStatus = getJobStatus = {}));
//# sourceMappingURL=index.js.map