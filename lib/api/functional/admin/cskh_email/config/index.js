"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getConfig(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getConfig.METADATA,
        template: getConfig.METADATA.path,
        path: getConfig.path(),
    });
}
exports.getConfig = getConfig;
(function (getConfig) {
    getConfig.METADATA = {
        method: "GET",
        path: "/admin/cskh-email/config",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getConfig.path = () => "/admin/cskh-email/config";
})(getConfig || (exports.getConfig = getConfig = {}));
//# sourceMappingURL=index.js.map