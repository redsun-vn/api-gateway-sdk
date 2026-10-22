"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyDetail = exports.history = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function history(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...history.METADATA,
        template: history.METADATA.path,
        path: history.path(query),
    });
}
exports.history = history;
(function (history) {
    history.METADATA = {
        method: "GET",
        path: "/shop/crm/calls/history",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    history.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/calls/history";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(history || (exports.history = history = {}));
async function historyDetail(connection, stringeeCallId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...historyDetail.METADATA,
        template: historyDetail.METADATA.path,
        path: historyDetail.path(stringeeCallId),
    });
}
exports.historyDetail = historyDetail;
(function (historyDetail) {
    historyDetail.METADATA = {
        method: "GET",
        path: "/shop/crm/calls/history/:stringee_call_id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    historyDetail.path = (stringeeCallId) => `/shop/crm/calls/history/${encodeURIComponent(stringeeCallId?.toString() ?? "null")}`;
})(historyDetail || (exports.historyDetail = historyDetail = {}));
//# sourceMappingURL=index.js.map