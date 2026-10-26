"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapTranscriptRoles = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function swapTranscriptRoles(connection, stringeeCallId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...swapTranscriptRoles.METADATA,
        template: swapTranscriptRoles.METADATA.path,
        path: swapTranscriptRoles.path(stringeeCallId),
    });
}
exports.swapTranscriptRoles = swapTranscriptRoles;
(function (swapTranscriptRoles) {
    swapTranscriptRoles.METADATA = {
        method: "POST",
        path: "/shop/crm/calls/history/:stringee_call_id/transcript/swap-roles",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    swapTranscriptRoles.path = (stringeeCallId) => `/shop/crm/calls/history/${encodeURIComponent(stringeeCallId?.toString() ?? "null")}/transcript/swap-roles`;
})(swapTranscriptRoles || (exports.swapTranscriptRoles = swapTranscriptRoles = {}));
//# sourceMappingURL=index.js.map