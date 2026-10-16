"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revenueSummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function revenueSummary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revenueSummary.METADATA,
        template: revenueSummary.METADATA.path,
        path: revenueSummary.path(query),
    });
}
exports.revenueSummary = revenueSummary;
(function (revenueSummary) {
    revenueSummary.METADATA = {
        method: "GET",
        path: "/shop/analytics/order-revenue/summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    revenueSummary.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/order-revenue/summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(revenueSummary || (exports.revenueSummary = revenueSummary = {}));
//# sourceMappingURL=index.js.map