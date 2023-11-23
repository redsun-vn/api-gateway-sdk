"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.upload = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function upload(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...upload.METADATA,
        path: upload.path(id),
    }, input);
}
exports.upload = upload;
(function (upload) {
    upload.METADATA = {
        method: "POST",
        path: "/attachments/shop/:id",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    upload.path = (id) => {
        return `/attachments/shop/${encodeURIComponent(id ?? "null")}`;
    };
})(upload || (exports.upload = upload = {}));
async function findAll(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        path: findAll.path(id),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/attachments/shop/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findAll.path = (id) => {
        return `/attachments/shop/${encodeURIComponent(id ?? "null")}`;
    };
})(findAll || (exports.findAll = findAll = {}));
//# sourceMappingURL=index.js.map