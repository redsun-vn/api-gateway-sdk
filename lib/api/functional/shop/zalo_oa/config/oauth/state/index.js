"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOAuthState = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createOAuthState(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createOAuthState.METADATA,
        template: createOAuthState.METADATA.path,
        path: createOAuthState.path(),
    }, input);
}
exports.createOAuthState = createOAuthState;
(function (createOAuthState) {
    createOAuthState.METADATA = {
        method: "POST",
        path: "/shop/zalo-oa/config/oauth/state",
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
    createOAuthState.path = () => "/shop/zalo-oa/config/oauth/state";
})(createOAuthState || (exports.createOAuthState = createOAuthState = {}));
//# sourceMappingURL=index.js.map