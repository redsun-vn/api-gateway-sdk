"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReplyDraft = exports.requestReplyDraft = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function requestReplyDraft(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...requestReplyDraft.METADATA,
        template: requestReplyDraft.METADATA.path,
        path: requestReplyDraft.path(id),
    });
}
exports.requestReplyDraft = requestReplyDraft;
(function (requestReplyDraft) {
    requestReplyDraft.METADATA = {
        method: "POST",
        path: "/shop/crm/conversations/:id/ai-reply-draft",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    requestReplyDraft.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/ai-reply-draft`;
})(requestReplyDraft || (exports.requestReplyDraft = requestReplyDraft = {}));
async function getReplyDraft(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getReplyDraft.METADATA,
        template: getReplyDraft.METADATA.path,
        path: getReplyDraft.path(id),
    });
}
exports.getReplyDraft = getReplyDraft;
(function (getReplyDraft) {
    getReplyDraft.METADATA = {
        method: "GET",
        path: "/shop/crm/conversations/:id/ai-reply-draft",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getReplyDraft.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/ai-reply-draft`;
})(getReplyDraft || (exports.getReplyDraft = getReplyDraft = {}));
//# sourceMappingURL=index.js.map