"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function upload(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...upload.METADATA,
        template: upload.METADATA.path,
        path: upload.path(),
    }, input);
}
exports.upload = upload;
(function (upload) {
    upload.METADATA = {
        method: "POST",
        path: "/shop/product/import",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    upload.path = () => "/shop/product/import";
})(upload || (exports.upload = upload = {}));
//# sourceMappingURL=index.js.map