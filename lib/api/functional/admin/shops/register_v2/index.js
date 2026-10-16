"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFromAdminRegisterV2 = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createFromAdminRegisterV2(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createFromAdminRegisterV2.METADATA,
        template: createFromAdminRegisterV2.METADATA.path,
        path: createFromAdminRegisterV2.path(),
    }, data);
}
exports.createFromAdminRegisterV2 = createFromAdminRegisterV2;
(function (createFromAdminRegisterV2) {
    createFromAdminRegisterV2.METADATA = {
        method: "POST",
        path: "/admin/shops/register-v2",
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
    createFromAdminRegisterV2.path = () => "/admin/shops/register-v2";
})(createFromAdminRegisterV2 || (exports.createFromAdminRegisterV2 = createFromAdminRegisterV2 = {}));
//# sourceMappingURL=index.js.map