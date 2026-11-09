"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertWrapup = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function upsertWrapup(connection, stringeeCallId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...upsertWrapup.METADATA,
        template: upsertWrapup.METADATA.path,
        path: upsertWrapup.path(stringeeCallId),
    }, body);
}
exports.upsertWrapup = upsertWrapup;
(function (upsertWrapup) {
    upsertWrapup.METADATA = {
        method: "PUT",
        path: "/shop/crm/calls/:stringee_call_id/wrap-up",
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
    upsertWrapup.path = (stringeeCallId) => `/shop/crm/calls/${encodeURIComponent(stringeeCallId?.toString() ?? "null")}/wrap-up`;
})(upsertWrapup || (exports.upsertWrapup = upsertWrapup = {}));
//# sourceMappingURL=index.js.map