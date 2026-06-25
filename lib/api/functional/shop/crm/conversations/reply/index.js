"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReply = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendReply(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendReply.METADATA,
        template: sendReply.METADATA.path,
        path: sendReply.path(id),
    }, body);
}
exports.sendReply = sendReply;
(function (sendReply) {
    sendReply.METADATA = {
        method: "POST",
        path: "/shop/crm/conversations/:id/reply",
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
    sendReply.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/reply`;
})(sendReply || (exports.sendReply = sendReply = {}));
//# sourceMappingURL=index.js.map