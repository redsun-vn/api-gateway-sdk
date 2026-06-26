"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachmentAccess = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function attachmentAccess(connection, refId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...attachmentAccess.METADATA,
        template: attachmentAccess.METADATA.path,
        path: attachmentAccess.path(refId),
    });
}
exports.attachmentAccess = attachmentAccess;
(function (attachmentAccess) {
    attachmentAccess.METADATA = {
        method: "POST",
        path: "/shop/crm/conversations/attachments/:refId/access",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    attachmentAccess.path = (refId) => `/shop/crm/conversations/attachments/${encodeURIComponent(refId?.toString() ?? "null")}/access`;
})(attachmentAccess || (exports.attachmentAccess = attachmentAccess = {}));
//# sourceMappingURL=index.js.map