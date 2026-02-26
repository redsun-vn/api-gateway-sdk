"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextCredits = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getTextCredits(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getTextCredits.METADATA,
        template: getTextCredits.METADATA.path,
        path: getTextCredits.path(query),
    });
}
exports.getTextCredits = getTextCredits;
(function (getTextCredits) {
    getTextCredits.METADATA = {
        method: "GET",
        path: "/admin/ai/config/pricing/text-credits",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getTextCredits.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/ai/config/pricing/text-credits";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getTextCredits || (exports.getTextCredits = getTextCredits = {}));
//# sourceMappingURL=index.js.map