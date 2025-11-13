"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatistics = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getStatistics(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getStatistics.METADATA,
        template: getStatistics.METADATA.path,
        path: getStatistics.path(query),
    });
}
exports.getStatistics = getStatistics;
(function (getStatistics) {
    getStatistics.METADATA = {
        method: "GET",
        path: "/shop/ratings/statistics",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getStatistics.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/ratings/statistics";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getStatistics || (exports.getStatistics = getStatistics = {}));
//# sourceMappingURL=index.js.map