"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateTemplate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function duplicateTemplate(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...duplicateTemplate.METADATA,
        template: duplicateTemplate.METADATA.path,
        path: duplicateTemplate.path(id),
    }, dto);
}
exports.duplicateTemplate = duplicateTemplate;
(function (duplicateTemplate) {
    duplicateTemplate.METADATA = {
        method: "POST",
        path: "/shop/email/templates/:id/duplicate",
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
    duplicateTemplate.path = (id) => `/shop/email/templates/${encodeURIComponent(id?.toString() ?? "null")}/duplicate`;
})(duplicateTemplate || (exports.duplicateTemplate = duplicateTemplate = {}));
//# sourceMappingURL=index.js.map