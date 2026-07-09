"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFields = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getFields(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getFields.METADATA,
        template: getFields.METADATA.path,
        path: getFields.path(),
    });
}
exports.getFields = getFields;
(function (getFields) {
    getFields.METADATA = {
        method: "GET",
        path: "/shop/crm/scoring-rules/fields",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getFields.path = () => "/shop/crm/scoring-rules/fields";
})(getFields || (exports.getFields = getFields = {}));
//# sourceMappingURL=index.js.map