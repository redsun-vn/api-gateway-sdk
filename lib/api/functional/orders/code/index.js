"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOrderByCode = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOrderByCode(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOrderByCode.METADATA,
        template: findOrderByCode.METADATA.path,
        path: findOrderByCode.path(code),
    });
}
exports.findOrderByCode = findOrderByCode;
(function (findOrderByCode) {
    findOrderByCode.METADATA = {
        method: "GET",
        path: "/orders/:code/code",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOrderByCode.path = (code) => `/orders/${encodeURIComponent(code?.toString() ?? "null")}/code`;
})(findOrderByCode || (exports.findOrderByCode = findOrderByCode = {}));
//# sourceMappingURL=index.js.map