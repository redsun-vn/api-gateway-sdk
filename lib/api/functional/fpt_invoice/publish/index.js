"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishInvoiceNormal = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function publishInvoiceNormal(connection, orderId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...publishInvoiceNormal.METADATA,
        template: publishInvoiceNormal.METADATA.path,
        path: publishInvoiceNormal.path(orderId),
    }, data);
}
exports.publishInvoiceNormal = publishInvoiceNormal;
(function (publishInvoiceNormal) {
    publishInvoiceNormal.METADATA = {
        method: "POST",
        path: "/fpt-invoice/publish/:orderId",
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
    publishInvoiceNormal.path = (orderId) => `/fpt-invoice/publish/${encodeURIComponent(orderId?.toString() ?? "null")}`;
})(publishInvoiceNormal || (exports.publishInvoiceNormal = publishInvoiceNormal = {}));
//# sourceMappingURL=index.js.map