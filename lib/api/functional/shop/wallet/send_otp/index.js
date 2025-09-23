"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOTP = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendOTP(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendOTP.METADATA,
        template: sendOTP.METADATA.path,
        path: sendOTP.path(),
    }, data);
}
exports.sendOTP = sendOTP;
(function (sendOTP) {
    sendOTP.METADATA = {
        method: "POST",
        path: "/shop/wallet/send-otp",
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
    sendOTP.path = () => "/shop/wallet/send-otp";
})(sendOTP || (exports.sendOTP = sendOTP = {}));
//# sourceMappingURL=index.js.map