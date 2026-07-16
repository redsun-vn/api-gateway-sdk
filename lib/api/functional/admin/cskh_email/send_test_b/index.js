"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTestB = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendTestB(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendTestB.METADATA,
        template: sendTestB.METADATA.path,
        path: sendTestB.path(),
    }, data);
}
exports.sendTestB = sendTestB;
(function (sendTestB) {
    sendTestB.METADATA = {
        method: "POST",
        path: "/admin/cskh-email/send-test-b",
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
    sendTestB.path = () => "/admin/cskh-email/send-test-b";
})(sendTestB || (exports.sendTestB = sendTestB = {}));
//# sourceMappingURL=index.js.map