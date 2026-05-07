"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadClinic = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function uploadClinic(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...uploadClinic.METADATA,
        template: uploadClinic.METADATA.path,
        path: uploadClinic.path(),
    }, input);
}
exports.uploadClinic = uploadClinic;
(function (uploadClinic) {
    uploadClinic.METADATA = {
        method: "POST",
        path: "/attachments/shop/clinic-files",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    uploadClinic.path = () => "/attachments/shop/clinic-files";
})(uploadClinic || (exports.uploadClinic = uploadClinic = {}));
//# sourceMappingURL=index.js.map