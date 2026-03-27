"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueueStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getQueueStats(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getQueueStats.METADATA,
        template: getQueueStats.METADATA.path,
        path: getQueueStats.path(),
    });
}
exports.getQueueStats = getQueueStats;
(function (getQueueStats) {
    getQueueStats.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/sync/queue/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getQueueStats.path = () => "/shop/omnichannel/sync/queue/stats";
})(getQueueStats || (exports.getQueueStats = getQueueStats = {}));
//# sourceMappingURL=index.js.map