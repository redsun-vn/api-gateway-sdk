"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProfitExport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function orderProfitExport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...orderProfitExport.METADATA,
        template: orderProfitExport.METADATA.path,
        path: orderProfitExport.path(query),
    });
}
exports.orderProfitExport = orderProfitExport;
(function (orderProfitExport) {
    orderProfitExport.METADATA = {
        method: "GET",
        path: "/shop/report/order-profits/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    orderProfitExport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/order-profits/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(orderProfitExport || (exports.orderProfitExport = orderProfitExport = {}));
//# sourceMappingURL=index.js.map