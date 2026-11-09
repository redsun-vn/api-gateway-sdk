"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resummarizeTranscript = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function resummarizeTranscript(connection, stringeeCallId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...resummarizeTranscript.METADATA,
        template: resummarizeTranscript.METADATA.path,
        path: resummarizeTranscript.path(stringeeCallId),
    });
}
exports.resummarizeTranscript = resummarizeTranscript;
(function (resummarizeTranscript) {
    resummarizeTranscript.METADATA = {
        method: "POST",
        path: "/shop/crm/calls/history/:stringee_call_id/transcript/resummarize",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    resummarizeTranscript.path = (stringeeCallId) => `/shop/crm/calls/history/${encodeURIComponent(stringeeCallId?.toString() ?? "null")}/transcript/resummarize`;
})(resummarizeTranscript || (exports.resummarizeTranscript = resummarizeTranscript = {}));
//# sourceMappingURL=index.js.map