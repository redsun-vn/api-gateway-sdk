"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discardDraft = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function discardDraft(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...discardDraft.METADATA,
        template: discardDraft.METADATA.path,
        path: discardDraft.path(id),
    });
}
exports.discardDraft = discardDraft;
(function (discardDraft) {
    discardDraft.METADATA = {
        method: "POST",
        path: "/admin/cms/themes/:id/discard",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    discardDraft.path = (id) => `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}/discard`;
})(discardDraft || (exports.discardDraft = discardDraft = {}));
//# sourceMappingURL=index.js.map