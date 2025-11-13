"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCriteria = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getCriteria(connection, businessType) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getCriteria.METADATA,
        template: getCriteria.METADATA.path,
        path: getCriteria.path(businessType),
    });
}
exports.getCriteria = getCriteria;
(function (getCriteria) {
    getCriteria.METADATA = {
        method: "GET",
        path: "/shop/ratings/:businessType/criteria",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getCriteria.path = (businessType) => `/shop/ratings/${encodeURIComponent(businessType?.toString() ?? "null")}/criteria`;
})(getCriteria || (exports.getCriteria = getCriteria = {}));
//# sourceMappingURL=index.js.map