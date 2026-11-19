"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function mySummary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...mySummary.METADATA,
        template: mySummary.METADATA.path,
        path: mySummary.path(query),
    });
}
exports.mySummary = mySummary;
(function (mySummary) {
    mySummary.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/my-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    mySummary.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/my-summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(mySummary || (exports.mySummary = mySummary = {}));
//# sourceMappingURL=index.js.map