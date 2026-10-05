"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsHistoryByAction = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function statsHistoryByAction(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...statsHistoryByAction.METADATA,
        template: statsHistoryByAction.METADATA.path,
        path: statsHistoryByAction.path(query),
    });
}
exports.statsHistoryByAction = statsHistoryByAction;
(function (statsHistoryByAction) {
    statsHistoryByAction.METADATA = {
        method: "GET",
        path: "/shop/email/history/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    statsHistoryByAction.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/email/history/stats";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(statsHistoryByAction || (exports.statsHistoryByAction = statsHistoryByAction = {}));
//# sourceMappingURL=index.js.map