"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopDishes = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getTopDishes(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getTopDishes.METADATA,
        template: getTopDishes.METADATA.path,
        path: getTopDishes.path(query),
    });
}
exports.getTopDishes = getTopDishes;
(function (getTopDishes) {
    getTopDishes.METADATA = {
        method: "GET",
        path: "/shop/report/kitchen/top-dishes",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getTopDishes.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/kitchen/top-dishes";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getTopDishes || (exports.getTopDishes = getTopDishes = {}));
//# sourceMappingURL=index.js.map