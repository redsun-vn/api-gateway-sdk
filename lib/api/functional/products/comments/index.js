"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllComment = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllComment(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllComment.METADATA,
        template: findAllComment.METADATA.path,
        path: findAllComment.path(query),
    });
}
exports.findAllComment = findAllComment;
(function (findAllComment) {
    findAllComment.METADATA = {
        method: "GET",
        path: "/products/comments",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllComment.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/products/comments";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllComment || (exports.findAllComment = findAllComment = {}));
//# sourceMappingURL=index.js.map