"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBankListForSubscription = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getBankListForSubscription(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getBankListForSubscription.METADATA,
        template: getBankListForSubscription.METADATA.path,
        path: getBankListForSubscription.path(),
    });
}
exports.getBankListForSubscription = getBankListForSubscription;
(function (getBankListForSubscription) {
    getBankListForSubscription.METADATA = {
        method: "GET",
        path: "/shop/vnpay-web/bank-list-for-subscription",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getBankListForSubscription.path = () => "/shop/vnpay-web/bank-list-for-subscription";
})(getBankListForSubscription || (exports.getBankListForSubscription = getBankListForSubscription = {}));
//# sourceMappingURL=index.js.map