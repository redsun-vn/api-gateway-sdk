"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getBalance(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getBalance.METADATA,
        template: getBalance.METADATA.path,
        path: getBalance.path(),
    });
}
exports.getBalance = getBalance;
(function (getBalance) {
    getBalance.METADATA = {
        method: "GET",
        path: "/shop/ai/credit/balance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getBalance.path = () => "/shop/ai/credit/balance";
})(getBalance || (exports.getBalance = getBalance = {}));
//# sourceMappingURL=index.js.map