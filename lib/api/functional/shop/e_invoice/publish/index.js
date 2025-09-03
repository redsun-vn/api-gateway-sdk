"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishInvoice = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function publishInvoice(connection, orderId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...publishInvoice.METADATA,
        template: publishInvoice.METADATA.path,
        path: publishInvoice.path(orderId),
    }, data);
}
exports.publishInvoice = publishInvoice;
(function (publishInvoice) {
    publishInvoice.METADATA = {
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
    publishInvoice.path = (orderId) => `/shop/e-invoice/publish/${encodeURIComponent(orderId?.toString() ?? "null")}`;
})(publishInvoice || (exports.publishInvoice = publishInvoice = {}));
//# sourceMappingURL=index.js.map