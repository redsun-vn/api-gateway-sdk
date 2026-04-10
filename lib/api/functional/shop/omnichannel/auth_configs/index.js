"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthConfig = exports.getAuthConfigsByProvider = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getAuthConfigsByProvider(connection, provider) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getAuthConfigsByProvider.METADATA,
        template: getAuthConfigsByProvider.METADATA.path,
        path: getAuthConfigsByProvider.path(provider),
    });
}
exports.getAuthConfigsByProvider = getAuthConfigsByProvider;
(function (getAuthConfigsByProvider) {
    getAuthConfigsByProvider.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/auth-configs/:provider",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getAuthConfigsByProvider.path = (provider) => `/shop/omnichannel/auth-configs/${encodeURIComponent(provider?.toString() ?? "null")}`;
})(getAuthConfigsByProvider || (exports.getAuthConfigsByProvider = getAuthConfigsByProvider = {}));
async function deleteAuthConfig(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteAuthConfig.METADATA,
        template: deleteAuthConfig.METADATA.path,
        path: deleteAuthConfig.path(id),
    });
}
exports.deleteAuthConfig = deleteAuthConfig;
(function (deleteAuthConfig) {
    deleteAuthConfig.METADATA = {
        method: "DELETE",
        path: "/shop/omnichannel/auth-configs/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteAuthConfig.path = (id) => `/shop/omnichannel/auth-configs/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteAuthConfig || (exports.deleteAuthConfig = deleteAuthConfig = {}));
//# sourceMappingURL=index.js.map