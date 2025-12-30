"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReorderRecommendation = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getReorderRecommendation(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getReorderRecommendation.METADATA,
        template: getReorderRecommendation.METADATA.path,
        path: getReorderRecommendation.path(query),
    });
}
exports.getReorderRecommendation = getReorderRecommendation;
(function (getReorderRecommendation) {
    getReorderRecommendation.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/reorder-recommendation",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getReorderRecommendation.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/reorder-recommendation";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getReorderRecommendation || (exports.getReorderRecommendation = getReorderRecommendation = {}));
//# sourceMappingURL=index.js.map