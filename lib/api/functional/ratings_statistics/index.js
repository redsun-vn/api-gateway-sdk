"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicStatistics = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPublicStatistics(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPublicStatistics.METADATA,
        template: getPublicStatistics.METADATA.path,
        path: getPublicStatistics.path(query),
    });
}
exports.getPublicStatistics = getPublicStatistics;
(function (getPublicStatistics) {
    getPublicStatistics.METADATA = {
        method: "GET",
        path: "/ratings-statistics",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPublicStatistics.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/ratings-statistics";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPublicStatistics || (exports.getPublicStatistics = getPublicStatistics = {}));
//# sourceMappingURL=index.js.map