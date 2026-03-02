"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateDistribution = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getStateDistribution(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getStateDistribution.METADATA,
        template: getStateDistribution.METADATA.path,
        path: getStateDistribution.path(query),
    });
}
exports.getStateDistribution = getStateDistribution;
(function (getStateDistribution) {
    getStateDistribution.METADATA = {
        method: "GET",
        path: "/shop/report/kitchen/state-distribution",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getStateDistribution.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/kitchen/state-distribution";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getStateDistribution || (exports.getStateDistribution = getStateDistribution = {}));
//# sourceMappingURL=index.js.map