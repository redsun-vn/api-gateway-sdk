"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function reset(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...reset.METADATA,
        template: reset.METADATA.path,
        path: reset.path(),
    }, data);
}
exports.reset = reset;
(function (reset) {
    reset.METADATA = {
        method: "POST",
        path: "/shop/rating-criteria-templates-reset",
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
    reset.path = () => "/shop/rating-criteria-templates-reset";
})(reset || (exports.reset = reset = {}));
//# sourceMappingURL=index.js.map