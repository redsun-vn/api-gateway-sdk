"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByHandle = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByHandle(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByHandle.METADATA,
        template: findByHandle.METADATA.path,
        path: findByHandle.path(query),
    });
}
exports.findByHandle = findByHandle;
(function (findByHandle) {
    findByHandle.METADATA = {
        method: "GET",
        path: "/cms/menus/by-handle",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByHandle.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/cms/menus/by-handle";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findByHandle || (exports.findByHandle = findByHandle = {}));
//# sourceMappingURL=index.js.map