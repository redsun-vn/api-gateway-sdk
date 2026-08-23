"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUrl = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function fileUrl(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...fileUrl.METADATA,
        template: fileUrl.METADATA.path,
        path: fileUrl.path(id),
    });
}
exports.fileUrl = fileUrl;
(function (fileUrl) {
    fileUrl.METADATA = {
        method: "POST",
        path: "/shop/hr/contracts/:id/file-url",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    fileUrl.path = (id) => `/shop/hr/contracts/${encodeURIComponent(id?.toString() ?? "null")}/file-url`;
})(fileUrl || (exports.fileUrl = fileUrl = {}));
//# sourceMappingURL=index.js.map