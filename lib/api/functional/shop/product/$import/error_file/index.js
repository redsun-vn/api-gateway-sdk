"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorFile = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function errorFile(connection, importId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...errorFile.METADATA,
        template: errorFile.METADATA.path,
        path: errorFile.path(importId),
    });
}
exports.errorFile = errorFile;
(function (errorFile) {
    errorFile.METADATA = {
        method: "GET",
        path: "/shop/product/import/:importId/error-file",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    errorFile.path = (importId) => `/shop/product/import/${encodeURIComponent(importId?.toString() ?? "null")}/error-file`;
})(errorFile || (exports.errorFile = errorFile = {}));
//# sourceMappingURL=index.js.map