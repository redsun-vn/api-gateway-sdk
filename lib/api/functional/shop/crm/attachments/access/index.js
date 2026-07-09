"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grantAccess = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function grantAccess(connection, attachmentRefId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...grantAccess.METADATA,
        template: grantAccess.METADATA.path,
        path: grantAccess.path(attachmentRefId),
    });
}
exports.grantAccess = grantAccess;
(function (grantAccess) {
    grantAccess.METADATA = {
        method: "POST",
        path: "/shop/crm/attachments/:attachment_ref_id/access",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    grantAccess.path = (attachmentRefId) => `/shop/crm/attachments/${encodeURIComponent(attachmentRefId?.toString() ?? "null")}/access`;
})(grantAccess || (exports.grantAccess = grantAccess = {}));
//# sourceMappingURL=index.js.map