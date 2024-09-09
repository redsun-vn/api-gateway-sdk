"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function checkStats(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...checkStats.METADATA,
        template: checkStats.METADATA.path,
        path: checkStats.path(id),
    });
}
exports.checkStats = checkStats;
(function (checkStats) {
    checkStats.METADATA = {
        method: "GET",
        path: "/shop/subscriptions/:id/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    checkStats.path = (id) => `/shop/subscriptions/${encodeURIComponent(id?.toString() ?? "null")}/stats`;
})(checkStats || (exports.checkStats = checkStats = {}));
//# sourceMappingURL=index.js.map