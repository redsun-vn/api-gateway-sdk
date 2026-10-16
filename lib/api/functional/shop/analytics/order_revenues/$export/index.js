"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revenueByPeriodExport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function revenueByPeriodExport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revenueByPeriodExport.METADATA,
        template: revenueByPeriodExport.METADATA.path,
        path: revenueByPeriodExport.path(query),
    });
}
exports.revenueByPeriodExport = revenueByPeriodExport;
(function (revenueByPeriodExport) {
    revenueByPeriodExport.METADATA = {
        method: "GET",
        path: "/shop/analytics/order-revenues/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    revenueByPeriodExport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/order-revenues/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(revenueByPeriodExport || (exports.revenueByPeriodExport = revenueByPeriodExport = {}));
//# sourceMappingURL=index.js.map