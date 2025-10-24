"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishInvoiceForOrder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function publishInvoiceForOrder(connection, orderId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...publishInvoiceForOrder.METADATA,
        template: publishInvoiceForOrder.METADATA.path,
        path: publishInvoiceForOrder.path(orderId),
    }, data);
}
exports.publishInvoiceForOrder = publishInvoiceForOrder;
(function (publishInvoiceForOrder) {
    publishInvoiceForOrder.METADATA = {
        method: "POST",
        path: "/shop/e-invoice/publish/:orderId",
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
    publishInvoiceForOrder.path = (orderId) => `/shop/e-invoice/publish/${encodeURIComponent(orderId?.toString() ?? "null")}`;
})(publishInvoiceForOrder || (exports.publishInvoiceForOrder = publishInvoiceForOrder = {}));
//# sourceMappingURL=index.js.map