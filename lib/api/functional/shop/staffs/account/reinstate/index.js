"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reinstateAccount = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function reinstateAccount(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...reinstateAccount.METADATA,
        template: reinstateAccount.METADATA.path,
        path: reinstateAccount.path(id),
    });
}
exports.reinstateAccount = reinstateAccount;
(function (reinstateAccount) {
    reinstateAccount.METADATA = {
        method: "POST",
        path: "/shop/staffs/:id/account/reinstate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    reinstateAccount.path = (id) => `/shop/staffs/${encodeURIComponent(id?.toString() ?? "null")}/account/reinstate`;
})(reinstateAccount || (exports.reinstateAccount = reinstateAccount = {}));
//# sourceMappingURL=index.js.map