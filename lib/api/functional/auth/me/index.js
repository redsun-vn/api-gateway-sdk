"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMe(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMe.METADATA,
        template: getMe.METADATA.path,
        path: getMe.path(),
    });
}
exports.getMe = getMe;
(function (getMe) {
    getMe.METADATA = {
        method: "GET",
        path: "/auth/me",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMe.path = () => "/auth/me";
})(getMe || (exports.getMe = getMe = {}));
//# sourceMappingURL=index.js.map