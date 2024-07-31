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
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/best-selling";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(productBestSelling || (exports.productBestSelling = productBestSelling = {}));
//# sourceMappingURL=index.js.map