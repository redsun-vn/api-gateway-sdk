"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function list(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/email-layouts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = () => "/shop/mkt-os/email-layouts";
})(list || (exports.list = list = {}));
//# sourceMappingURL=index.js.map