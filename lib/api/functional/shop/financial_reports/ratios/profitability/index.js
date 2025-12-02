"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfitabilityRatios = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProfitabilityRatios(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProfitabilityRatios.METADATA,
        template: getProfitabilityRatios.METADATA.path,
        path: getProfitabilityRatios.path(query),
    });
}
exports.getProfitabilityRatios = getProfitabilityRatios;
(function (getProfitabilityRatios) {
    getProfitabilityRatios.METADATA = {
        method: "GET",
        path: "/shop/financial-reports/ratios/profitability",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProfitabilityRatios.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/financial-reports/ratios/profitability";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getProfitabilityRatios || (exports.getProfitabilityRatios = getProfitabilityRatios = {}));
//# sourceMappingURL=index.js.map