"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadByFile = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function uploadByFile(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...uploadByFile.METADATA,
        template: uploadByFile.METADATA.path,
        path: uploadByFile.path(),
    });
}
exports.uploadByFile = uploadByFile;
(function (uploadByFile) {
    uploadByFile.METADATA = {
        method: "POST",
        path: "/editor-js/shop/uploadFile",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    uploadByFile.path = () => "/editor-js/shop/uploadFile";
})(uploadByFile || (exports.uploadByFile = uploadByFile = {}));
//# sourceMappingURL=index.js.map