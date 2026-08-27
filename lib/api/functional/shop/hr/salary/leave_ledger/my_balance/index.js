"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myBalance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function myBalance(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...myBalance.METADATA,
        template: myBalance.METADATA.path,
        path: myBalance.path(query),
    });
}
exports.myBalance = myBalance;
(function (myBalance) {
    myBalance.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/leave-ledger/my-balance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    myBalance.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/leave-ledger/my-balance";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(myBalance || (exports.myBalance = myBalance = {}));
//# sourceMappingURL=index.js.map