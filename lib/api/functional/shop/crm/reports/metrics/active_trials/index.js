"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeTrials = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function activeTrials(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...activeTrials.METADATA,
        template: activeTrials.METADATA.path,
        path: activeTrials.path(query),
    });
}
exports.activeTrials = activeTrials;
(function (activeTrials) {
    activeTrials.METADATA = {
        method: "GET",
        path: "/shop/crm/reports/metrics/active-trials",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    activeTrials.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/reports/metrics/active-trials";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(activeTrials || (exports.activeTrials = activeTrials = {}));
//# sourceMappingURL=index.js.map