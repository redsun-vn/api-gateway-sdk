"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markPublished = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function markPublished(connection, id, targetId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...markPublished.METADATA,
        template: markPublished.METADATA.path,
        path: markPublished.path(id, targetId),
    }, body);
}
exports.markPublished = markPublished;
(function (markPublished) {
    markPublished.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/targets/:targetId/mark-published",
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
    markPublished.path = (id, targetId) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/targets/${encodeURIComponent(targetId?.toString() ?? "null")}/mark-published`;
})(markPublished || (exports.markPublished = markPublished = {}));
//# sourceMappingURL=index.js.map