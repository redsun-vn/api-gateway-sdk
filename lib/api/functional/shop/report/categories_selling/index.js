"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySelling = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function categorySelling(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...categorySelling.METADATA,
        template: categorySelling.METADATA.path,
        path: categorySelling.path(query),
    });
}
exports.categorySelling = categorySelling;
(function (categorySelling) {
    categorySelling.METADATA = {
        method: "GET",
        path: "/shop/report/categories-selling",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    categorySelling.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/categories-selling";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(categorySelling || (exports.categorySelling = categorySelling = {}));
//# sourceMappingURL=index.js.map