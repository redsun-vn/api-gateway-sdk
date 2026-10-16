"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topSellingProducts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function topSellingProducts(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...topSellingProducts.METADATA,
        template: topSellingProducts.METADATA.path,
        path: topSellingProducts.path(query),
    });
}
exports.topSellingProducts = topSellingProducts;
(function (topSellingProducts) {
    topSellingProducts.METADATA = {
        method: "GET",
        path: "/shop/analytics/top-selling",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    topSellingProducts.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/top-selling";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(topSellingProducts || (exports.topSellingProducts = topSellingProducts = {}));
//# sourceMappingURL=index.js.map