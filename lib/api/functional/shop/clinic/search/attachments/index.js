"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAttachments = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function searchAttachments(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...searchAttachments.METADATA,
        template: searchAttachments.METADATA.path,
        path: searchAttachments.path(query),
    });
}
exports.searchAttachments = searchAttachments;
(function (searchAttachments) {
    searchAttachments.METADATA = {
        method: "GET",
        path: "/shop/clinic/search/attachments",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    searchAttachments.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/clinic/search/attachments";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(searchAttachments || (exports.searchAttachments = searchAttachments = {}));
//# sourceMappingURL=index.js.map