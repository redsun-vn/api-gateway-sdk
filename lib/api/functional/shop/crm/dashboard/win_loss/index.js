"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winLoss = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function winLoss(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...winLoss.METADATA,
        template: winLoss.METADATA.path,
        path: winLoss.path(query),
    });
}
exports.winLoss = winLoss;
(function (winLoss) {
    winLoss.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/win-loss",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    winLoss.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/win-loss";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(winLoss || (exports.winLoss = winLoss = {}));
//# sourceMappingURL=index.js.map