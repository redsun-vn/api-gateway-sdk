"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneByCode = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneByCode(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneByCode.METADATA,
        path: findOneByCode.path(code),
    });
}
exports.findOneByCode = findOneByCode;
(function (findOneByCode) {
    findOneByCode.METADATA = {
        method: "GET",
        path: "/admin/payments/code/:code",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOneByCode.path = (code) => `/admin/payments/code/${encodeURIComponent(code ?? "null")}`;
})(findOneByCode || (exports.findOneByCode = findOneByCode = {}));
//# sourceMappingURL=index.js.map