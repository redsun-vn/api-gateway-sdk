"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookingConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getBookingConfig(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getBookingConfig.METADATA,
        template: getBookingConfig.METADATA.path,
        path: getBookingConfig.path(query),
    });
}
exports.getBookingConfig = getBookingConfig;
(function (getBookingConfig) {
    getBookingConfig.METADATA = {
        method: "GET",
        path: "/booking/configs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getBookingConfig.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/booking/configs";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getBookingConfig || (exports.getBookingConfig = getBookingConfig = {}));
//# sourceMappingURL=index.js.map