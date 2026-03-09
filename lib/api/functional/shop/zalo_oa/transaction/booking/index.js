"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTransactionBooking = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendTransactionBooking(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendTransactionBooking.METADATA,
        template: sendTransactionBooking.METADATA.path,
        path: sendTransactionBooking.path(),
    }, input);
}
exports.sendTransactionBooking = sendTransactionBooking;
(function (sendTransactionBooking) {
    sendTransactionBooking.METADATA = {
        method: "POST",
        path: "/shop/zalo-oa/transaction/booking",
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
    sendTransactionBooking.path = () => "/shop/zalo-oa/transaction/booking";
})(sendTransactionBooking || (exports.sendTransactionBooking = sendTransactionBooking = {}));
//# sourceMappingURL=index.js.map