"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getStats(connection, tableId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getStats.METADATA,
        template: getStats.METADATA.path,
        path: getStats.path(tableId),
    });
}
exports.getStats = getStats;
(function (getStats) {
    getStats.METADATA = {
        method: "GET",
        path: "/shop/reservation/table_stats/:tableId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getStats.path = (tableId) => `/shop/reservation/table_stats/${encodeURIComponent(tableId?.toString() ?? "null")}`;
})(getStats || (exports.getStats = getStats = {}));
//# sourceMappingURL=index.js.map