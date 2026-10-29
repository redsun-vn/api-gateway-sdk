"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshDigest = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function refreshDigest(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...refreshDigest.METADATA,
        template: refreshDigest.METADATA.path,
        path: refreshDigest.path(),
    });
}
exports.refreshDigest = refreshDigest;
(function (refreshDigest) {
    refreshDigest.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/market/digest/refresh",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    refreshDigest.path = () => "/shop/mkt-os/market/digest/refresh";
})(refreshDigest || (exports.refreshDigest = refreshDigest = {}));
//# sourceMappingURL=index.js.map