"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceBulk = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function balanceBulk(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...balanceBulk.METADATA,
        template: balanceBulk.METADATA.path,
        path: balanceBulk.path(),
    }, body);
}
exports.balanceBulk = balanceBulk;
(function (balanceBulk) {
    balanceBulk.METADATA = {
        method: "POST",
        path: "/shop/hr/salary/leave-ledger/balance-bulk",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    balanceBulk.path = () => "/shop/hr/salary/leave-ledger/balance-bulk";
})(balanceBulk || (exports.balanceBulk = balanceBulk = {}));
//# sourceMappingURL=index.js.map