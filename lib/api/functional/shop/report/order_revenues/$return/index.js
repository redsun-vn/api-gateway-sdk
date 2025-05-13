"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderReturn = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function orderReturn(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...orderReturn.METADATA,
        template: orderReturn.METADATA.path,
        path: orderReturn.path(query),
    });
}
exports.orderReturn = orderReturn;
(function (orderReturn) {
    orderReturn.METADATA = {
        method: "GET",
        path: "/shop/report/order-revenues/return",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    orderReturn.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/order-revenues/return";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(orderReturn || (exports.orderReturn = orderReturn = {}));
//# sourceMappingURL=index.js.map