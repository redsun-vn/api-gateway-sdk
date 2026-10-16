"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revenueBySalesChannel = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function revenueBySalesChannel(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revenueBySalesChannel.METADATA,
        template: revenueBySalesChannel.METADATA.path,
        path: revenueBySalesChannel.path(query),
    });
}
exports.revenueBySalesChannel = revenueBySalesChannel;
(function (revenueBySalesChannel) {
    revenueBySalesChannel.METADATA = {
        method: "GET",
        path: "/shop/analytics/channel-selling",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    revenueBySalesChannel.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/channel-selling";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(revenueBySalesChannel || (exports.revenueBySalesChannel = revenueBySalesChannel = {}));
//# sourceMappingURL=index.js.map