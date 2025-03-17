"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllByTrend = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllByTrend(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllByTrend.METADATA,
        template: findAllByTrend.METADATA.path,
        path: findAllByTrend.path(query),
    });
}
exports.findAllByTrend = findAllByTrend;
(function (findAllByTrend) {
    findAllByTrend.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/payroll-analysis/trend",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllByTrend.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/payroll-analysis/trend";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllByTrend || (exports.findAllByTrend = findAllByTrend = {}));
//# sourceMappingURL=index.js.map