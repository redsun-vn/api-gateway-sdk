"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function clone(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...clone.METADATA,
        template: clone.METADATA.path,
        path: clone.path(),
    }, data);
}
exports.clone = clone;
(function (clone) {
    clone.METADATA = {
        method: "POST",
        path: "/shop/rating-criteria-templates-clone",
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
    clone.path = () => "/shop/rating-criteria-templates-clone";
})(clone || (exports.clone = clone = {}));
//# sourceMappingURL=index.js.map