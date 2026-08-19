"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSendTemplate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function testSendTemplate(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...testSendTemplate.METADATA,
        template: testSendTemplate.METADATA.path,
        path: testSendTemplate.path(id),
    }, dto);
}
exports.testSendTemplate = testSendTemplate;
(function (testSendTemplate) {
    testSendTemplate.METADATA = {
        method: "POST",
        path: "/shop/email/templates/:id/test-send",
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
    testSendTemplate.path = (id) => `/shop/email/templates/${encodeURIComponent(id?.toString() ?? "null")}/test-send`;
})(testSendTemplate || (exports.testSendTemplate = testSendTemplate = {}));
//# sourceMappingURL=index.js.map