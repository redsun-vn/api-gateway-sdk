"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComparison = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getComparison(connection, tableId, filter) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getComparison.METADATA,
        template: getComparison.METADATA.path,
        path: getComparison.path(tableId, filter),
    });
}
exports.getComparison = getComparison;
(function (getComparison) {
    getComparison.METADATA = {
        method: "GET",
        path: "/shop/reservation/table_stats_comparison/:tableId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getComparison.path = (tableId, filter) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(filter))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/reservation/table_stats_comparison/${encodeURIComponent(tableId?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getComparison || (exports.getComparison = getComparison = {}));
//# sourceMappingURL=index.js.map