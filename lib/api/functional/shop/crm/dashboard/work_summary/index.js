"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workSummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function workSummary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...workSummary.METADATA,
        template: workSummary.METADATA.path,
        path: workSummary.path(query),
    });
}
exports.workSummary = workSummary;
(function (workSummary) {
    workSummary.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/work-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    workSummary.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/work-summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(workSummary || (exports.workSummary = workSummary = {}));
//# sourceMappingURL=index.js.map