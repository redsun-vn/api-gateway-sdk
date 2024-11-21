"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = exports.upload = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function upload(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...upload.METADATA,
        template: upload.METADATA.path,
        path: upload.path(),
    });
}
exports.upload = upload;
(function (upload) {
    upload.METADATA = {
        method: "POST",
        path: "/shop/reservation/tables/import",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    upload.path = () => "/shop/reservation/tables/import";
})(upload || (exports.upload = upload = {}));
async function template(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...template.METADATA,
        template: template.METADATA.path,
        path: template.path(),
    });
}
exports.template = template;
(function (template) {
    template.METADATA = {
        method: "GET",
        path: "/shop/reservation/tables/import/template",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    template.path = () => "/shop/reservation/tables/import/template";
})(template || (exports.template = template = {}));
//# sourceMappingURL=index.js.map