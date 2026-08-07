"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listHistory = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listHistory(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listHistory.METADATA,
        template: listHistory.METADATA.path,
        path: listHistory.path(query),
    });
}
exports.listHistory = listHistory;
(function (listHistory) {
    listHistory.METADATA = {
        method: "GET",
        path: "/shop/sms/history",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listHistory.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/sms/history";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listHistory || (exports.listHistory = listHistory = {}));
//# sourceMappingURL=index.js.map