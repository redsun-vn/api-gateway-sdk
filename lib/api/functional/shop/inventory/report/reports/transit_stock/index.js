"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransitStock = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getTransitStock(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getTransitStock.METADATA,
        template: getTransitStock.METADATA.path,
        path: getTransitStock.path(query),
    });
}
exports.getTransitStock = getTransitStock;
(function (getTransitStock) {
    getTransitStock.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/reports/transit-stock",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getTransitStock.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/reports/transit-stock";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getTransitStock || (exports.getTransitStock = getTransitStock = {}));
//# sourceMappingURL=index.js.map