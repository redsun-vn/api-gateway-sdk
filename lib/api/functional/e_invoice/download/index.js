"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadInvoice = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function downloadInvoice(connection, orderId, params) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...downloadInvoice.METADATA,
        template: downloadInvoice.METADATA.path,
        path: downloadInvoice.path(orderId, params),
    });
}
exports.downloadInvoice = downloadInvoice;
(function (downloadInvoice) {
    downloadInvoice.METADATA = {
        method: "GET",
        path: "/e-invoice/:orderId/download",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    downloadInvoice.path = (orderId, params) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(params))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/e-invoice/${encodeURIComponent(orderId?.toString() ?? "null")}/download`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(downloadInvoice || (exports.downloadInvoice = downloadInvoice = {}));
//# sourceMappingURL=index.js.map