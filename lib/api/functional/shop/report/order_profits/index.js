"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCompleted = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findCompleted(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findCompleted.METADATA,
        template: findCompleted.METADATA.path,
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
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/order-profits";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findCompleted || (exports.findCompleted = findCompleted = {}));
//# sourceMappingURL=index.js.map