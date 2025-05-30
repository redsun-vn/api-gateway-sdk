"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getToken(connection, credentials) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...getToken.METADATA,
        template: getToken.METADATA.path,
        path: getToken.path(),
    }, credentials);
}
exports.getToken = getToken;
(function (getToken) {
    getToken.METADATA = {
        method: "POST",
        path: "/web-builder/auth/login",
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
    getToken.path = () => "/web-builder/auth/login";
})(getToken || (exports.getToken = getToken = {}));
//# sourceMappingURL=index.js.map