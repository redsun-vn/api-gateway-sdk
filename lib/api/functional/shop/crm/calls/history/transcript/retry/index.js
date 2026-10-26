"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryTranscript = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function retryTranscript(connection, stringeeCallId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...retryTranscript.METADATA,
        template: retryTranscript.METADATA.path,
        path: retryTranscript.path(stringeeCallId),
    });
}
exports.retryTranscript = retryTranscript;
(function (retryTranscript) {
    retryTranscript.METADATA = {
        method: "POST",
        path: "/shop/crm/calls/history/:stringee_call_id/transcript/retry",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    retryTranscript.path = (stringeeCallId) => `/shop/crm/calls/history/${encodeURIComponent(stringeeCallId?.toString() ?? "null")}/transcript/retry`;
})(retryTranscript || (exports.retryTranscript = retryTranscript = {}));
//# sourceMappingURL=index.js.map