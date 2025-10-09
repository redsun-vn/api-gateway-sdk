"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoiceTemplates = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getInvoiceTemplates(connection, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getInvoiceTemplates.METADATA,
        template: getInvoiceTemplates.METADATA.path,
        path: getInvoiceTemplates.path(shopId),
    });
}
exports.getInvoiceTemplates = getInvoiceTemplates;
(function (getInvoiceTemplates) {
    getInvoiceTemplates.METADATA = {
        method: "GET",
        path: "/shop/mobi-invoice/:shopId/templates",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getInvoiceTemplates.path = (shopId) => `/shop/mobi-invoice/${encodeURIComponent(shopId?.toString() ?? "null")}/templates`;
})(getInvoiceTemplates || (exports.getInvoiceTemplates = getInvoiceTemplates = {}));
//# sourceMappingURL=index.js.map