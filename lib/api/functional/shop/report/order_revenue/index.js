"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function summary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...summary.METADATA,
        template: summary.METADATA.path,
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
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/order-revenue/summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(summary || (exports.summary = summary = {}));
//# sourceMappingURL=index.js.map