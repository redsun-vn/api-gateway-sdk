"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function checkStats(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...checkStats.METADATA,
        path: checkStats.path(),
    });
}
exports.checkStats = checkStats;
(function (checkStats) {
    checkStats.METADATA = {
        method: "GET",
        path: "/shop/subscriptions/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    checkStats.path = () => "/shop/subscriptions/stats";
})(checkStats || (exports.checkStats = checkStats = {}));
//# sourceMappingURL=index.js.map