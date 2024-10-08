"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportTemplate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function exportTemplate(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...exportTemplate.METADATA,
        template: exportTemplate.METADATA.path,
        path: exportTemplate.path(),
    });
}
exports.exportTemplate = exportTemplate;
(function (exportTemplate) {
    exportTemplate.METADATA = {
        method: "GET",
        path: "/shop/product/template",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    exportTemplate.path = () => "/shop/product/template";
})(exportTemplate || (exports.exportTemplate = exportTemplate = {}));
//# sourceMappingURL=index.js.map