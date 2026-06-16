"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPerformance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPerformance(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPerformance.METADATA,
        template: getPerformance.METADATA.path,
        path: getPerformance.path(query),
    });
}
exports.getPerformance = getPerformance;
(function (getPerformance) {
    getPerformance.METADATA = {
        method: "GET",
        path: "/shop/product/report/performance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPerformance.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/product/report/performance";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPerformance || (exports.getPerformance = getPerformance = {}));
//# sourceMappingURL=index.js.map