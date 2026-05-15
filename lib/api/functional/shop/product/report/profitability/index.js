"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfitability = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProfitability(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProfitability.METADATA,
        template: getProfitability.METADATA.path,
        path: getProfitability.path(query),
    });
}
exports.getProfitability = getProfitability;
(function (getProfitability) {
    getProfitability.METADATA = {
        method: "GET",
        path: "/shop/product/report/profitability",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProfitability.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/product/report/profitability";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getProfitability || (exports.getProfitability = getProfitability = {}));
//# sourceMappingURL=index.js.map