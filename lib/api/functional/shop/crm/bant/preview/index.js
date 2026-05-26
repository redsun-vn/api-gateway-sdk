"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.previewRubric = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function previewRubric(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...previewRubric.METADATA,
        template: previewRubric.METADATA.path,
        path: previewRubric.path(),
    }, body);
}
exports.previewRubric = previewRubric;
(function (previewRubric) {
    previewRubric.METADATA = {
        method: "POST",
        path: "/shop/crm/bant/preview",
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
    previewRubric.path = () => "/shop/crm/bant/preview";
})(previewRubric || (exports.previewRubric = previewRubric = {}));
//# sourceMappingURL=index.js.map