"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCustomerCount = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function newCustomerCount(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...newCustomerCount.METADATA,
        template: newCustomerCount.METADATA.path,
        path: newCustomerCount.path(query),
    });
}
exports.newCustomerCount = newCustomerCount;
(function (newCustomerCount) {
    newCustomerCount.METADATA = {
        method: "GET",
        path: "/shop/analytics/partner",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    newCustomerCount.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/partner";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(newCustomerCount || (exports.newCustomerCount = newCustomerCount = {}));
//# sourceMappingURL=index.js.map