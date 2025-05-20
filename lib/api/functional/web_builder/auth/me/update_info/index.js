"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInfo = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateInfo(connection, credentials) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateInfo.METADATA,
        template: updateInfo.METADATA.path,
        path: updateInfo.path(),
    }, credentials);
}
exports.updateInfo = updateInfo;
(function (updateInfo) {
    updateInfo.METADATA = {
        method: "POST",
        path: "/web-builder/auth/me/update-info",
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
    updateInfo.path = () => "/web-builder/auth/me/update-info";
})(updateInfo || (exports.updateInfo = updateInfo = {}));
//# sourceMappingURL=index.js.map