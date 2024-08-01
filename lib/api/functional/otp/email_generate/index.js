"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOTPEmail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendOTPEmail(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendOTPEmail.METADATA,
        template: sendOTPEmail.METADATA.path,
        path: sendOTPEmail.path(),
    }, input);
}
exports.sendOTPEmail = sendOTPEmail;
(function (sendOTPEmail) {
    sendOTPEmail.METADATA = {
        method: "POST",
        path: "/otp/email-generate",
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
    sendOTPEmail.path = () => "/otp/email-generate";
})(sendOTPEmail || (exports.sendOTPEmail = sendOTPEmail = {}));
//# sourceMappingURL=index.js.map