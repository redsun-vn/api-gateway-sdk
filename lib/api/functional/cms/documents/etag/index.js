"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneWithEtag = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneWithEtag(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneWithEtag.METADATA,
        template: findOneWithEtag.METADATA.path,
        path: findOneWithEtag.path(id),
    });
}
exports.findOneWithEtag = findOneWithEtag;
(function (findOneWithEtag) {
    findOneWithEtag.METADATA = {
        method: "GET",
        path: "/cms/documents/:id/etag",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneWithEtag.path = (id) => `/cms/documents/${encodeURIComponent(id?.toString() ?? "null")}/etag`;
})(findOneWithEtag || (exports.findOneWithEtag = findOneWithEtag = {}));
//# sourceMappingURL=index.js.map