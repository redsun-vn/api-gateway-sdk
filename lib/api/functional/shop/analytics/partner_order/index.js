"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerOrderHistory = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function customerOrderHistory(connection, query, partnerId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...customerOrderHistory.METADATA,
        template: customerOrderHistory.METADATA.path,
        path: customerOrderHistory.path(query, partnerId),
    });
}
exports.customerOrderHistory = customerOrderHistory;
(function (customerOrderHistory) {
    customerOrderHistory.METADATA = {
        method: "GET",
        path: "/shop/analytics/partner-order/:partner_id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    customerOrderHistory.path = (query, partnerId) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/analytics/partner-order/${encodeURIComponent(partnerId?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(customerOrderHistory || (exports.customerOrderHistory = customerOrderHistory = {}));
//# sourceMappingURL=index.js.map