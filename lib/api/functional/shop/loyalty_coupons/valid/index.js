"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validCode = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function validCode(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...validCode.METADATA,
        path: validCode.path(code),
    });
}
exports.validCode = validCode;
(function (validCode) {
    validCode.METADATA = {
        method: "GET",
        path: "/shop/loyalty-coupons/:code/valid",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    validCode.path = (code) => {
        return `/shop/loyalty-coupons/${encodeURIComponent(code ?? "null")}/valid`;
    };
})(validCode || (exports.validCode = validCode = {}));
//# sourceMappingURL=index.js.map