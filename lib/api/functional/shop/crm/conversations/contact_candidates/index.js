"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactCandidates = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getContactCandidates(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getContactCandidates.METADATA,
        template: getContactCandidates.METADATA.path,
        path: getContactCandidates.path(id),
    });
}
exports.getContactCandidates = getContactCandidates;
(function (getContactCandidates) {
    getContactCandidates.METADATA = {
        method: "GET",
        path: "/shop/crm/conversations/:id/contact_candidates",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getContactCandidates.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/contact_candidates`;
})(getContactCandidates || (exports.getContactCandidates = getContactCandidates = {}));
//# sourceMappingURL=index.js.map