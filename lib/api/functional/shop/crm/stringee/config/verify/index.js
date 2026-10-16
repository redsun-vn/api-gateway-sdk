"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function verifyConfig(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...verifyConfig.METADATA,
        template: verifyConfig.METADATA.path,
        path: verifyConfig.path(),
    }, body);
}
exports.verifyConfig = verifyConfig;
(function (verifyConfig) {
    verifyConfig.METADATA = {
        method: "POST",
        path: "/shop/crm/stringee/config/verify",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    verifyConfig.path = () => "/shop/crm/stringee/config/verify";
})(verifyConfig || (exports.verifyConfig = verifyConfig = {}));
//# sourceMappingURL=index.js.map