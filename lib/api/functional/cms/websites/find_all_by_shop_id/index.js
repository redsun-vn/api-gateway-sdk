"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllByShopId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllByShopId(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllByShopId.METADATA,
        template: findAllByShopId.METADATA.path,
        path: findAllByShopId.path(query),
    });
}
exports.findAllByShopId = findAllByShopId;
(function (findAllByShopId) {
    findAllByShopId.METADATA = {
        method: "GET",
        path: "/cms/websites/find-all-by-shop-id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllByShopId.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/cms/websites/find-all-by-shop-id";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllByShopId || (exports.findAllByShopId = findAllByShopId = {}));
//# sourceMappingURL=index.js.map