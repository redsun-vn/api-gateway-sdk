"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findInvoiceTemplates = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findInvoiceTemplates(connection, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findInvoiceTemplates.METADATA,
        template: findInvoiceTemplates.METADATA.path,
        path: findInvoiceTemplates.path(shopId),
    });
}
exports.findInvoiceTemplates = findInvoiceTemplates;
(function (findInvoiceTemplates) {
    findInvoiceTemplates.METADATA = {
        method: "GET",
        path: "/shop/e-invoice/:shopId/invoice-templates",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findInvoiceTemplates.path = (shopId) => `/shop/e-invoice/${encodeURIComponent(shopId?.toString() ?? "null")}/invoice-templates`;
})(findInvoiceTemplates || (exports.findInvoiceTemplates = findInvoiceTemplates = {}));
//# sourceMappingURL=index.js.map