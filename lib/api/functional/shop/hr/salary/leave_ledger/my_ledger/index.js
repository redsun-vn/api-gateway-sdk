"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myLedger = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function myLedger(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...myLedger.METADATA,
        template: myLedger.METADATA.path,
        path: myLedger.path(query),
    });
}
exports.myLedger = myLedger;
(function (myLedger) {
    myLedger.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/leave-ledger/my-ledger",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    myLedger.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/leave-ledger/my-ledger";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(myLedger || (exports.myLedger = myLedger = {}));
//# sourceMappingURL=index.js.map