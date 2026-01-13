"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryDistribution = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getCategoryDistribution(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getCategoryDistribution.METADATA,
        template: getCategoryDistribution.METADATA.path,
        path: getCategoryDistribution.path(query),
    });
}
exports.getCategoryDistribution = getCategoryDistribution;
(function (getCategoryDistribution) {
    getCategoryDistribution.METADATA = {
        method: "GET",
        path: "/shop/product/report/category-distribution",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getCategoryDistribution.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/product/report/category-distribution";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getCategoryDistribution || (exports.getCategoryDistribution = getCategoryDistribution = {}));
//# sourceMappingURL=index.js.map