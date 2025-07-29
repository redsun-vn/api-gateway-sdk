"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsScoring = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function analyticsScoring(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...analyticsScoring.METADATA,
        template: analyticsScoring.METADATA.path,
        path: analyticsScoring.path(query),
    });
}
exports.analyticsScoring = analyticsScoring;
(function (analyticsScoring) {
    analyticsScoring.METADATA = {
        method: "GET",
        path: "/admin/crm/leads-analytics/scoring",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    analyticsScoring.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm/leads-analytics/scoring";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(analyticsScoring || (exports.analyticsScoring = analyticsScoring = {}));
//# sourceMappingURL=index.js.map