"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplateInfo = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getTemplateInfo(connection, templateId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getTemplateInfo.METADATA,
        template: getTemplateInfo.METADATA.path,
        path: getTemplateInfo.path(templateId),
    });
}
exports.getTemplateInfo = getTemplateInfo;
(function (getTemplateInfo) {
    getTemplateInfo.METADATA = {
        method: "GET",
        path: "/shop/zalo-oa/zns/template/:templateId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getTemplateInfo.path = (templateId) => `/shop/zalo-oa/zns/template/${encodeURIComponent(templateId?.toString() ?? "null")}`;
})(getTemplateInfo || (exports.getTemplateInfo = getTemplateInfo = {}));
//# sourceMappingURL=index.js.map