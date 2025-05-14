"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function logOut(connection, credentials) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...logOut.METADATA,
        template: logOut.METADATA.path,
        path: logOut.path(),
    }, credentials);
}
exports.logOut = logOut;
(function (logOut) {
    logOut.METADATA = {
        method: "POST",
        path: "/web-builder/auth/logout",
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
    logOut.path = () => "/web-builder/auth/logout";
})(logOut || (exports.logOut = logOut = {}));
//# sourceMappingURL=index.js.map