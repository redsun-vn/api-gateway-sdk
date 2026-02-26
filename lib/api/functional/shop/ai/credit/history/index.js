"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistory = void 0;
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
        path: "/shop/ai/credit/history",
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
        const location = "/shop/ai/credit/history";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getHistory || (exports.getHistory = getHistory = {}));
//# sourceMappingURL=index.js.map