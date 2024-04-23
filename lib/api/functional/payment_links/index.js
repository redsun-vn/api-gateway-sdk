"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOne(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        path: findOne.path(code),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/payment-links/:code",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOne.path = (code) => {
        return `/payment-links/${encodeURIComponent(code ?? "null")}`;
    };
})(findOne || (exports.findOne = findOne = {}));
//# sourceMappingURL=index.js.map