"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishTemplate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function publishTemplate(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...publishTemplate.METADATA,
        template: publishTemplate.METADATA.path,
        path: publishTemplate.path(id),
    });
}
exports.publishTemplate = publishTemplate;
(function (publishTemplate) {
    publishTemplate.METADATA = {
        method: "POST",
        path: "/admin/platform-email/templates/:id/publish",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    publishTemplate.path = (id) => `/admin/platform-email/templates/${encodeURIComponent(id?.toString() ?? "null")}/publish`;
})(publishTemplate || (exports.publishTemplate = publishTemplate = {}));
//# sourceMappingURL=index.js.map