"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerOwnerV2 = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function registerOwnerV2(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...registerOwnerV2.METADATA,
        template: registerOwnerV2.METADATA.path,
        path: registerOwnerV2.path(),
    }, input);
}
exports.registerOwnerV2 = registerOwnerV2;
(function (registerOwnerV2) {
    registerOwnerV2.METADATA = {
        method: "POST",
        path: "/admin/staffs/register-v2",
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
    registerOwnerV2.path = () => "/admin/staffs/register-v2";
})(registerOwnerV2 || (exports.registerOwnerV2 = registerOwnerV2 = {}));
//# sourceMappingURL=index.js.map