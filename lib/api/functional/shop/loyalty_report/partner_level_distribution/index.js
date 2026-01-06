"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartnerLevelDistribution = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPartnerLevelDistribution(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPartnerLevelDistribution.METADATA,
        template: getPartnerLevelDistribution.METADATA.path,
        path: getPartnerLevelDistribution.path(query),
    });
}
exports.getPartnerLevelDistribution = getPartnerLevelDistribution;
(function (getPartnerLevelDistribution) {
    getPartnerLevelDistribution.METADATA = {
        method: "GET",
        path: "/shop/loyalty-report/partner-level-distribution",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPartnerLevelDistribution.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/loyalty-report/partner-level-distribution";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPartnerLevelDistribution || (exports.getPartnerLevelDistribution = getPartnerLevelDistribution = {}));
//# sourceMappingURL=index.js.map