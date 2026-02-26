"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchHistory = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function searchHistory(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...searchHistory.METADATA,
        template: searchHistory.METADATA.path,
        path: searchHistory.path(query),
    });
}
exports.searchHistory = searchHistory;
(function (searchHistory) {
    searchHistory.METADATA = {
        method: "GET",
        path: "/shop/ai/content/search",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    searchHistory.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/ai/content/search";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(searchHistory || (exports.searchHistory = searchHistory = {}));
//# sourceMappingURL=index.js.map