"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoCustomers = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function demoCustomers(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...demoCustomers.METADATA,
        template: demoCustomers.METADATA.path,
        path: demoCustomers.path(query),
    });
}
exports.demoCustomers = demoCustomers;
(function (demoCustomers) {
    demoCustomers.METADATA = {
        method: "GET",
        path: "/shop/crm/reports/metrics/demo-customers",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    demoCustomers.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/reports/metrics/demo-customers";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(demoCustomers || (exports.demoCustomers = demoCustomers = {}));
//# sourceMappingURL=index.js.map