"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeAccount = exports.grantAccount = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function grantAccount(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...grantAccount.METADATA,
        template: grantAccount.METADATA.path,
        path: grantAccount.path(id),
    });
}
exports.grantAccount = grantAccount;
(function (grantAccount) {
    grantAccount.METADATA = {
        method: "POST",
        path: "/shop/staffs/:id/account",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    grantAccount.path = (id) => `/shop/staffs/${encodeURIComponent(id?.toString() ?? "null")}/account`;
})(grantAccount || (exports.grantAccount = grantAccount = {}));
async function revokeAccount(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revokeAccount.METADATA,
        template: revokeAccount.METADATA.path,
        path: revokeAccount.path(id),
    });
}
exports.revokeAccount = revokeAccount;
(function (revokeAccount) {
    revokeAccount.METADATA = {
        method: "DELETE",
        path: "/shop/staffs/:id/account",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    revokeAccount.path = (id) => `/shop/staffs/${encodeURIComponent(id?.toString() ?? "null")}/account`;
})(revokeAccount || (exports.revokeAccount = revokeAccount = {}));
//# sourceMappingURL=index.js.map