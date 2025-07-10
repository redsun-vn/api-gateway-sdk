"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFee = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function orderFee(connection, shippingCode, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...orderFee.METADATA,
        template: orderFee.METADATA.path,
        path: orderFee.path(shippingCode),
    }, data);
}
exports.orderFee = orderFee;
(function (orderFee) {
    orderFee.METADATA = {
        method: "POST",
        path: "/public/shipping-providers/:shippingCode/order-fee",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    orderFee.path = (shippingCode) => `/public/shipping-providers/${encodeURIComponent(shippingCode?.toString() ?? "null")}/order-fee`;
})(orderFee || (exports.orderFee = orderFee = {}));
//# sourceMappingURL=index.js.map