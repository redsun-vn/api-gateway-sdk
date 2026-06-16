"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicTimeline = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPublicTimeline(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPublicTimeline.METADATA,
        template: getPublicTimeline.METADATA.path,
        path: getPublicTimeline.path(query),
    });
}
exports.getPublicTimeline = getPublicTimeline;
(function (getPublicTimeline) {
    getPublicTimeline.METADATA = {
        method: "GET",
        path: "/ratings-statistics/timeline",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPublicTimeline.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/ratings-statistics/timeline";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPublicTimeline || (exports.getPublicTimeline = getPublicTimeline = {}));
//# sourceMappingURL=index.js.map