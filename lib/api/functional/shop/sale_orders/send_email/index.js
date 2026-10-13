"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendEmail(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendEmail.METADATA,
        template: sendEmail.METADATA.path,
        path: sendEmail.path(id),
    }, body);
}
exports.sendEmail = sendEmail;
(function (sendEmail) {
    sendEmail.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/:id/send-email",
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
    sendEmail.path = (id) => `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/send-email`;
})(sendEmail || (exports.sendEmail = sendEmail = {}));
//# sourceMappingURL=index.js.map