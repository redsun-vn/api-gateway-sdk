"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function resetPassword(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...resetPassword.METADATA,
        template: resetPassword.METADATA.path,
        path: resetPassword.path(),
    }, input);
}
exports.resetPassword = resetPassword;
(function (resetPassword) {
    resetPassword.METADATA = {
        method: "POST",
        path: "/staffs/reset-password",
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
    resetPassword.path = () => "/staffs/reset-password";
})(resetPassword || (exports.resetPassword = resetPassword = {}));
//# sourceMappingURL=index.js.map