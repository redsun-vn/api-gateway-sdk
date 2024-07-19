"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneByCode = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneByCode(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneByCode.METADATA,
        template: findOneByCode.METADATA.path,
        path: findOneByCode.path(code),
    });
}
exports.findOneByCode = findOneByCode;
(function (findOneByCode) {
    findOneByCode.METADATA = {
        method: "GET",
        path: "/shop/payments/:code/code",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOneByCode.path = (code) => `/shop/payments/${encodeURIComponent(code ?? "null")}/code`;
})(findOneByCode || (exports.findOneByCode = findOneByCode = {}));
//# sourceMappingURL=index.js.map