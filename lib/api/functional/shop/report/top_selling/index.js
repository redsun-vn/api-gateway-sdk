"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topSelling = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function topSelling(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...topSelling.METADATA,
        template: topSelling.METADATA.path,
        path: topSelling.path(query),
    });
}
exports.topSelling = topSelling;
(function (topSelling) {
    topSelling.METADATA = {
        method: "GET",
        path: "/shop/report/top-selling",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    topSelling.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/top-selling";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(topSelling || (exports.topSelling = topSelling = {}));
//# sourceMappingURL=index.js.map