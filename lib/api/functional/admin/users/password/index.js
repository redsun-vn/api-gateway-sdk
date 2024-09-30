"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updatePassword(connection, data, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updatePassword.METADATA,
        template: updatePassword.METADATA.path,
        path: updatePassword.path(id),
    }, data);
}
exports.updatePassword = updatePassword;
(function (updatePassword) {
    updatePassword.METADATA = {
        method: "PUT",
        path: "/admin/users/:id/password",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    updatePassword.path = (id) => `/admin/users/${encodeURIComponent(id?.toString() ?? "null")}/password`;
})(updatePassword || (exports.updatePassword = updatePassword = {}));
//# sourceMappingURL=index.js.map