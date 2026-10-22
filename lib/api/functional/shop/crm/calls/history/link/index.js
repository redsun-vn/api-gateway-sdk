"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkRecord = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function linkRecord(connection, stringeeCallId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...linkRecord.METADATA,
        template: linkRecord.METADATA.path,
        path: linkRecord.path(stringeeCallId),
    }, body);
}
exports.linkRecord = linkRecord;
(function (linkRecord) {
    linkRecord.METADATA = {
        method: "POST",
        path: "/shop/crm/calls/history/:stringee_call_id/link",
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
    linkRecord.path = (stringeeCallId) => `/shop/crm/calls/history/${encodeURIComponent(stringeeCallId?.toString() ?? "null")}/link`;
})(linkRecord || (exports.linkRecord = linkRecord = {}));
//# sourceMappingURL=index.js.map