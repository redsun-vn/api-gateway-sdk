"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provision = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function provision(connection, shopId, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...provision.METADATA,
        template: provision.METADATA.path,
        path: provision.path(shopId),
    }, input);
}
exports.provision = provision;
(function (provision) {
    provision.METADATA = {
        method: "POST",
        path: "/admin/shops/:shopId/website",
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
    provision.path = (shopId) => `/admin/shops/${encodeURIComponent(shopId?.toString() ?? "null")}/website`;
})(provision || (exports.provision = provision = {}));
//# sourceMappingURL=index.js.map