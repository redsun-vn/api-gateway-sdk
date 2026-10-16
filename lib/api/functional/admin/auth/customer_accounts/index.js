"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerAccount = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createCustomerAccount(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createCustomerAccount.METADATA,
        template: createCustomerAccount.METADATA.path,
        path: createCustomerAccount.path(),
    }, input);
}
exports.createCustomerAccount = createCustomerAccount;
(function (createCustomerAccount) {
    createCustomerAccount.METADATA = {
        method: "POST",
        path: "/admin/auth/customer-accounts",
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
    createCustomerAccount.path = () => "/admin/auth/customer-accounts";
})(createCustomerAccount || (exports.createCustomerAccount = createCustomerAccount = {}));
//# sourceMappingURL=index.js.map