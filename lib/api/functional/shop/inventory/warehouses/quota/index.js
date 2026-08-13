"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuota = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getQuota(connection, branchId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getQuota.METADATA,
        template: getQuota.METADATA.path,
        path: getQuota.path(branchId),
    });
}
exports.getQuota = getQuota;
(function (getQuota) {
    getQuota.METADATA = {
        method: "GET",
        path: "/shop/inventory/warehouses/quota/:branchId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getQuota.path = (branchId) => `/shop/inventory/warehouses/quota/${encodeURIComponent(branchId?.toString() ?? "null")}`;
})(getQuota || (exports.getQuota = getQuota = {}));
//# sourceMappingURL=index.js.map