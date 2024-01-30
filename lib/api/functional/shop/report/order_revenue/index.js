"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function summary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...summary.METADATA,
        path: summary.path(query),
    });
}
exports.summary = summary;
(function (summary) {
    summary.METADATA = {
        method: "GET",
        path: "/shop/report/order-revenue/summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    summary.path = (query) => {
        const variables = query;
        const search = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded = search.toString();
        return `/shop/report/order-revenue/summary${encoded.length ? `?${encoded}` : ""}`;
        ;
    };
})(summary || (exports.summary = summary = {}));
//# sourceMappingURL=index.js.map