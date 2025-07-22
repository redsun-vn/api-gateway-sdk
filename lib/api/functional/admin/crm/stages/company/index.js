"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByCompany = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByCompany(connection, companyId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByCompany.METADATA,
        template: findByCompany.METADATA.path,
        path: findByCompany.path(companyId),
    });
}
exports.findByCompany = findByCompany;
(function (findByCompany) {
    findByCompany.METADATA = {
        method: "GET",
        path: "/admin/crm/stages/company/:companyId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByCompany.path = (companyId) => `/admin/crm/stages/company/${encodeURIComponent(companyId?.toString() ?? "null")}`;
})(findByCompany || (exports.findByCompany = findByCompany = {}));
//# sourceMappingURL=index.js.map