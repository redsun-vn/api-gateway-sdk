"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroups = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getGroups(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getGroups.METADATA,
        template: getGroups.METADATA.path,
        path: getGroups.path(query),
    });
}
exports.getGroups = getGroups;
(function (getGroups) {
    getGroups.METADATA = {
        method: "GET",
        path: "/shop/cms/templates/groups",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getGroups.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/cms/templates/groups";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getGroups || (exports.getGroups = getGroups = {}));
//# sourceMappingURL=index.js.map