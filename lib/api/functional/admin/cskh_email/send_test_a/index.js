"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTestA = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendTestA(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendTestA.METADATA,
        template: sendTestA.METADATA.path,
        path: sendTestA.path(),
    }, data);
}
exports.sendTestA = sendTestA;
(function (sendTestA) {
    sendTestA.METADATA = {
        method: "POST",
        path: "/admin/cskh-email/send-test-a",
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
    sendTestA.path = () => "/admin/cskh-email/send-test-a";
})(sendTestA || (exports.sendTestA = sendTestA = {}));
//# sourceMappingURL=index.js.map