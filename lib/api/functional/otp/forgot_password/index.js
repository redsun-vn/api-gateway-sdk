"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPassword = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function forgotPassword(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...forgotPassword.METADATA,
        template: forgotPassword.METADATA.path,
        path: forgotPassword.path(),
    }, input);
}
exports.forgotPassword = forgotPassword;
(function (forgotPassword) {
    forgotPassword.METADATA = {
        method: "POST",
        path: "/otp/forgot-password",
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
    forgotPassword.path = () => "/otp/forgot-password";
})(forgotPassword || (exports.forgotPassword = forgotPassword = {}));
//# sourceMappingURL=index.js.map