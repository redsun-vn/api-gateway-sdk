"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revenueTrend = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function revenueTrend(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revenueTrend.METADATA,
        template: revenueTrend.METADATA.path,
        path: revenueTrend.path(query),
    });
}
exports.revenueTrend = revenueTrend;
(function (revenueTrend) {
    revenueTrend.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/revenue-trend",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    revenueTrend.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/revenue-trend";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(revenueTrend || (exports.revenueTrend = revenueTrend = {}));
//# sourceMappingURL=index.js.map