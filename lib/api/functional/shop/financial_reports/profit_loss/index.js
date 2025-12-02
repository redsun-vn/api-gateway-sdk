"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfitLoss = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProfitLoss(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProfitLoss.METADATA,
        template: getProfitLoss.METADATA.path,
        path: getProfitLoss.path(query),
    });
}
exports.getProfitLoss = getProfitLoss;
(function (getProfitLoss) {
    getProfitLoss.METADATA = {
        method: "GET",
        path: "/shop/financial-reports/profit-loss",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProfitLoss.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/financial-reports/profit-loss";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getProfitLoss || (exports.getProfitLoss = getProfitLoss = {}));
//# sourceMappingURL=index.js.map