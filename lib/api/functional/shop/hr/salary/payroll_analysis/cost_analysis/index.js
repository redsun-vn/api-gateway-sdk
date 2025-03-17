"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllByCostAnalysis = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllByCostAnalysis(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllByCostAnalysis.METADATA,
        template: findAllByCostAnalysis.METADATA.path,
        path: findAllByCostAnalysis.path(query),
    });
}
exports.findAllByCostAnalysis = findAllByCostAnalysis;
(function (findAllByCostAnalysis) {
    findAllByCostAnalysis.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/payroll-analysis/cost-analysis",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllByCostAnalysis.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/payroll-analysis/cost-analysis";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllByCostAnalysis || (exports.findAllByCostAnalysis = findAllByCostAnalysis = {}));
//# sourceMappingURL=index.js.map