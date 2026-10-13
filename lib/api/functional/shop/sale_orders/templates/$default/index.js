"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultTemplate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setDefaultTemplate(connection, templateId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...setDefaultTemplate.METADATA,
        template: setDefaultTemplate.METADATA.path,
        path: setDefaultTemplate.path(templateId),
    });
}
exports.setDefaultTemplate = setDefaultTemplate;
(function (setDefaultTemplate) {
    setDefaultTemplate.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/templates/:templateId/default",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    setDefaultTemplate.path = (templateId) => `/shop/sale-orders/templates/${encodeURIComponent(templateId?.toString() ?? "null")}/default`;
})(setDefaultTemplate || (exports.setDefaultTemplate = setDefaultTemplate = {}));
//# sourceMappingURL=index.js.map