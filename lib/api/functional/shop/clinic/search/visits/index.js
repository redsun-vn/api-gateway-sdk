"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchVisits = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function searchVisits(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...searchVisits.METADATA,
        template: searchVisits.METADATA.path,
        path: searchVisits.path(query),
    });
}
exports.searchVisits = searchVisits;
(function (searchVisits) {
    searchVisits.METADATA = {
        method: "GET",
        path: "/shop/clinic/search/visits",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    searchVisits.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/clinic/search/visits";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(searchVisits || (exports.searchVisits = searchVisits = {}));
//# sourceMappingURL=index.js.map