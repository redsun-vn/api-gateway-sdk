"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContact = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendContact(connection, contact) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendContact.METADATA,
        template: sendContact.METADATA.path,
        path: sendContact.path(),
    }, contact);
}
exports.sendContact = sendContact;
(function (sendContact) {
    sendContact.METADATA = {
        method: "POST",
        path: "/web-builder/auth/send-contact",
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
    sendContact.path = () => "/web-builder/auth/send-contact";
})(sendContact || (exports.sendContact = sendContact = {}));
//# sourceMappingURL=index.js.map