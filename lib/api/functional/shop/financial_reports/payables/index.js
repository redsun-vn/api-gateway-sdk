"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayables = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPayables(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPayables.METADATA,
        template: getPayables.METADATA.path,
        path: getPayables.path(query),
    });
}
exports.getPayables = getPayables;
(function (getPayables) {
    getPayables.METADATA = {
        method: "GET",
        path: "/shop/financial-reports/payables",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPayables.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/financial-reports/payables";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPayables || (exports.getPayables = getPayables = {}));
//# sourceMappingURL=index.js.map