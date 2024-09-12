"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRevenueExport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function orderRevenueExport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...orderRevenueExport.METADATA,
        template: orderRevenueExport.METADATA.path,
        path: orderRevenueExport.path(query),
    });
}
exports.orderRevenueExport = orderRevenueExport;
(function (orderRevenueExport) {
    orderRevenueExport.METADATA = {
        method: "GET",
        path: "/shop/report/order-revenues/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    orderRevenueExport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/order-revenues/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(orderRevenueExport || (exports.orderRevenueExport = orderRevenueExport = {}));
//# sourceMappingURL=index.js.map