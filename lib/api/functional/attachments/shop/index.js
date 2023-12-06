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
async function findAll(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        path: findAll.path(id, query),
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
    findAll.path = (id, query) => {
        const variables = query;
        const search = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded = search.toString();
        return `/attachments/shop/${encodeURIComponent(id ?? "null")}${encoded.length ? `?${encoded}` : ""}`;
        ;
    };
})(findAll || (exports.findAll = findAll = {}));
//# sourceMappingURL=index.js.map