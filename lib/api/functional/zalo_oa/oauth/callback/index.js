"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauthCallback = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function oauthCallback(connection, code, oaId, state) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...oauthCallback.METADATA,
        template: oauthCallback.METADATA.path,
        path: oauthCallback.path(code, oaId, state),
    });
}
exports.oauthCallback = oauthCallback;
(function (oauthCallback) {
    oauthCallback.METADATA = {
        method: "GET",
        path: "/zalo-oa/oauth/callback",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    oauthCallback.path = (code, oaId, state) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries({
            code,
            oa_id: oaId,
            state,
        }))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/zalo-oa/oauth/callback";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(oauthCallback || (exports.oauthCallback = oauthCallback = {}));
//# sourceMappingURL=index.js.map