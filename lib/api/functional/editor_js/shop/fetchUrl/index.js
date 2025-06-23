"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadByUrl = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function uploadByUrl(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...uploadByUrl.METADATA,
        template: uploadByUrl.METADATA.path,
        path: uploadByUrl.path(),
    }, body);
}
exports.uploadByUrl = uploadByUrl;
(function (uploadByUrl) {
    uploadByUrl.METADATA = {
        method: "POST",
        path: "/editor-js/shop/fetchUrl",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    uploadByUrl.path = () => "/editor-js/shop/fetchUrl";
})(uploadByUrl || (exports.uploadByUrl = uploadByUrl = {}));
//# sourceMappingURL=index.js.map