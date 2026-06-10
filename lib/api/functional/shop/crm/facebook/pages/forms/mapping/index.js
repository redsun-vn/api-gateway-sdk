"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMapping = exports.saveMapping = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function saveMapping(connection, id, formId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...saveMapping.METADATA,
        template: saveMapping.METADATA.path,
        path: saveMapping.path(id, formId),
    }, body);
}
exports.saveMapping = saveMapping;
(function (saveMapping) {
    saveMapping.METADATA = {
        method: "POST",
        path: "/shop/crm/facebook/pages/:id/forms/:formId/mapping",
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
    saveMapping.path = (id, formId) => `/shop/crm/facebook/pages/${encodeURIComponent(id?.toString() ?? "null")}/forms/${encodeURIComponent(formId?.toString() ?? "null")}/mapping`;
})(saveMapping || (exports.saveMapping = saveMapping = {}));
async function getMapping(connection, id, formId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMapping.METADATA,
        template: getMapping.METADATA.path,
        path: getMapping.path(id, formId),
    });
}
exports.getMapping = getMapping;
(function (getMapping) {
    getMapping.METADATA = {
        method: "GET",
        path: "/shop/crm/facebook/pages/:id/forms/:formId/mapping",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMapping.path = (id, formId) => `/shop/crm/facebook/pages/${encodeURIComponent(id?.toString() ?? "null")}/forms/${encodeURIComponent(formId?.toString() ?? "null")}/mapping`;
})(getMapping || (exports.getMapping = getMapping = {}));
//# sourceMappingURL=index.js.map