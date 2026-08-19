"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSendConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function testSendConfig(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...testSendConfig.METADATA,
        template: testSendConfig.METADATA.path,
        path: testSendConfig.path(id),
    }, dto);
}
exports.testSendConfig = testSendConfig;
(function (testSendConfig) {
    testSendConfig.METADATA = {
        method: "POST",
        path: "/shop/email/config/:id/test-send",
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
    testSendConfig.path = (id) => `/shop/email/config/${encodeURIComponent(id?.toString() ?? "null")}/test-send`;
})(testSendConfig || (exports.testSendConfig = testSendConfig = {}));
//# sourceMappingURL=index.js.map