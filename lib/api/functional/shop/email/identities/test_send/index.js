"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSendSenderIdentity = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function testSendSenderIdentity(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...testSendSenderIdentity.METADATA,
        template: testSendSenderIdentity.METADATA.path,
        path: testSendSenderIdentity.path(id),
    }, dto);
}
exports.testSendSenderIdentity = testSendSenderIdentity;
(function (testSendSenderIdentity) {
    testSendSenderIdentity.METADATA = {
        method: "POST",
        path: "/shop/email/identities/:id/test-send",
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
    testSendSenderIdentity.path = (id) => `/shop/email/identities/${encodeURIComponent(id?.toString() ?? "null")}/test-send`;
})(testSendSenderIdentity || (exports.testSendSenderIdentity = testSendSenderIdentity = {}));
//# sourceMappingURL=index.js.map