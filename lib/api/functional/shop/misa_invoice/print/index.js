"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printInvoice = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function printInvoice(connection, orderId, params) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...printInvoice.METADATA,
        template: printInvoice.METADATA.path,
        path: printInvoice.path(orderId, params),
    });
}
exports.printInvoice = printInvoice;
(function (printInvoice) {
    printInvoice.METADATA = {
        method: "GET",
        path: "/shop/misa-invoice/:orderId/print",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    printInvoice.path = (orderId, params) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(params))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/misa-invoice/${encodeURIComponent(orderId?.toString() ?? "null")}/print`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(printInvoice || (exports.printInvoice = printInvoice = {}));
//# sourceMappingURL=index.js.map