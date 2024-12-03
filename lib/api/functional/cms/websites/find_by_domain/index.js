"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneByDomain = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneByDomain(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneByDomain.METADATA,
        template: findOneByDomain.METADATA.path,
        path: findOneByDomain.path(query),
    });
}
exports.findOneByDomain = findOneByDomain;
(function (findOneByDomain) {
    findOneByDomain.METADATA = {
        method: "GET",
        path: "/cms/websites/find-by-domain",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneByDomain.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/cms/websites/find-by-domain";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findOneByDomain || (exports.findOneByDomain = findOneByDomain = {}));
//# sourceMappingURL=index.js.map