"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPointTransactions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPointTransactions(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPointTransactions.METADATA,
        template: getPointTransactions.METADATA.path,
        path: getPointTransactions.path(query),
    });
}
exports.getPointTransactions = getPointTransactions;
(function (getPointTransactions) {
    getPointTransactions.METADATA = {
        method: "GET",
        path: "/shop/loyalty-report/point-transactions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPointTransactions.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/loyalty-report/point-transactions";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPointTransactions || (exports.getPointTransactions = getPointTransactions = {}));
//# sourceMappingURL=index.js.map