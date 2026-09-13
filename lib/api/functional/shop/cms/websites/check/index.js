"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestCheck = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function requestCheck(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...requestCheck.METADATA,
        template: requestCheck.METADATA.path,
        path: requestCheck.path(id),
    });
}
exports.requestCheck = requestCheck;
(function (requestCheck) {
    requestCheck.METADATA = {
        method: "POST",
        path: "/shop/cms/websites/:id/check",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 202,
    };
    requestCheck.path = (id) => `/shop/cms/websites/${encodeURIComponent(id?.toString() ?? "null")}/check`;
})(requestCheck || (exports.requestCheck = requestCheck = {}));
//# sourceMappingURL=index.js.map