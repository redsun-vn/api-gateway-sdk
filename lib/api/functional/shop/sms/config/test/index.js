"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSend = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function testSend(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...testSend.METADATA,
        template: testSend.METADATA.path,
        path: testSend.path(id),
    }, dto);
}
exports.testSend = testSend;
(function (testSend) {
    testSend.METADATA = {
        method: "POST",
        path: "/shop/sms/config/:id/test",
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
    testSend.path = (id) => `/shop/sms/config/${encodeURIComponent(id?.toString() ?? "null")}/test`;
})(testSend || (exports.testSend = testSend = {}));
//# sourceMappingURL=index.js.map