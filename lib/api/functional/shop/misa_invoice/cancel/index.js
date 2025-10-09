"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelInvoice = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function cancelInvoice(connection, orderId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...cancelInvoice.METADATA,
        template: cancelInvoice.METADATA.path,
        path: cancelInvoice.path(orderId),
    }, data);
}
exports.cancelInvoice = cancelInvoice;
(function (cancelInvoice) {
    cancelInvoice.METADATA = {
        method: "POST",
        path: "/shop/misa-invoice/cancel/:orderId",
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
    cancelInvoice.path = (orderId) => `/shop/misa-invoice/cancel/${encodeURIComponent(orderId?.toString() ?? "null")}`;
})(cancelInvoice || (exports.cancelInvoice = cancelInvoice = {}));
//# sourceMappingURL=index.js.map