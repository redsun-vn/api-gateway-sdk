"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listActions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listActions(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listActions.METADATA,
        template: listActions.METADATA.path,
        path: listActions.path(query),
    });
}
exports.listActions = listActions;
(function (listActions) {
    listActions.METADATA = {
        method: "GET",
        path: "/shop/email/actions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listActions.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/email/actions";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listActions || (exports.listActions = listActions = {}));
//# sourceMappingURL=index.js.map