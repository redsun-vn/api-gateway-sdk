"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelSelling = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function channelSelling(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...channelSelling.METADATA,
        template: channelSelling.METADATA.path,
        path: channelSelling.path(query),
    });
}
exports.channelSelling = channelSelling;
(function (channelSelling) {
    channelSelling.METADATA = {
        method: "GET",
        path: "/shop/report/channel-selling",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    channelSelling.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/channel-selling";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(channelSelling || (exports.channelSelling = channelSelling = {}));
//# sourceMappingURL=index.js.map