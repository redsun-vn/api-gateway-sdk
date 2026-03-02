"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceQuality = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getServiceQuality(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getServiceQuality.METADATA,
        template: getServiceQuality.METADATA.path,
        path: getServiceQuality.path(query),
    });
}
exports.getServiceQuality = getServiceQuality;
(function (getServiceQuality) {
    getServiceQuality.METADATA = {
        method: "GET",
        path: "/shop/report/kitchen/service-quality",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getServiceQuality.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/kitchen/service-quality";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getServiceQuality || (exports.getServiceQuality = getServiceQuality = {}));
//# sourceMappingURL=index.js.map