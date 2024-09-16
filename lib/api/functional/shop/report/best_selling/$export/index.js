"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productBestSellingExport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function productBestSellingExport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...productBestSellingExport.METADATA,
        template: productBestSellingExport.METADATA.path,
        path: productBestSellingExport.path(query),
    });
}
exports.productBestSellingExport = productBestSellingExport;
(function (productBestSellingExport) {
    productBestSellingExport.METADATA = {
        method: "GET",
        path: "/shop/report/best-selling/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    productBestSellingExport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/best-selling/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(productBestSellingExport || (exports.productBestSellingExport = productBestSellingExport = {}));
//# sourceMappingURL=index.js.map