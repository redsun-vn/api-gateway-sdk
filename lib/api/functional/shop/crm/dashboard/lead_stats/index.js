"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function leadStats(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...leadStats.METADATA,
        template: leadStats.METADATA.path,
        path: leadStats.path(query),
    });
}
exports.leadStats = leadStats;
(function (leadStats) {
    leadStats.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/lead-stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    leadStats.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/lead-stats";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(leadStats || (exports.leadStats = leadStats = {}));
//# sourceMappingURL=index.js.map