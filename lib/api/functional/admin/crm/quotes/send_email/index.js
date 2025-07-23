"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendEmail(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...sendEmail.METADATA,
        template: sendEmail.METADATA.path,
        path: sendEmail.path(id),
    });
}
exports.sendEmail = sendEmail;
(function (sendEmail) {
    sendEmail.METADATA = {
        method: "POST",
        path: "/admin/crm/quotes/send-email/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    sendEmail.path = (id) => `/admin/crm/quotes/send-email/${encodeURIComponent(id?.toString() ?? "null")}`;
})(sendEmail || (exports.sendEmail = sendEmail = {}));
//# sourceMappingURL=index.js.map