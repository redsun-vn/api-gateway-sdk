"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statistics = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function statistics(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...statistics.METADATA,
        template: statistics.METADATA.path,
        path: statistics.path(query),
    });
}
exports.statistics = statistics;
(function (statistics) {
    statistics.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/orders/mapping/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    statistics.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/omnichannel/orders/mapping/stats";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(statistics || (exports.statistics = statistics = {}));
//# sourceMappingURL=index.js.map