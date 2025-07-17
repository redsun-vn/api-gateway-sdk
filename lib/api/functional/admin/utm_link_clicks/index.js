"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllClick = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllClick(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllClick.METADATA,
        template: findAllClick.METADATA.path,
        path: findAllClick.path(query),
    });
}
exports.findAllClick = findAllClick;
(function (findAllClick) {
    findAllClick.METADATA = {
        method: "GET",
        path: "/admin/utm-link-clicks",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllClick.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/utm-link-clicks";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllClick || (exports.findAllClick = findAllClick = {}));
//# sourceMappingURL=index.js.map