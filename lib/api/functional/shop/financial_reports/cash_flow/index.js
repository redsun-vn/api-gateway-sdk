"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCashFlow = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getCashFlow(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getCashFlow.METADATA,
        template: getCashFlow.METADATA.path,
        path: getCashFlow.path(query),
    });
}
exports.getCashFlow = getCashFlow;
(function (getCashFlow) {
    getCashFlow.METADATA = {
        method: "GET",
        path: "/shop/financial-reports/cash-flow",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getCashFlow.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/financial-reports/cash-flow";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getCashFlow || (exports.getCashFlow = getCashFlow = {}));
//# sourceMappingURL=index.js.map