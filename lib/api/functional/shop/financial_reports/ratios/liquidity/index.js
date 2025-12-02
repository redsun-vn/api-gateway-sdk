"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiquidityRatios = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getLiquidityRatios(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getLiquidityRatios.METADATA,
        template: getLiquidityRatios.METADATA.path,
        path: getLiquidityRatios.path(query),
    });
}
exports.getLiquidityRatios = getLiquidityRatios;
(function (getLiquidityRatios) {
    getLiquidityRatios.METADATA = {
        method: "GET",
        path: "/shop/financial-reports/ratios/liquidity",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getLiquidityRatios.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/financial-reports/ratios/liquidity";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getLiquidityRatios || (exports.getLiquidityRatios = getLiquidityRatios = {}));
//# sourceMappingURL=index.js.map