"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function verifyConfig(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...verifyConfig.METADATA,
        template: verifyConfig.METADATA.path,
        path: verifyConfig.path(),
    });
}
exports.verifyConfig = verifyConfig;
(function (verifyConfig) {
    verifyConfig.METADATA = {
        method: "POST",
        path: "/shop/zalo-oa/config/verify",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    verifyConfig.path = () => "/shop/zalo-oa/config/verify";
})(verifyConfig || (exports.verifyConfig = verifyConfig = {}));
//# sourceMappingURL=index.js.map