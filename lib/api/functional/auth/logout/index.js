"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function logOut(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...logOut.METADATA,
        path: logOut.path(),
    }, input);
}
exports.logOut = logOut;
(function (logOut) {
    logOut.METADATA = {
        method: "POST",
        path: "/auth/logout",
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
    logOut.path = () => "/auth/logout";
})(logOut || (exports.logOut = logOut = {}));
//# sourceMappingURL=index.js.map