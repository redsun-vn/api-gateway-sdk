"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getSummary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getSummary.METADATA,
        template: getSummary.METADATA.path,
        path: getSummary.path(query),
    });
}
exports.getSummary = getSummary;
(function (getSummary) {
    getSummary.METADATA = {
        method: "GET",
        path: "/shop/loyalty-report/summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getSummary.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/loyalty-report/summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getSummary || (exports.getSummary = getSummary = {}));
//# sourceMappingURL=index.js.map