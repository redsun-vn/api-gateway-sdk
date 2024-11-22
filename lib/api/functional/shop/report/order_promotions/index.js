"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderPromotionReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function orderPromotionReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...orderPromotionReport.METADATA,
        template: orderPromotionReport.METADATA.path,
        path: orderPromotionReport.path(query),
    });
}
exports.orderPromotionReport = orderPromotionReport;
(function (orderPromotionReport) {
    orderPromotionReport.METADATA = {
        method: "GET",
        path: "/shop/report/order-promotions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    orderPromotionReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/order-promotions";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(orderPromotionReport || (exports.orderPromotionReport = orderPromotionReport = {}));
//# sourceMappingURL=index.js.map