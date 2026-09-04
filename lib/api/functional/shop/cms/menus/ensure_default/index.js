"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDefault = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function ensureDefault(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...ensureDefault.METADATA,
        template: ensureDefault.METADATA.path,
        path: ensureDefault.path(),
    }, data);
}
exports.ensureDefault = ensureDefault;
(function (ensureDefault) {
    ensureDefault.METADATA = {
        method: "POST",
        path: "/shop/cms/menus/ensure-default",
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
    ensureDefault.path = () => "/shop/cms/menus/ensure-default";
})(ensureDefault || (exports.ensureDefault = ensureDefault = {}));
//# sourceMappingURL=index.js.map