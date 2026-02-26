"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageCredits = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getImageCredits(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getImageCredits.METADATA,
        template: getImageCredits.METADATA.path,
        path: getImageCredits.path(query),
    });
}
exports.getImageCredits = getImageCredits;
(function (getImageCredits) {
    getImageCredits.METADATA = {
        method: "GET",
        path: "/admin/ai/config/pricing/image-credits",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getImageCredits.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/ai/config/pricing/image-credits";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getImageCredits || (exports.getImageCredits = getImageCredits = {}));
//# sourceMappingURL=index.js.map