"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendEmail(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendEmail.METADATA,
        template: sendEmail.METADATA.path,
        path: sendEmail.path(),
    }, data);
}
exports.sendEmail = sendEmail;
(function (sendEmail) {
    sendEmail.METADATA = {
        method: "POST",
        path: "/shop/crm/notifications/email",
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
    sendEmail.path = () => "/shop/crm/notifications/email";
})(sendEmail || (exports.sendEmail = sendEmail = {}));
//# sourceMappingURL=index.js.map