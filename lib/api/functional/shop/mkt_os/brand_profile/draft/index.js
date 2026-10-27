"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveDraft = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function saveDraft(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...saveDraft.METADATA,
        template: saveDraft.METADATA.path,
        path: saveDraft.path(),
    }, body);
}
exports.saveDraft = saveDraft;
(function (saveDraft) {
    saveDraft.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/brand-profile/draft",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    saveDraft.path = () => "/shop/mkt-os/brand-profile/draft";
})(saveDraft || (exports.saveDraft = saveDraft = {}));
//# sourceMappingURL=index.js.map