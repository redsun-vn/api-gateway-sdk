"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllBySummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllBySummary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllBySummary.METADATA,
        template: findAllBySummary.METADATA.path,
        path: findAllBySummary.path(query),
    });
}
exports.findAllBySummary = findAllBySummary;
(function (findAllBySummary) {
    findAllBySummary.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/payroll-analysis/summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllBySummary.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/payroll-analysis/summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllBySummary || (exports.findAllBySummary = findAllBySummary = {}));
//# sourceMappingURL=index.js.map