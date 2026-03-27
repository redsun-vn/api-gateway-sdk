"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueueStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getQueueStatus(connection, jobId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getQueueStatus.METADATA,
        template: getQueueStatus.METADATA.path,
        path: getQueueStatus.path(jobId),
    });
}
exports.getQueueStatus = getQueueStatus;
(function (getQueueStatus) {
    getQueueStatus.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/sync/queue/status/:jobId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getQueueStatus.path = (jobId) => `/shop/omnichannel/sync/queue/status/${encodeURIComponent(jobId?.toString() ?? "null")}`;
})(getQueueStatus || (exports.getQueueStatus = getQueueStatus = {}));
//# sourceMappingURL=index.js.map