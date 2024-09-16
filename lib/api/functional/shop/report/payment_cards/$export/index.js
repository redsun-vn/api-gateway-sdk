"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentCardExport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function paymentCardExport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...paymentCardExport.METADATA,
        template: paymentCardExport.METADATA.path,
        path: paymentCardExport.path(query),
    });
}
exports.paymentCardExport = paymentCardExport;
(function (paymentCardExport) {
    paymentCardExport.METADATA = {
        method: "GET",
        path: "/shop/report/payment-cards/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    paymentCardExport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/payment-cards/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(paymentCardExport || (exports.paymentCardExport = paymentCardExport = {}));
//# sourceMappingURL=index.js.map