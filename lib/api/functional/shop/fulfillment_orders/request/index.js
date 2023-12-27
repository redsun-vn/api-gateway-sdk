"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestFulfillment = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function requestFulfillment(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...requestFulfillment.METADATA,
        path: requestFulfillment.path(id),
    }, data);
}
exports.requestFulfillment = requestFulfillment;
(function (requestFulfillment) {
    requestFulfillment.METADATA = {
        method: "POST",
        path: "/shop/fulfillment-orders/:id/request",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    requestFulfillment.path = (id) => {
        return `/shop/fulfillment-orders/${encodeURIComponent(id ?? "null")}/request`;
    };
})(requestFulfillment || (exports.requestFulfillment = requestFulfillment = {}));
//# sourceMappingURL=index.js.map