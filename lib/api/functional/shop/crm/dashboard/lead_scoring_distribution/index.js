"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadScoringDistribution = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function leadScoringDistribution(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...leadScoringDistribution.METADATA,
        template: leadScoringDistribution.METADATA.path,
        path: leadScoringDistribution.path(query),
    });
}
exports.leadScoringDistribution = leadScoringDistribution;
(function (leadScoringDistribution) {
    leadScoringDistribution.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/lead-scoring-distribution",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    leadScoringDistribution.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/lead-scoring-distribution";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(leadScoringDistribution || (exports.leadScoringDistribution = leadScoringDistribution = {}));
//# sourceMappingURL=index.js.map