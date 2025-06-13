"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllPromotionUsages = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllPromotionUsages(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllPromotionUsages.METADATA,
        template: findAllPromotionUsages.METADATA.path,
        path: findAllPromotionUsages.path(query),
    });
}
exports.findAllPromotionUsages = findAllPromotionUsages;
(function (findAllPromotionUsages) {
    findAllPromotionUsages.METADATA = {
        method: "GET",
        path: "/admin/promotions/list/usages",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllPromotionUsages.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/promotions/list/usages";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllPromotionUsages || (exports.findAllPromotionUsages = findAllPromotionUsages = {}));
//# sourceMappingURL=index.js.map