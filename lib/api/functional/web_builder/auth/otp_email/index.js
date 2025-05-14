"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpEmail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function otpEmail(connection, credentials) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...otpEmail.METADATA,
        template: otpEmail.METADATA.path,
        path: otpEmail.path(),
    }, credentials);
}
exports.otpEmail = otpEmail;
(function (otpEmail) {
    otpEmail.METADATA = {
        method: "POST",
        path: "/web-builder/auth/otp-email",
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
    otpEmail.path = () => "/web-builder/auth/otp-email";
})(otpEmail || (exports.otpEmail = otpEmail = {}));
//# sourceMappingURL=index.js.map