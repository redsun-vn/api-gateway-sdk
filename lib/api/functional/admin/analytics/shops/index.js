"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopCreatedCount = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function shopCreatedCount(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...shopCreatedCount.METADATA,
        template: shopCreatedCount.METADATA.path,
        path: shopCreatedCount.path(query),
    });
}
exports.shopCreatedCount = shopCreatedCount;
(function (shopCreatedCount) {
    shopCreatedCount.METADATA = {
        method: "GET",
        path: "/admin/analytics/shops",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    shopCreatedCount.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/analytics/shops";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(shopCreatedCount || (exports.shopCreatedCount = shopCreatedCount = {}));
//# sourceMappingURL=index.js.map