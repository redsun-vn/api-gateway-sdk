"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardSummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function boardSummary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...boardSummary.METADATA,
        template: boardSummary.METADATA.path,
        path: boardSummary.path(query),
    });
}
exports.boardSummary = boardSummary;
(function (boardSummary) {
    boardSummary.METADATA = {
        method: "GET",
        path: "/shop/crm/opportunities/board-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    boardSummary.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/opportunities/board-summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(boardSummary || (exports.boardSummary = boardSummary = {}));
//# sourceMappingURL=index.js.map