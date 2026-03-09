"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTemplates = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listTemplates(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listTemplates.METADATA,
        template: listTemplates.METADATA.path,
        path: listTemplates.path(query),
    });
}
exports.listTemplates = listTemplates;
(function (listTemplates) {
    listTemplates.METADATA = {
        method: "GET",
        path: "/shop/zalo-oa/zns/templates",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listTemplates.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/zalo-oa/zns/templates";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listTemplates || (exports.listTemplates = listTemplates = {}));
//# sourceMappingURL=index.js.map