"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSend = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function testSend(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...testSend.METADATA,
        template: testSend.METADATA.path,
        path: testSend.path(id),
    });
}
exports.testSend = testSend;
(function (testSend) {
    testSend.METADATA = {
        method: "POST",
        path: "/shop/loyalty-campaigns-test/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    testSend.path = (id) => `/shop/loyalty-campaigns-test/${encodeURIComponent(id?.toString() ?? "null")}`;
})(testSend || (exports.testSend = testSend = {}));
//# sourceMappingURL=index.js.map