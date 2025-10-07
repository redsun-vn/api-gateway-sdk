"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEInvoiceStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getEInvoiceStatus(connection, orderId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getEInvoiceStatus.METADATA,
        template: getEInvoiceStatus.METADATA.path,
        path: getEInvoiceStatus.path(orderId),
    });
}
exports.getEInvoiceStatus = getEInvoiceStatus;
(function (getEInvoiceStatus) {
    getEInvoiceStatus.METADATA = {
        method: "GET",
        path: "/shop/e-invoice/:orderId/status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getEInvoiceStatus.path = (orderId) => `/shop/e-invoice/${encodeURIComponent(orderId?.toString() ?? "null")}/status`;
})(getEInvoiceStatus || (exports.getEInvoiceStatus = getEInvoiceStatus = {}));
//# sourceMappingURL=index.js.map