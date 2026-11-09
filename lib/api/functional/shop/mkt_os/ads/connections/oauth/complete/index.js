"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauthComplete = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function oauthComplete(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...oauthComplete.METADATA,
        template: oauthComplete.METADATA.path,
        path: oauthComplete.path(),
    }, body);
}
exports.oauthComplete = oauthComplete;
(function (oauthComplete) {
    oauthComplete.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/ads/connections/oauth/complete",
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
    oauthComplete.path = () => "/shop/mkt-os/ads/connections/oauth/complete";
})(oauthComplete || (exports.oauthComplete = oauthComplete = {}));
//# sourceMappingURL=index.js.map