"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function refreshToken(connection, credentials) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...refreshToken.METADATA,
        template: refreshToken.METADATA.path,
        path: refreshToken.path(),
    }, credentials);
}
exports.refreshToken = refreshToken;
(function (refreshToken) {
    refreshToken.METADATA = {
        method: "POST",
        path: "/web-builder/auth/refresh-token",
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
    refreshToken.path = () => "/web-builder/auth/refresh-token";
})(refreshToken || (exports.refreshToken = refreshToken = {}));
//# sourceMappingURL=index.js.map