"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrends = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getTrends(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getTrends.METADATA,
        template: getTrends.METADATA.path,
        path: getTrends.path(query),
    });
}
exports.getTrends = getTrends;
(function (getTrends) {
    getTrends.METADATA = {
        method: "GET",
        path: "/shop/reservation/dashboard/trends",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getTrends.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reservation/dashboard/trends";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getTrends || (exports.getTrends = getTrends = {}));
//# sourceMappingURL=index.js.map