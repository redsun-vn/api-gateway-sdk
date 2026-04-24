"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByVisit = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByVisit(connection, visitId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByVisit.METADATA,
        template: findByVisit.METADATA.path,
        path: findByVisit.path(visitId),
    });
}
exports.findByVisit = findByVisit;
(function (findByVisit) {
    findByVisit.METADATA = {
        method: "GET",
        path: "/shop/clinic/attachments/visit/:visitId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByVisit.path = (visitId) => `/shop/clinic/attachments/visit/${encodeURIComponent(visitId?.toString() ?? "null")}`;
})(findByVisit || (exports.findByVisit = findByVisit = {}));
//# sourceMappingURL=index.js.map