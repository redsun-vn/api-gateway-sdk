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
        path: "/admin/utm-links/:code/code",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneByCode.path = (code) => `/admin/utm-links/${encodeURIComponent(code?.toString() ?? "null")}/code`;
})(findOneByCode || (exports.findOneByCode = findOneByCode = {}));
//# sourceMappingURL=index.js.map