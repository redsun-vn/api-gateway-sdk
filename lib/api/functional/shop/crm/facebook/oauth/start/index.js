"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startOAuth = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function startOAuth(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...startOAuth.METADATA,
        template: startOAuth.METADATA.path,
        path: startOAuth.path(),
    });
}
exports.startOAuth = startOAuth;
(function (startOAuth) {
    startOAuth.METADATA = {
        method: "GET",
        path: "/shop/crm/facebook/oauth/start",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    startOAuth.path = () => "/shop/crm/facebook/oauth/start";
})(startOAuth || (exports.startOAuth = startOAuth = {}));
//# sourceMappingURL=index.js.map