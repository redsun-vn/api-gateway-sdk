"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOAuthStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getOAuthStatus(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOAuthStatus.METADATA,
        template: getOAuthStatus.METADATA.path,
        path: getOAuthStatus.path(),
    });
}
exports.getOAuthStatus = getOAuthStatus;
(function (getOAuthStatus) {
    getOAuthStatus.METADATA = {
        method: "GET",
        path: "/shop/crm/facebook/oauth/status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOAuthStatus.path = () => "/shop/crm/facebook/oauth/status";
})(getOAuthStatus || (exports.getOAuthStatus = getOAuthStatus = {}));
//# sourceMappingURL=index.js.map