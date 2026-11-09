"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauthStart = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function oauthStart(connection, platform, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...oauthStart.METADATA,
        template: oauthStart.METADATA.path,
        path: oauthStart.path(platform, query),
    });
}
exports.oauthStart = oauthStart;
(function (oauthStart) {
    oauthStart.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/ads/connections/:platform/oauth/start",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    oauthStart.path = (platform, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/mkt-os/ads/connections/${encodeURIComponent(platform?.toString() ?? "null")}/oauth/start`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(oauthStart || (exports.oauthStart = oauthStart = {}));
//# sourceMappingURL=index.js.map