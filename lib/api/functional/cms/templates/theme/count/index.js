"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupCountTree = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getGroupCountTree(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getGroupCountTree.METADATA,
        template: getGroupCountTree.METADATA.path,
        path: getGroupCountTree.path(query),
    });
}
exports.getGroupCountTree = getGroupCountTree;
(function (getGroupCountTree) {
    getGroupCountTree.METADATA = {
        method: "GET",
        path: "/cms/templates/theme/count",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getGroupCountTree.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/cms/templates/theme/count";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getGroupCountTree || (exports.getGroupCountTree = getGroupCountTree = {}));
//# sourceMappingURL=index.js.map