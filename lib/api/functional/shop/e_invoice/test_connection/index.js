"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function testConnection(connection, provider, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...testConnection.METADATA,
        template: testConnection.METADATA.path,
        path: testConnection.path(provider, shopId),
    });
}
exports.testConnection = testConnection;
(function (testConnection) {
    testConnection.METADATA = {
        method: "GET",
        path: "/shop/e-invoice/:provider/:shopId/test-connection",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    testConnection.path = (provider, shopId) => `/shop/e-invoice/${encodeURIComponent(provider?.toString() ?? "null")}/${encodeURIComponent(shopId?.toString() ?? "null")}/test-connection`;
})(testConnection || (exports.testConnection = testConnection = {}));
//# sourceMappingURL=index.js.map