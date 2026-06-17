"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllScoped = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllScoped(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllScoped.METADATA,
        template: findAllScoped.METADATA.path,
        path: findAllScoped.path(query),
    });
}
exports.findAllScoped = findAllScoped;
(function (findAllScoped) {
    findAllScoped.METADATA = {
        method: "GET",
        path: "/shop/crm/leads/scoped",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllScoped.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/leads/scoped";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllScoped || (exports.findAllScoped = findAllScoped = {}));
//# sourceMappingURL=index.js.map