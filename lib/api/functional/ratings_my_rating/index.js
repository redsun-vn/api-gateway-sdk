"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyRating = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMyRating(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMyRating.METADATA,
        template: getMyRating.METADATA.path,
        path: getMyRating.path(query),
    });
}
exports.getMyRating = getMyRating;
(function (getMyRating) {
    getMyRating.METADATA = {
        method: "GET",
        path: "/ratings-my-rating",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMyRating.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/ratings-my-rating";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getMyRating || (exports.getMyRating = getMyRating = {}));
//# sourceMappingURL=index.js.map