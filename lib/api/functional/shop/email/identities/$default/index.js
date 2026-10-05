"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultSenderIdentity = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setDefaultSenderIdentity(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setDefaultSenderIdentity.METADATA,
        template: setDefaultSenderIdentity.METADATA.path,
        path: setDefaultSenderIdentity.path(id),
    }, dto);
}
exports.setDefaultSenderIdentity = setDefaultSenderIdentity;
(function (setDefaultSenderIdentity) {
    setDefaultSenderIdentity.METADATA = {
        method: "PATCH",
        path: "/shop/email/identities/:id/default",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    setDefaultSenderIdentity.path = (id) => `/shop/email/identities/${encodeURIComponent(id?.toString() ?? "null")}/default`;
})(setDefaultSenderIdentity || (exports.setDefaultSenderIdentity = setDefaultSenderIdentity = {}));
//# sourceMappingURL=index.js.map