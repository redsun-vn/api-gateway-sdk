"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOperationalPerformance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getOperationalPerformance(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOperationalPerformance.METADATA,
        template: getOperationalPerformance.METADATA.path,
        path: getOperationalPerformance.path(query),
    });
}
exports.getOperationalPerformance = getOperationalPerformance;
(function (getOperationalPerformance) {
    getOperationalPerformance.METADATA = {
        method: "GET",
        path: "/shop/report/operational-performance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOperationalPerformance.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/operational-performance";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getOperationalPerformance || (exports.getOperationalPerformance = getOperationalPerformance = {}));
//# sourceMappingURL=index.js.map