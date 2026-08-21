"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllMyAdvances = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllMyAdvances(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllMyAdvances.METADATA,
        template: findAllMyAdvances.METADATA.path,
        path: findAllMyAdvances.path(query),
    });
}
exports.findAllMyAdvances = findAllMyAdvances;
(function (findAllMyAdvances) {
    findAllMyAdvances.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/advances/my-advances",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllMyAdvances.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/advances/my-advances";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllMyAdvances || (exports.findAllMyAdvances = findAllMyAdvances = {}));
//# sourceMappingURL=index.js.map