"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderCancelReasons = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getOrderCancelReasons(connection, provider, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOrderCancelReasons.METADATA,
        template: getOrderCancelReasons.METADATA.path,
        path: getOrderCancelReasons.path(provider, query),
    });
}
exports.getOrderCancelReasons = getOrderCancelReasons;
(function (getOrderCancelReasons) {
    getOrderCancelReasons.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/:provider/orders/cancel-reasons",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOrderCancelReasons.path = (provider, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/omnichannel/${encodeURIComponent(provider?.toString() ?? "null")}/orders/cancel-reasons`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getOrderCancelReasons || (exports.getOrderCancelReasons = getOrderCancelReasons = {}));
//# sourceMappingURL=index.js.map