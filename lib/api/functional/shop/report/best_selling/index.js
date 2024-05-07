"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productBestSelling = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function productBestSelling(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...productBestSelling.METADATA,
        path: productBestSelling.path(query),
    });
}
exports.productBestSelling = productBestSelling;
(function (productBestSelling) {
    productBestSelling.METADATA = {
        method: "GET",
        path: "/shop/report/best-selling",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    productBestSelling.path = (query) => {
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
        return `/shop/report/best-selling${encoded.length ? `?${encoded}` : ""}`;
        ;
    };
})(productBestSelling || (exports.productBestSelling = productBestSelling = {}));
//# sourceMappingURL=index.js.map