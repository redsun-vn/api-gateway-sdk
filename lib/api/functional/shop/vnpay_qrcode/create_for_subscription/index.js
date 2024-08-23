"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQRCodeForSubscription = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createQRCodeForSubscription(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createQRCodeForSubscription.METADATA,
        path: createQRCodeForSubscription.path(),
    }, data);
}
exports.createQRCodeForSubscription = createQRCodeForSubscription;
(function (createQRCodeForSubscription) {
    createQRCodeForSubscription.METADATA = {
        method: "POST",
        path: "/shop/vnpay-qrcode/create-for-subscription",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    createQRCodeForSubscription.path = () => "/shop/vnpay-qrcode/create-for-subscription";
})(createQRCodeForSubscription || (exports.createQRCodeForSubscription = createQRCodeForSubscription = {}));
//# sourceMappingURL=index.js.map