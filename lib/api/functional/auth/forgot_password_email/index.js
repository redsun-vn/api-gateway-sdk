"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordEmail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function forgotPasswordEmail(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...forgotPasswordEmail.METADATA,
        template: forgotPasswordEmail.METADATA.path,
        path: forgotPasswordEmail.path(),
    }, input);
}
exports.forgotPasswordEmail = forgotPasswordEmail;
(function (forgotPasswordEmail) {
    forgotPasswordEmail.METADATA = {
        method: "POST",
        path: "/auth/forgot-password-email",
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
    forgotPasswordEmail.path = () => "/auth/forgot-password-email";
})(forgotPasswordEmail || (exports.forgotPasswordEmail = forgotPasswordEmail = {}));
//# sourceMappingURL=index.js.map