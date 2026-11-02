"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSend = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function testSend(connection, id, seq) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...testSend.METADATA,
        template: testSend.METADATA.path,
        path: testSend.path(id, seq),
    });
}
exports.testSend = testSend;
(function (testSend) {
    testSend.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/runs/:id/messages/:seq/test-send",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    testSend.path = (id, seq) => `/shop/mkt-os/runs/${encodeURIComponent(id?.toString() ?? "null")}/messages/${encodeURIComponent(seq?.toString() ?? "null")}/test-send`;
})(testSend || (exports.testSend = testSend = {}));
//# sourceMappingURL=index.js.map