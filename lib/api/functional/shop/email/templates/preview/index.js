"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.previewTemplate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function previewTemplate(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...previewTemplate.METADATA,
        template: previewTemplate.METADATA.path,
        path: previewTemplate.path(id),
    });
}
exports.previewTemplate = previewTemplate;
(function (previewTemplate) {
    previewTemplate.METADATA = {
        method: "GET",
        path: "/shop/email/templates/:id/preview",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    previewTemplate.path = (id) => `/shop/email/templates/${encodeURIComponent(id?.toString() ?? "null")}/preview`;
})(previewTemplate || (exports.previewTemplate = previewTemplate = {}));
//# sourceMappingURL=index.js.map