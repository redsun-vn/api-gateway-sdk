"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkContact = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function linkContact(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...linkContact.METADATA,
        template: linkContact.METADATA.path,
        path: linkContact.path(id),
    }, body);
}
exports.linkContact = linkContact;
(function (linkContact) {
    linkContact.METADATA = {
        method: "POST",
        path: "/shop/crm/conversations/:id/link-contact",
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
    linkContact.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/link-contact`;
})(linkContact || (exports.linkContact = linkContact = {}));
//# sourceMappingURL=index.js.map