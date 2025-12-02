"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReceivables = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getReceivables(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getReceivables.METADATA,
        template: getReceivables.METADATA.path,
        path: getReceivables.path(query),
    });
}
exports.getReceivables = getReceivables;
(function (getReceivables) {
    getReceivables.METADATA = {
        method: "GET",
        path: "/shop/financial-reports/receivables",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getReceivables.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/financial-reports/receivables";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getReceivables || (exports.getReceivables = getReceivables = {}));
//# sourceMappingURL=index.js.map