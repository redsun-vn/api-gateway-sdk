"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCompleted = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findCompleted(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findCompleted.METADATA,
        path: findCompleted.path(query),
    });
}
exports.findCompleted = findCompleted;
(function (findCompleted) {
    findCompleted.METADATA = {
        method: "GET",
        path: "/shop/report/order-profits",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findCompleted.path = (query) => {
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
        return `/shop/report/order-profits${encoded.length ? `?${encoded}` : ""}`;
        ;
    };
})(findCompleted || (exports.findCompleted = findCompleted = {}));
//# sourceMappingURL=index.js.map