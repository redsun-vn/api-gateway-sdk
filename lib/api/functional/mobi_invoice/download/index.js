"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadInvoicePDF = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function downloadInvoicePDF(connection, orderId, params) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...downloadInvoicePDF.METADATA,
        template: downloadInvoicePDF.METADATA.path,
        path: downloadInvoicePDF.path(orderId, params),
    });
}
exports.downloadInvoicePDF = downloadInvoicePDF;
(function (downloadInvoicePDF) {
    downloadInvoicePDF.METADATA = {
        method: "GET",
        path: "/mobi-invoice/:orderId/download",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    downloadInvoicePDF.path = (orderId, params) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(params))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/mobi-invoice/${encodeURIComponent(orderId?.toString() ?? "null")}/download`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(downloadInvoicePDF || (exports.downloadInvoicePDF = downloadInvoicePDF = {}));
//# sourceMappingURL=index.js.map