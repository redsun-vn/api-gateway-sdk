"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHierarchy = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getHierarchy(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getHierarchy.METADATA,
        template: getHierarchy.METADATA.path,
        path: getHierarchy.path(query),
    });
}
exports.getHierarchy = getHierarchy;
(function (getHierarchy) {
    getHierarchy.METADATA = {
        method: "GET",
        path: "/admin/crm-kpis-hierarchy",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getHierarchy.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm-kpis-hierarchy";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getHierarchy || (exports.getHierarchy = getHierarchy = {}));
//# sourceMappingURL=index.js.map