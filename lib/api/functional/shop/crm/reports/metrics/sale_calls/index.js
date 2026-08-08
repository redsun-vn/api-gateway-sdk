"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleCalls = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function saleCalls(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...saleCalls.METADATA,
        template: saleCalls.METADATA.path,
        path: saleCalls.path(query),
    });
}
exports.saleCalls = saleCalls;
(function (saleCalls) {
    saleCalls.METADATA = {
        method: "GET",
        path: "/shop/crm/reports/metrics/sale-calls",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    saleCalls.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/reports/metrics/sale-calls";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(saleCalls || (exports.saleCalls = saleCalls = {}));
//# sourceMappingURL=index.js.map