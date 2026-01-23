"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function stats(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...stats.METADATA,
        template: stats.METADATA.path,
        path: stats.path(query),
    });
}
exports.stats = stats;
(function (stats) {
    stats.METADATA = {
        method: "GET",
        path: "/admin/receipts_stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    stats.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/receipts_stats";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(stats || (exports.stats = stats = {}));
//# sourceMappingURL=index.js.map