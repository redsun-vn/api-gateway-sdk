"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negativeBalance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function negativeBalance(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...negativeBalance.METADATA,
        template: negativeBalance.METADATA.path,
        path: negativeBalance.path(query),
    });
}
exports.negativeBalance = negativeBalance;
(function (negativeBalance) {
    negativeBalance.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/leave-adjustment/negative-balance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    negativeBalance.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/leave-adjustment/negative-balance";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(negativeBalance || (exports.negativeBalance = negativeBalance = {}));
//# sourceMappingURL=index.js.map