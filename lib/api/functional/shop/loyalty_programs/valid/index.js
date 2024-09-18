"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validCode = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function validCode(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...validCode.METADATA,
        template: validCode.METADATA.path,
        path: validCode.path(code),
    });
}
exports.validCode = validCode;
(function (validCode) {
    validCode.METADATA = {
        method: "GET",
        path: "/shop/loyalty-programs/:code/valid",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    validCode.path = (code) => `/shop/loyalty-programs/${encodeURIComponent(code?.toString() ?? "null")}/valid`;
})(validCode || (exports.validCode = validCode = {}));
//# sourceMappingURL=index.js.map