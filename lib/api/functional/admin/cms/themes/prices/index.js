"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPrices = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findPrices(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findPrices.METADATA,
        template: findPrices.METADATA.path,
        path: findPrices.path(query),
    });
}
exports.findPrices = findPrices;
(function (findPrices) {
    findPrices.METADATA = {
        method: "GET",
        path: "/admin/cms/themes/prices",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findPrices.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/cms/themes/prices";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findPrices || (exports.findPrices = findPrices = {}));
//# sourceMappingURL=index.js.map