"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenForProvider = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function refreshTokenForProvider(connection, opts) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...refreshTokenForProvider.METADATA,
        template: refreshTokenForProvider.METADATA.path,
        path: refreshTokenForProvider.path(),
    }, opts);
}
exports.refreshTokenForProvider = refreshTokenForProvider;
(function (refreshTokenForProvider) {
    refreshTokenForProvider.METADATA = {
        method: "POST",
        path: "/omnichannel/shop/refresh-token",
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
    refreshTokenForProvider.path = () => "/omnichannel/shop/refresh-token";
})(refreshTokenForProvider || (exports.refreshTokenForProvider = refreshTokenForProvider = {}));
//# sourceMappingURL=index.js.map