"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function testConnection(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...testConnection.METADATA,
        template: testConnection.METADATA.path,
        path: testConnection.path(),
    }, data);
}
exports.testConnection = testConnection;
(function (testConnection) {
    testConnection.METADATA = {
        method: "POST",
        path: "/shop/e-invoice/test-connection",
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
    testConnection.path = () => "/shop/e-invoice/test-connection";
})(testConnection || (exports.testConnection = testConnection = {}));
//# sourceMappingURL=index.js.map