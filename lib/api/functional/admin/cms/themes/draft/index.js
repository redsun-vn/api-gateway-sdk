"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDraft = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createDraft(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...createDraft.METADATA,
        template: createDraft.METADATA.path,
        path: createDraft.path(id),
    });
}
exports.createDraft = createDraft;
(function (createDraft) {
    createDraft.METADATA = {
        method: "POST",
        path: "/admin/cms/themes/:id/draft",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    createDraft.path = (id) => `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}/draft`;
})(createDraft || (exports.createDraft = createDraft = {}));
//# sourceMappingURL=index.js.map