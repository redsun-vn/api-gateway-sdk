"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSend = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function testSend(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...testSend.METADATA,
        template: testSend.METADATA.path,
        path: testSend.path(),
    }, body);
}
exports.testSend = testSend;
(function (testSend) {
    testSend.METADATA = {
        method: "POST",
        path: "/admin/platform-email/senders/test-send",
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
    testSend.path = () => "/admin/platform-email/senders/test-send";
})(testSend || (exports.testSend = testSend = {}));
//# sourceMappingURL=index.js.map