"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnhancedStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getEnhancedStats(connection, tableId, filter) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getEnhancedStats.METADATA,
        template: getEnhancedStats.METADATA.path,
        path: getEnhancedStats.path(tableId, filter),
    });
}
exports.getEnhancedStats = getEnhancedStats;
(function (getEnhancedStats) {
    getEnhancedStats.METADATA = {
        method: "GET",
        path: "/shop/reservation/tables/:tableId/stats/enhanced",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getEnhancedStats.path = (tableId, filter) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(filter))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/reservation/tables/${encodeURIComponent(tableId?.toString() ?? "null")}/stats/enhanced`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getEnhancedStats || (exports.getEnhancedStats = getEnhancedStats = {}));
//# sourceMappingURL=index.js.map