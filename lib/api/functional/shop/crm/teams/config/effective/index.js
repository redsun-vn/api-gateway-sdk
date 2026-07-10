"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEffectiveConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getEffectiveConfig(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getEffectiveConfig.METADATA,
        template: getEffectiveConfig.METADATA.path,
        path: getEffectiveConfig.path(query),
    });
}
exports.getEffectiveConfig = getEffectiveConfig;
(function (getEffectiveConfig) {
    getEffectiveConfig.METADATA = {
        method: "GET",
        path: "/shop/crm/teams/config/effective",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getEffectiveConfig.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/teams/config/effective";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getEffectiveConfig || (exports.getEffectiveConfig = getEffectiveConfig = {}));
//# sourceMappingURL=index.js.map