"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpiringStock = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getExpiringStock(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getExpiringStock.METADATA,
        template: getExpiringStock.METADATA.path,
        path: getExpiringStock.path(query),
    });
}
exports.getExpiringStock = getExpiringStock;
(function (getExpiringStock) {
    getExpiringStock.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/expiring-stock",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getExpiringStock.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/expiring-stock";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getExpiringStock || (exports.getExpiringStock = getExpiringStock = {}));
//# sourceMappingURL=index.js.map