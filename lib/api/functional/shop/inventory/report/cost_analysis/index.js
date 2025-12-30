"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCostAnalysis = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getCostAnalysis(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getCostAnalysis.METADATA,
        template: getCostAnalysis.METADATA.path,
        path: getCostAnalysis.path(query),
    });
}
exports.getCostAnalysis = getCostAnalysis;
(function (getCostAnalysis) {
    getCostAnalysis.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/cost-analysis",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getCostAnalysis.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/cost-analysis";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getCostAnalysis || (exports.getCostAnalysis = getCostAnalysis = {}));
//# sourceMappingURL=index.js.map