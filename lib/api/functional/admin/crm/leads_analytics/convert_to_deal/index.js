"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToDeal = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function convertToDeal(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...convertToDeal.METADATA,
        template: convertToDeal.METADATA.path,
        path: convertToDeal.path(id),
    });
}
exports.convertToDeal = convertToDeal;
(function (convertToDeal) {
    convertToDeal.METADATA = {
        method: "POST",
        path: "/admin/crm/leads-analytics/convert-to-deal/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    convertToDeal.path = (id) => `/admin/crm/leads-analytics/convert-to-deal/${encodeURIComponent(id?.toString() ?? "null")}`;
})(convertToDeal || (exports.convertToDeal = convertToDeal = {}));
//# sourceMappingURL=index.js.map