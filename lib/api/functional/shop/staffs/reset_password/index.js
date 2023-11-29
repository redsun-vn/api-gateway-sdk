"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function resetPassword(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...resetPassword.METADATA,
        path: resetPassword.path(),
    }, data);
}
exports.resetPassword = resetPassword;
(function (resetPassword) {
    resetPassword.METADATA = {
        method: "PATCH",
        path: "/shop/staffs/reset-password",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    resetPassword.path = () => {
        return `/shop/staffs/reset-password`;
    };
})(resetPassword || (exports.resetPassword = resetPassword = {}));
//# sourceMappingURL=index.js.map