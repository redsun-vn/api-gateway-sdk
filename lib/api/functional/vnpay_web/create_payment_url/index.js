"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentURL = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createPaymentURL(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createPaymentURL.METADATA,
        template: createPaymentURL.METADATA.path,
        path: createPaymentURL.path(),
    }, data);
}
exports.createPaymentURL = createPaymentURL;
(function (createPaymentURL) {
    createPaymentURL.METADATA = {
        method: "POST",
        path: "/vnpay-web/create-payment-url",
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
    createPaymentURL.path = () => "/vnpay-web/create-payment-url";
})(createPaymentURL || (exports.createPaymentURL = createPaymentURL = {}));
//# sourceMappingURL=index.js.map