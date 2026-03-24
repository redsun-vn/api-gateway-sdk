"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getStats(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getStats.METADATA,
        template: getStats.METADATA.path,
        path: getStats.path(query),
    });
}
exports.getStats = getStats;
(function (getStats) {
    getStats.METADATA = {
        method: "GET",
        path: "/shop/ai/credit/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getStats.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/ai/credit/stats";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getStats || (exports.getStats = getStats = {}));
//# sourceMappingURL=index.js.map