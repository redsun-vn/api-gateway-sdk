"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPerformanceByHour = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPerformanceByHour(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPerformanceByHour.METADATA,
        template: getPerformanceByHour.METADATA.path,
        path: getPerformanceByHour.path(query),
    });
}
exports.getPerformanceByHour = getPerformanceByHour;
(function (getPerformanceByHour) {
    getPerformanceByHour.METADATA = {
        method: "GET",
        path: "/shop/report/kitchen/performance-by-hour",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPerformanceByHour.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/kitchen/performance-by-hour";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPerformanceByHour || (exports.getPerformanceByHour = getPerformanceByHour = {}));
//# sourceMappingURL=index.js.map