"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllLanguages = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllLanguages(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllLanguages.METADATA,
        template: findAllLanguages.METADATA.path,
        path: findAllLanguages.path(query),
    });
}
exports.findAllLanguages = findAllLanguages;
(function (findAllLanguages) {
    findAllLanguages.METADATA = {
        method: "GET",
        path: "/languages",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllLanguages.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/languages";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllLanguages || (exports.findAllLanguages = findAllLanguages = {}));
//# sourceMappingURL=index.js.map