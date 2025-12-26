"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revenueByHourly = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function revenueByHourly(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revenueByHourly.METADATA,
        template: revenueByHourly.METADATA.path,
        path: revenueByHourly.path(query),
    });
}
exports.revenueByHourly = revenueByHourly;
(function (revenueByHourly) {
    revenueByHourly.METADATA = {
        method: "GET",
        path: "/shop/report/revenue-by-hourly",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    revenueByHourly.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/revenue-by-hourly";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(revenueByHourly || (exports.revenueByHourly = revenueByHourly = {}));
//# sourceMappingURL=index.js.map