"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesByCategory = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function salesByCategory(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...salesByCategory.METADATA,
        template: salesByCategory.METADATA.path,
        path: salesByCategory.path(query),
    });
}
exports.salesByCategory = salesByCategory;
(function (salesByCategory) {
    salesByCategory.METADATA = {
        method: "GET",
        path: "/shop/analytics/categories-selling",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    salesByCategory.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/categories-selling";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(salesByCategory || (exports.salesByCategory = salesByCategory = {}));
//# sourceMappingURL=index.js.map