"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markRead = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function markRead(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...markRead.METADATA,
        template: markRead.METADATA.path,
        path: markRead.path(id),
    });
}
exports.markRead = markRead;
(function (markRead) {
    markRead.METADATA = {
        method: "POST",
        path: "/shop/crm/conversations/:id/read",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    markRead.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/read`;
})(markRead || (exports.markRead = markRead = {}));
//# sourceMappingURL=index.js.map