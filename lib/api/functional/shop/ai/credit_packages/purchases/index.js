"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseHistory = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function purchaseHistory(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...purchaseHistory.METADATA,
        template: purchaseHistory.METADATA.path,
        path: purchaseHistory.path(query),
    });
}
exports.purchaseHistory = purchaseHistory;
(function (purchaseHistory) {
    purchaseHistory.METADATA = {
        method: "GET",
        path: "/shop/ai/credit-packages/purchases",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    purchaseHistory.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/ai/credit-packages/purchases";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(purchaseHistory || (exports.purchaseHistory = purchaseHistory = {}));
//# sourceMappingURL=index.js.map