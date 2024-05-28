"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffBestSelling = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function staffBestSelling(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...staffBestSelling.METADATA,
        path: staffBestSelling.path(query),
    });
}
exports.staffBestSelling = staffBestSelling;
(function (staffBestSelling) {
    staffBestSelling.METADATA = {
        method: "GET",
        path: "/shop/report/payment-cards",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    staffBestSelling.path = (query) => {
        const variables = query;
        const search = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded = search.toString();
        return `/shop/report/payment-cards${encoded.length ? `?${encoded}` : ""}`;
        ;
    };
})(staffBestSelling || (exports.staffBestSelling = staffBestSelling = {}));
//# sourceMappingURL=index.js.map