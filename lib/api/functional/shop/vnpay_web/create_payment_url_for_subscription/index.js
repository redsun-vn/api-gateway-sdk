"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentURLForSubscription = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createPaymentURLForSubscription(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createPaymentURLForSubscription.METADATA,
        template: createPaymentURLForSubscription.METADATA.path,
        path: createPaymentURLForSubscription.path(),
    }, data);
}
exports.createPaymentURLForSubscription = createPaymentURLForSubscription;
(function (createPaymentURLForSubscription) {
    createPaymentURLForSubscription.METADATA = {
        method: "POST",
        path: "/shop/vnpay-web/create-payment-url-for-subscription",
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
    createPaymentURLForSubscription.path = () => "/shop/vnpay-web/create-payment-url-for-subscription";
})(createPaymentURLForSubscription || (exports.createPaymentURLForSubscription = createPaymentURLForSubscription = {}));
//# sourceMappingURL=index.js.map