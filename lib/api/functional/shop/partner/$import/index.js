"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = exports.upload = void 0;
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
        path: "/shop/partner/import",
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
    upload.path = () => "/shop/partner/import";
})(upload || (exports.upload = upload = {}));
async function template(connection, type) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...template.METADATA,
        template: template.METADATA.path,
        path: template.path(type),
    });
}
exports.template = template;
(function (template) {
    template.METADATA = {
        method: "GET",
        path: "/shop/partner/import/template/:type",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    template.path = (type) => `/shop/partner/import/template/${encodeURIComponent(type?.toString() ?? "null")}`;
})(template || (exports.template = template = {}));
//# sourceMappingURL=index.js.map