"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOutV2 = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function logOutV2(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...logOutV2.METADATA,
        template: logOutV2.METADATA.path,
        path: logOutV2.path(),
    }, input);
}
exports.logOutV2 = logOutV2;
(function (logOutV2) {
    logOutV2.METADATA = {
        method: "POST",
        path: "/auth/logout-v2",
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
    logOutV2.path = () => "/auth/logout-v2";
})(logOutV2 || (exports.logOutV2 = logOutV2 = {}));
//# sourceMappingURL=index.js.map