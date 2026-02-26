"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistoryDetail = exports.getHistory = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getHistory(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getHistory.METADATA,
        template: getHistory.METADATA.path,
        path: getHistory.path(query),
    });
}
exports.getHistory = getHistory;
(function (getHistory) {
    getHistory.METADATA = {
        method: "GET",
        path: "/shop/ai/content/history",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getHistory.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/ai/content/history";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getHistory || (exports.getHistory = getHistory = {}));
async function getHistoryDetail(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getHistoryDetail.METADATA,
        template: getHistoryDetail.METADATA.path,
        path: getHistoryDetail.path(id),
    });
}
exports.getHistoryDetail = getHistoryDetail;
(function (getHistoryDetail) {
    getHistoryDetail.METADATA = {
        method: "GET",
        path: "/shop/ai/content/history/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getHistoryDetail.path = (id) => `/shop/ai/content/history/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getHistoryDetail || (exports.getHistoryDetail = getHistoryDetail = {}));
//# sourceMappingURL=index.js.map