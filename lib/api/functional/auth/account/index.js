"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function deleteAccount(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...deleteAccount.METADATA,
        template: deleteAccount.METADATA.path,
        path: deleteAccount.path(),
    }, input);
}
exports.deleteAccount = deleteAccount;
(function (deleteAccount) {
    deleteAccount.METADATA = {
        method: "DELETE",
        path: "/auth/account",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 204,
    };
    deleteAccount.path = () => "/auth/account";
})(deleteAccount || (exports.deleteAccount = deleteAccount = {}));
//# sourceMappingURL=index.js.map