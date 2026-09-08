"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordEmail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function resetPasswordEmail(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...resetPasswordEmail.METADATA,
        template: resetPasswordEmail.METADATA.path,
        path: resetPasswordEmail.path(),
    }, input);
}
exports.resetPasswordEmail = resetPasswordEmail;
(function (resetPasswordEmail) {
    resetPasswordEmail.METADATA = {
        method: "POST",
        path: "/auth/reset-password-email",
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
    resetPasswordEmail.path = () => "/auth/reset-password-email";
})(resetPasswordEmail || (exports.resetPasswordEmail = resetPasswordEmail = {}));
//# sourceMappingURL=index.js.map