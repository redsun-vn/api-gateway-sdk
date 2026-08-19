"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateTemplate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function activateTemplate(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...activateTemplate.METADATA,
        template: activateTemplate.METADATA.path,
        path: activateTemplate.path(id),
    });
}
exports.activateTemplate = activateTemplate;
(function (activateTemplate) {
    activateTemplate.METADATA = {
        method: "PATCH",
        path: "/shop/email/templates/:id/activate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    activateTemplate.path = (id) => `/shop/email/templates/${encodeURIComponent(id?.toString() ?? "null")}/activate`;
})(activateTemplate || (exports.activateTemplate = activateTemplate = {}));
//# sourceMappingURL=index.js.map