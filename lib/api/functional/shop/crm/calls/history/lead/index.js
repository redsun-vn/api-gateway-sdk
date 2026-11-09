"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLeadFromCall = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createLeadFromCall(connection, stringeeCallId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createLeadFromCall.METADATA,
        template: createLeadFromCall.METADATA.path,
        path: createLeadFromCall.path(stringeeCallId),
    }, body);
}
exports.createLeadFromCall = createLeadFromCall;
(function (createLeadFromCall) {
    createLeadFromCall.METADATA = {
        method: "POST",
        path: "/shop/crm/calls/history/:stringee_call_id/lead",
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
    createLeadFromCall.path = (stringeeCallId) => `/shop/crm/calls/history/${encodeURIComponent(stringeeCallId?.toString() ?? "null")}/lead`;
})(createLeadFromCall || (exports.createLeadFromCall = createLeadFromCall = {}));
//# sourceMappingURL=index.js.map