"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAll(connection, ns, lang) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        template: findAll.METADATA.path,
        path: findAll.path(ns, lang),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/locales/:ns/:lang/translation.json",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAll.path = (ns, lang) => `/locales/${encodeURIComponent(ns?.toString() ?? "null")}/${encodeURIComponent(lang?.toString() ?? "null")}/translation.json`;
})(findAll || (exports.findAll = findAll = {}));
//# sourceMappingURL=index.js.map