"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleOAuthCallback = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function handleOAuthCallback(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...handleOAuthCallback.METADATA,
        template: handleOAuthCallback.METADATA.path,
        path: handleOAuthCallback.path(),
    }, input);
}
exports.handleOAuthCallback = handleOAuthCallback;
(function (handleOAuthCallback) {
    handleOAuthCallback.METADATA = {
        method: "POST",
        path: "/shop/zalo-oa/config/oauth/callback",
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
    handleOAuthCallback.path = () => "/shop/zalo-oa/config/oauth/callback";
})(handleOAuthCallback || (exports.handleOAuthCallback = handleOAuthCallback = {}));
//# sourceMappingURL=index.js.map