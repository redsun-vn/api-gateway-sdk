"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllAttributeOptions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllAttributeOptions(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllAttributeOptions.METADATA,
        template: findAllAttributeOptions.METADATA.path,
        path: findAllAttributeOptions.path(query),
    });
}
exports.findAllAttributeOptions = findAllAttributeOptions;
(function (findAllAttributeOptions) {
    findAllAttributeOptions.METADATA = {
        method: "GET",
        path: "/products/attribute-options",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllAttributeOptions.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/products/attribute-options";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllAttributeOptions || (exports.findAllAttributeOptions = findAllAttributeOptions = {}));
//# sourceMappingURL=index.js.map