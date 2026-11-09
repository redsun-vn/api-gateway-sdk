"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markBounced = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function markBounced(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...markBounced.METADATA,
        template: markBounced.METADATA.path,
        path: markBounced.path(id),
    });
}
exports.markBounced = markBounced;
(function (markBounced) {
    markBounced.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscribers/:id/bounced",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    markBounced.path = (id) => `/shop/mkt-os/subscribers/${encodeURIComponent(id?.toString() ?? "null")}/bounced`;
})(markBounced || (exports.markBounced = markBounced = {}));
//# sourceMappingURL=index.js.map