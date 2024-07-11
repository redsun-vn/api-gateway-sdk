"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOTPSMS = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendOTPSMS(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendOTPSMS.METADATA,
        path: sendOTPSMS.path(),
    }, input);
}
exports.sendOTPSMS = sendOTPSMS;
(function (sendOTPSMS) {
    sendOTPSMS.METADATA = {
        method: "POST",
        path: "/otp/phone-generate",
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
    sendOTPSMS.path = () => "/otp/phone-generate";
})(sendOTPSMS || (exports.sendOTPSMS = sendOTPSMS = {}));
//# sourceMappingURL=index.js.map