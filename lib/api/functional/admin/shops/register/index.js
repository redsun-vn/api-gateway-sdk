"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFromAdminRegister = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createFromAdminRegister(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createFromAdminRegister.METADATA,
        template: createFromAdminRegister.METADATA.path,
        path: createFromAdminRegister.path(),
    }, data);
}
exports.createFromAdminRegister = createFromAdminRegister;
(function (createFromAdminRegister) {
    createFromAdminRegister.METADATA = {
        method: "POST",
        path: "/admin/shops/register",
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
    createFromAdminRegister.path = () => "/admin/shops/register";
})(createFromAdminRegister || (exports.createFromAdminRegister = createFromAdminRegister = {}));
//# sourceMappingURL=index.js.map