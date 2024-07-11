"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function refreshToken(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...refreshToken.METADATA,
        path: refreshToken.path(),
    }, input);
}
exports.refreshToken = refreshToken;
(function (refreshToken) {
    refreshToken.METADATA = {
        method: "POST",
        path: "/auth/refresh-token",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    refreshToken.path = () => "/auth/refresh-token";
})(refreshToken || (exports.refreshToken = refreshToken = {}));
//# sourceMappingURL=index.js.map