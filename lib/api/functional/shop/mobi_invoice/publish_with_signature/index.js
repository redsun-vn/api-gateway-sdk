"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishInvoiceWithSignature = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function publishInvoiceWithSignature(connection, orderId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...publishInvoiceWithSignature.METADATA,
        template: publishInvoiceWithSignature.METADATA.path,
        path: publishInvoiceWithSignature.path(orderId),
    }, data);
}
exports.publishInvoiceWithSignature = publishInvoiceWithSignature;
(function (publishInvoiceWithSignature) {
    publishInvoiceWithSignature.METADATA = {
        method: "POST",
        path: "/shop/mobi-invoice/publish-with-signature/:orderId",
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
    publishInvoiceWithSignature.path = (orderId) => `/shop/mobi-invoice/publish-with-signature/${encodeURIComponent(orderId?.toString() ?? "null")}`;
})(publishInvoiceWithSignature || (exports.publishInvoiceWithSignature = publishInvoiceWithSignature = {}));
//# sourceMappingURL=index.js.map