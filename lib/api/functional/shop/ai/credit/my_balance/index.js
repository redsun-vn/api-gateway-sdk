"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyBalance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMyBalance(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMyBalance.METADATA,
        template: getMyBalance.METADATA.path,
        path: getMyBalance.path(),
    });
}
exports.getMyBalance = getMyBalance;
(function (getMyBalance) {
    getMyBalance.METADATA = {
        method: "GET",
        path: "/shop/ai/credit/my-balance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMyBalance.path = () => "/shop/ai/credit/my-balance";
})(getMyBalance || (exports.getMyBalance = getMyBalance = {}));
//# sourceMappingURL=index.js.map