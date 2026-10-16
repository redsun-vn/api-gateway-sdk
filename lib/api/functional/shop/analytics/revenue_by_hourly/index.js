"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revenueByHour = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function revenueByHour(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revenueByHour.METADATA,
        template: revenueByHour.METADATA.path,
        path: revenueByHour.path(query),
    });
}
exports.revenueByHour = revenueByHour;
(function (revenueByHour) {
    revenueByHour.METADATA = {
        method: "GET",
        path: "/shop/analytics/revenue-by-hourly",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    revenueByHour.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/revenue-by-hourly";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(revenueByHour || (exports.revenueByHour = revenueByHour = {}));
//# sourceMappingURL=index.js.map