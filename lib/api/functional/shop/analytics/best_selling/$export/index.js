"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bestSellingVariantsExport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bestSellingVariantsExport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...bestSellingVariantsExport.METADATA,
        template: bestSellingVariantsExport.METADATA.path,
        path: bestSellingVariantsExport.path(query),
    });
}
exports.bestSellingVariantsExport = bestSellingVariantsExport;
(function (bestSellingVariantsExport) {
    bestSellingVariantsExport.METADATA = {
        method: "GET",
        path: "/shop/analytics/best-selling/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    bestSellingVariantsExport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/best-selling/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(bestSellingVariantsExport || (exports.bestSellingVariantsExport = bestSellingVariantsExport = {}));
//# sourceMappingURL=index.js.map