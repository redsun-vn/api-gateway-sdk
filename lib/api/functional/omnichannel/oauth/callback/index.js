"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauthCallback = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function oauthCallback(connection, code, state) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...oauthCallback.METADATA,
        template: oauthCallback.METADATA.path,
        path: oauthCallback.path(code, state),
    });
}
exports.oauthCallback = oauthCallback;
(function (oauthCallback) {
    oauthCallback.METADATA = {
        method: "GET",
        path: "/omnichannel/oauth/callback",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    oauthCallback.path = (code, state) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries({
            code,
            state,
        }))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/omnichannel/oauth/callback";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(oauthCallback || (exports.oauthCallback = oauthCallback = {}));
//# sourceMappingURL=index.js.map